import React, { useState } from "react";
import styles from "src/styles/applications/AdmissionGuide.module.css";
import Link from 'next/link';

const AdmissionGuide: React.FC = () => {
  // 用于控制当前显示的标签，0 表示小一申请，1 表示中一申请，2 表示中小学插班
  const [activeTab, setActiveTab] = useState(0); 

  // 小一申请对应的内容和材料
  const primaryOneContent = (
    <>
      <div className={styles.contentHeader}>
        <h2 className={styles.sectionTitle}>小一入学统筹办法</h2>
        <div className={styles.backgroundText}>Primary One</div>
      </div>
      
      <div className={styles.contentBody}>
        <p className={styles.contentParagraph}>“小一入学统筹办法” 是香港特区政府统一管理所有官立及资助小学取录学生的一套机制。</p>
        <p className={styles.contentParagraph}>香港总共有五百多间小学，接近九成为官立及资助小学，他们全部要使用 “小一入学统筹办法” 收生。只有私立、直资、及国际学校是自主收生的。简单来说，现行的机制分为 “自行分配学位” 及 “统一派位” 两个阶段。</p>
        <p className={styles.contentParagraph}>在第一阶段 “自行分配学位” ，你可以不受学校网限制，为你的子女向任何一间官立或资助小学申请入学。这个阶段主要讲求 “关系” 及 “世袭” ，大约有一半学童会在这阶段获学校取录，而不获取录的要进入第二阶段申请入学。</p>
        <p className={styles.contentParagraph}>在第二阶段 “统一派位” ，你决定选择学校的优先次序，让电脑根据 “随机编号” 分派学位，而且你可选择的学校大部分是受你的居住地区限制的。这个阶段主要讲求 “选校次序的策略” 及 “运气” 。</p>
        <p className={styles.contentParagraph}>当然，你仍可为你的子女申请入读私立或直资小学，这类学校自行决定小一收生办法。下图简介将于2023年升读小一的学生会经历的不同途径及各个阶段。</p>
      </div>
      
      {/* 申请材料部分 */}
      <div className={styles.materialsSection}>
        <h3 className={styles.materialsTitle}>小一申请所需材料</h3>
        <div className={styles.materialsList}>
          <div className={styles.materialItem}>
            <img src="/home/papers.svg" alt="出生证明" className={styles.materialIcon} />
            <span>学生出生证明副本</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/id-card.svg" alt="身份证" className={styles.materialIcon} />
            <span>学生身份证副本（如有）</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/file-spreadsheet.svg" alt="疫苗记录" className={styles.materialIcon} />
            <span>学生疫苗接种记录</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/id-card.svg" alt="家长身份证" className={styles.materialIcon} />
            <span>家长身份证副本</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/papers.svg" alt="住址证明" className={styles.materialIcon} />
            <span>住址证明（近三个月内）</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/pictures.svg" alt="照片" className={styles.materialIcon} />
            <span>照片（1寸或2寸，近照）</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/file-spreadsheet.svg" alt="申请表" className={styles.materialIcon} />
            <span>申请表（各学校提供）</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/certificate-alt-1.svg" alt="宗教证明" className={styles.materialIcon} />
            <span>宗教证明（如适用）</span>
          </div>
        </div>
      </div>
      
      {/* 咨询按钮 */}
      <div className={styles.consultContainer}>
        <p className={styles.consultText}>如果您对小一申请有任何疑问，欢迎随时咨询我们的专业顾问团队</p>
        <Link href="/assessment" className={styles.consultButton}>
          立即咨询/评估
        </Link>
      </div>
    </>
  );

  // 中一申请对应的内容和材料
  const primarySixContent = (
    <>
      <div className={styles.contentHeader}>
        <h2 className={styles.sectionTitle}>中一入学相关说明</h2>
        <div className={styles.backgroundText}>Secondary One</div>
      </div>
      
      <div className={styles.contentBody}>
        <p className={styles.contentParagraph}>中一入学通常涉及香港中学的学位申请流程，包含学校申报、材料准备、派位等环节。</p>
        <p className={styles.contentParagraph}>学生需要根据自身情况，在规定时间内提交申请材料，参与学校的评估和派位机制。</p>
        <p className={styles.contentParagraph}>不同类型学校（官立、资助、私立等）的中一入学要求和流程存在差异，家长需提前了解相关政策。</p>
      </div>
      
      {/* 申请材料部分 */}
      <div className={styles.materialsSection}>
        <h3 className={styles.materialsTitle}>中一申请所需材料</h3>
        <div className={styles.materialsList}>
          <div className={styles.materialItem}>
            <img src="/home/file-spreadsheet.svg" alt="成绩表" className={styles.materialIcon} />
            <span>小五及小六成绩表</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/id-card.svg" alt="身份证明" className={styles.materialIcon} />
            <span>学生身份证或出生证明副本</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/pictures.svg" alt="照片" className={styles.materialIcon} />
            <span>学生照片（1寸或2寸，近照）</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/id-card.svg" alt="家长身份证" className={styles.materialIcon} />
            <span>家长身份证副本</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/papers.svg" alt="住址证明" className={styles.materialIcon} />
            <span>住址证明</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/certificate-alt-1.svg" alt="证书" className={styles.materialIcon} />
            <span>课外活动证明或奖项证书</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/file-spreadsheet.svg" alt="推荐信" className={styles.materialIcon} />
            <span>老师推荐信（部分学校要求）</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/certificate-alt-1.svg" alt="特长证明" className={styles.materialIcon} />
            <span>其他特长证明材料</span>
          </div>
        </div>
      </div>
      
      {/* 咨询按钮 */}
      <div className={styles.consultContainer}>
        <p className={styles.consultText}>如果您对中一申请有任何疑问，欢迎随时咨询我们的专业顾问团队</p>
        <Link href="/assessment" className={styles.consultButton}>
          立即咨询/评估
        </Link>
      </div>
    </>
  );

  // 中小学插班对应的内容和材料
  const transferContent = (
    <>
      <div className={styles.contentHeader}>
        <h2 className={styles.sectionTitle}>中小学插班申请说明</h2>
        <div className={styles.backgroundText}>Transfer</div>
      </div>
      
      <div className={styles.contentBody}>
        <p className={styles.contentParagraph}>中小学插班需关注目标学校的插班名额、申请时间和条件。</p>
        <p className={styles.contentParagraph}>一般需要准备学生的学业成绩、转学原因说明等材料，部分学校可能安排插班考试或面试。</p>
        <p className={styles.contentParagraph}>插班流程相对复杂，建议家长提前与目标学校沟通，了解详细的申请步骤和要求。</p>
      </div>
      
      {/* 申请材料部分 */}
      <div className={styles.materialsSection}>
        <h3 className={styles.materialsTitle}>中小学插班申请所需材料</h3>
        <div className={styles.materialsList}>
          <div className={styles.materialItem}>
            <img src="/home/file-spreadsheet.svg" alt="成绩表" className={styles.materialIcon} />
            <span>最近两个学期的成绩表</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/id-card.svg" alt="身份证明" className={styles.materialIcon} />
            <span>学生身份证明文件</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/papers.svg" alt="转学证明" className={styles.materialIcon} />
            <span>转学证明或离校证明</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/pictures.svg" alt="照片" className={styles.materialIcon} />
            <span>学生照片</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/id-card.svg" alt="家长身份证" className={styles.materialIcon} />
            <span>家长身份证明</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/papers.svg" alt="住址证明" className={styles.materialIcon} />
            <span>住址证明</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/file-spreadsheet.svg" alt="申请书" className={styles.materialIcon} />
            <span>转学申请书（说明转学原因）</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/certificate-alt-1.svg" alt="特长证明" className={styles.materialIcon} />
            <span>特长或奖项证明（如适用）</span>
          </div>
        </div>
      </div>
      
      {/* 咨询按钮 */}
      <div className={styles.consultContainer}>
        <p className={styles.consultText}>如果您对中小学插班申请有任何疑问，欢迎随时咨询我们的专业顾问团队</p>
        <Link href="/assessment" className={styles.consultButton}>
          立即咨询/评估
        </Link>
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      {/* 标签栏 */}
      <div className={styles.tabBar}>
        <div 
          className={`${styles.tabItem} ${activeTab === 0? styles.activeTab : ""}`}
          onClick={() => setActiveTab(0)}
        >
          小一申请
        </div>
        <div 
          className={`${styles.tabItem} ${activeTab === 1? styles.activeTab : ""}`}
          onClick={() => setActiveTab(1)}
        >
          中一申请
        </div>
        <div 
          className={`${styles.tabItem} ${activeTab === 2? styles.activeTab : ""}`}
          onClick={() => setActiveTab(2)}
        >
          中小学插班
        </div>
      </div>

      {/* 内容显示区域 */}
      <div className={styles.contentWrapper}>
        {activeTab === 0 && primaryOneContent}
        {activeTab === 1 && primarySixContent}
        {activeTab === 2 && transferContent}
      </div>
    </div>
  );
};

export default AdmissionGuide;