import React from "react";
import styles from "src/styles/HongKongSchoolApply.module.css";
import InterviewGuide from "../Application/InterviewGuide";
import Link from "next/link";
import homepage from 'apidata/homepage-zx.json'
import { useRouter } from 'next/router'

const HongKongSchoolApply: React.FC = () => {
  // 申请材料数据
  const applyMaterials = [
    { icon: "/home/papers.svg", text: "学生出世纸及护照" },
    { icon: "/home/id-card.svg", text: "家长香港身份证/护照/通行证" },
    { icon: "/home/file-spreadsheet.svg", text: "学生近两学年成绩表/学术报告" },
    { icon: "/home/certificate-alt-1.svg", text: "学生奖状、证书" },
    { icon: "/home/pictures.svg", text: "学生个人生活照及家庭合照" },
    { icon: "/home/question-sign-circle.svg", text: "国际学校问卷(申请前请家长回答)" },
  ];

  // 申请步骤数据
  const applySteps = [
    {
      step: "01",
      title: "评估规划",
      content: [
        "评估学生需求教育/工作背景",
        "匹配《择校方案》",
      ],
    },
    {
      step: "02",
      title: "签约",
      content: [
        "正式签委託协议书",
        "收集学生报名资料",
      ],
    },
    {
      step: "03",
      title: "资料确认",
      content: [
        "双证、成绩单",
        "学历认证开具工作证明",
        "整理个人信息资料表",
      ],
    },
    {
      step: "04",
      title: "留学文案",
      content: [
        "个人陈述PS",
        "简历CV",
        "推荐信RL",
      ],
    },
    {
      step: "05",
      title: "参加面试",
      content: [
        "笔试部分：CAT4 / MAP / ISEE等",
        "面试部分：中英文模拟面试及面试技巧培训",
        "学生及家长《面试常见问题》",
      ],
    },
    {
      step: "06",
      title: "录取注册",
      content: [
        "收到录取文件，选择最终专业",
        "缴纳留位费，指导新生注册选科",
      ],
    },
    {
      step: "07",
      title: "申请学生签证1年",
      content: [
        "准备学生签证申请材料",
        "收到批复后补交学习计划等文件",
      ],
    },
    {
      step: "08",
      title: "入境开学",
      content: [
        "入境激活签证，办理香港身份证",
        "开学",
      ],
    },
    {
      step: "09",
      title: "首次申请IANG签证2年",
      content: [
        "顺利毕业",
        "非本地毕业生就业即获得IANG2年签证",
      ],
    },
    {
      step: "10",
      title: "续签3+3年",
      content: [
        "获得公司僱佣",
        "两次续签工作签证",
      ],
    },
  ];

  const router = useRouter(); // 用于获取当前路由信息
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

  const navItems = [
    { label: g(homepage,'application_in'),link:"/application/application-international-school"},
    { label: g(homepage,'application_lo'),link:"/application/local-school"},
    { label: g(homepage,'application_un') ,link:"/application/bachelor-application"},
    { label: g(homepage,'application_sh'),link:"/application/master-application", isActive: true },
  ];
 

  return (
    <div className="bg-white border-l-8 border-r-8 border-blue-200 ">
    <div className={styles.container}>
      {/* 标题和背景文字 */}
      <div className={styles.titleWrapper}>
        <h1 className={styles.mainTitle}>{g(homepage,'application_in')}</h1>
        <span className={styles.backgroundText}>Apply</span>
      </div>

      {/* 导航栏 */}
      <nav className={styles.navBar}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`${styles.navItem} ${
              item.isActive? styles.activeNav : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {/* 申请材料部分 */}
      {/* <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{g(homepage,'apply_t_1')}</h2>
        <div className={styles.materialsList}>
          {applyMaterials.map((material, index) => (
            <div key={index} className={styles.materialItem}>
              <img src={material.icon} alt="material-icon" className={styles.materialIcon} />
              <span>{material.text}</span>
            </div>
          ))}
        </div>
      </section> */}

      {/* 申请步骤部分 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{g(homepage,'apply_t_4')}</h2>
        <div className={styles.stepsList}>
          {applySteps.map((step, index) => (
            <div key={index} className={styles.stepItem}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>{step.step}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              <ul className={styles.stepContent}>
                {step.content.map((item, subIndex) => (
                  <li key={subIndex}>{item}</li>
                ))}
              </ul>
              {/* {step.icon && (
                <img src={step.icon} alt="step-icon" className={styles.stepIcon} />
              )} */}
            </div>
          ))}
        </div>
      </section>
      {/* <InterviewGuide/> */}
      <div className={styles.bannerContainer}>
      <p className={styles.bannerText}>如果您不知道怎么选择适合孩子的学校？</p>
      <Link href="/assessment" className={styles.consultButton}>
        咨询/评估
      </Link>
    </div>
    </div>
    </div>
  );
};

export default HongKongSchoolApply;