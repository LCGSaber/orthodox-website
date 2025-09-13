import React, { useState } from "react";
import styles from "src/styles/AssessmentForm.module.css";
import homepage from 'apidata/homepage-zx-1.json'
import { useRouter } from 'next/router'

const AssessmentForm: React.FC = () => {
  const router = useRouter(); // 用于获取当前路由信息
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

  // 表单状态 - 修复了类型定义问题，添加了countryCode字段
  const [formData, setFormData] = useState<{
    name: string;
    countryCode: string;
    phone: string;
    wechat: string;
    email: string;
    projects: string[];
    demand: string;
  }>({
    name: "",
    countryCode: "+86", // 默认中国区号
    phone: "",
    wechat: "",
    email: "",
    projects: [],
    demand: "",
  });

  // 表单提交处理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("提交按钮被点击");
    
    // 简单的表单验证
    if (!formData.name) {
      alert('请输入姓名');
      return;
    }
    
    if (!formData.phone) {
      alert('请输入手机号码');
      return;
    }
    
    if (formData.projects.length === 0) {
      alert('请至少选择一个项目类型');
      return;
    }
    
    // 将区号添加到电话号码前面
    const fullPhoneNumber = formData.countryCode + formData.phone;
    const submitData = {
      ...formData,
      fullPhoneNumber, // 添加带区号的完整电话号码
      phone: fullPhoneNumber // 或者直接覆盖原phone字段
    };
    
    // 表单提交逻辑
    console.log("表单数据：", submitData);
    // alert('表单提交成功！\n电话号码：' + fullPhoneNumber);
    // 实际项目中替换为API调用
    console.log('准备发送API请求到:', '/api/enquiry');
    console.log('请求数据:', submitData);
    
    // 先测试health API来验证路由是否正常
    fetch('/api/health')
      .then(healthRes => {
        console.log('health API测试响应状态:', healthRes.status);
        return healthRes.json();
      })
      .then(healthData => {
        console.log('health API测试成功:', healthData);
        
        // 然后再发送实际的enquiry请求
        return fetch('/api/enquiry', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(submitData)
        });
      })
      .then(enquiryResponse => {
        console.log("邮件发送结果状态码：", enquiryResponse.status);
        console.log("邮件发送结果头信息：", enquiryResponse.headers);
        
        return enquiryResponse.text().then(text => {
          try {
            return JSON.parse(text);
          } catch (e) {
            return text;
          }
        }).then(data => {
          console.log("邮件发送结果数据：", data);
          
          if (enquiryResponse.ok) {
            console.log('邮件发送成功');
          } else {
            console.error('邮件发送失败:', data);
          }
          
          return data;
        });
      })
      .catch(error => {
        console.error('请求错误:', error);
        console.error('错误堆栈:', error.stack);
      });
  };

  // 处理输入变化 - 修复了事件处理类型问题
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement; // 明确指定为输入元素类型
    const { name, value, type } = target;
    
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        projects: target.checked
          ? [...prev.projects, value]
          : prev.projects.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="bg-white">
    <div className={styles.formContainer}>
      {/* 背景文字 */}
      <div className={styles.backgroundText}>Assessment</div>
      <h2 className={styles.title}>{g(homepage,'t_1')}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
            {g(homepage,'t_2')} <span className={styles.required}>{g(homepage,'t_3')}</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={g(homepage,'t_4')}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
            {g(homepage,'t_5')} <span className={styles.required}>{g(homepage,'t_3')}</span>
            </label>
            <div className={styles.phoneWrapper}>
              <select 
                className={styles.countryCode}
                name="countryCode"
                onChange={handleChange}
              >
                <option value="+86">+86</option>
                <option value="+852">+852</option>
                <option value="+886">+886</option>
              </select>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={g(homepage,'t_6')}
                className={styles.input}
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>{g(homepage,'t_7')}</label>
            <input
              type="text"
              name="wechat"
              value={formData.wechat}
              onChange={handleChange}
              placeholder={g(homepage,'t_7_1')}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>{g(homepage,'t_8')}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={g(homepage,'t_9')}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
          {g(homepage,'t_10')} <span className={styles.required}>{g(homepage,'t_3')}</span>
          </label>
          <div className={styles.checkboxGroup}>
            {(() => {
              const projectOptions = locale === 'sc' 
                ? ["香港国际学校申请", "香港本地学校申请", "副学士本科申请", "硕士申请", "港式课程", "课后托管", "其他"] 
                : ["香港國際學校申請", "香港本地學校申請", "副學士本科申請", "碩士申請", "港式課程", "課後託管", "其他"];
              
              return projectOptions.map((item: string) => (
                <label key={item} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="projects"
                    value={item}
                    checked={formData.projects.includes(item)}
                    onChange={handleChange}
                    className={styles.checkbox}
                  />
                  {item}
                </label>
              ));
            })()}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>需求</label>
          <textarea
            name="demand"
            value={formData.demand}
            onChange={handleChange}
            placeholder={g(homepage,'t_11')}
            className={styles.textarea}
            maxLength={500}
          />
        </div>
        <div className={styles.submitContainer}>
        <button type="submit" className={styles.submitButton}>
          立即提交
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AssessmentForm;
    