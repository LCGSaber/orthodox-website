import React, { useState } from 'react';
import styles from "src/styles/applications/AdmissionGuide.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router'
import homepage from 'apidata/homepage-zx-1.json'



const AdmissionGuide: React.FC = () => {
  // 用于控制当前显示的标签，0 表示小一申请，1 表示中一申请，2 表示中小学插班
  const [activeTab, setActiveTab] = useState(0); 
  const router = useRouter(); // 用于获取当前路由信息
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

  // 小一申请对应的内容和材料
  const primaryOneContent = (
    <>
      <div className={styles.contentHeader}>
        <h2 className={styles.sectionTitle}>{g(homepage,'t_18')}</h2>
        <div className={styles.backgroundText}>Primary One</div>
      </div>
      
      <div className={styles.contentBody}>
        <p className={styles.contentParagraph}>{g(homepage,'t_19')}</p>
        <p className={styles.contentParagraph}>{g(homepage,'t_20')}</p>
        <p className={styles.contentParagraph}>{g(homepage,'t_21')}</p>
        <p className={styles.contentParagraph}>{g(homepage,'t_22')}</p>
        <p className={styles.contentParagraph}>{g(homepage,'t_23')}</p>
      </div>
      
      {/* 申请材料部分 */}
      <div className={styles.materialsSection}>
        <h3 className={styles.materialsTitle}>{g(homepage,'t_24')}</h3>
        <div className={styles.materialsList}>
          <div className={styles.materialItem}>
            <img src="/home/papers.svg" alt="出生证明" className={styles.materialIcon} />
            <span>{g(homepage,'t_25')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/id-card.svg" alt="身份证" className={styles.materialIcon} />
            <span>{g(homepage,'t_26')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/file-spreadsheet.svg" alt="疫苗记录" className={styles.materialIcon} />
            <span>{g(homepage,'t_27')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/id-card.svg" alt="家长身份证" className={styles.materialIcon} />
            <span>{g(homepage,'t_28')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/papers.svg" alt="住址证明" className={styles.materialIcon} />
            <span>{g(homepage,'t_29')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/pictures.svg" alt="照片" className={styles.materialIcon} />
            <span>{g(homepage,'t_30')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/file-spreadsheet.svg" alt="申请表" className={styles.materialIcon} />
            <span>{g(homepage,'t_31')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/certificate-alt-1.svg" alt="宗教证明" className={styles.materialIcon} />
            <span>{g(homepage,'t_32')}</span>
          </div>
        </div>
      </div>
      
      {/* 咨询按钮 */}
      <div className={styles.consultContainer}>
        <p className={styles.consultText}>{g(homepage,'t_33')}</p>
        <Link href="/assessment" className={styles.consultButton}>
          {g(homepage,'t_34')}
        </Link>
      </div>
    </>
  );

  // 中一申请对应的内容和材料
  const primarySixContent = (
    <>
      <div className={styles.contentHeader}>
        <h2 className={styles.sectionTitle}>{g(homepage,'t_36')}</h2>
        <div className={styles.backgroundText}>Secondary One</div>
      </div>
      
      <div className={styles.contentBody}>
        <p className={styles.contentParagraph}>{g(homepage,'t_37')}</p>
        <p className={styles.contentParagraph}>{g(homepage,'t_38')}</p>
        <p className={styles.contentParagraph}>{g(homepage,'t_39')}</p>
      </div>
      
      {/* 申请材料部分 */}
      <div className={styles.materialsSection}>
        <h3 className={styles.materialsTitle}>{g(homepage,'t_40')}</h3>
        <div className={styles.materialsList}>
          <div className={styles.materialItem}>
            <img src="/home/file-spreadsheet.svg" alt="成绩表" className={styles.materialIcon} />
            <span>{g(homepage,'t_41')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/id-card.svg" alt="身份证明" className={styles.materialIcon} />
            <span>{g(homepage,'t_42')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/pictures.svg" alt="照片" className={styles.materialIcon} />
            <span>{g(homepage,'t_43')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/id-card.svg" alt="家长身份证" className={styles.materialIcon} />
            <span>{g(homepage,'t_44')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/papers.svg" alt="住址证明" className={styles.materialIcon} />
            <span>{g(homepage,'t_45')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/certificate-alt-1.svg" alt="证书" className={styles.materialIcon} />
            <span>{g(homepage,'t_46')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/file-spreadsheet.svg" alt="推荐信" className={styles.materialIcon} />
            <span>{g(homepage,'t_47')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/certificate-alt-1.svg" alt="特长证明" className={styles.materialIcon} />
            <span>{g(homepage,'t_48')}</span>
          </div>
        </div>
      </div>
      
      {/* 咨询按钮 */}
      <div className={styles.consultContainer}>
        <p className={styles.consultText}>{g(homepage,'t_49')}</p>
        <Link href="/assessment" className={styles.consultButton}>
          {g(homepage,'t_34')}
        </Link>
      </div>
    </>
  );

  // 中小学插班对应的内容和材料
  const transferContent = (
    <>
      <div className={styles.contentHeader}>
        <h2 className={styles.sectionTitle}>{g(homepage,'t_51')}</h2>
        <div className={styles.backgroundText}>Transfer</div>
      </div>
      
      <div className={styles.contentBody}>
        <p className={styles.contentParagraph}>{g(homepage,'t_52')}</p>
        <p className={styles.contentParagraph}>{g(homepage,'t_53')}</p>
        <p className={styles.contentParagraph}>{g(homepage,'t_54')}</p>
      </div>
      
      {/* 申请材料部分 */}
      <div className={styles.materialsSection}>
        <h3 className={styles.materialsTitle}>{g(homepage,'t_55')}</h3>
        <div className={styles.materialsList}>
          <div className={styles.materialItem}>
            <img src="/home/file-spreadsheet.svg" alt="成绩表" className={styles.materialIcon} />
            <span>{g(homepage,'t_56')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/id-card.svg" alt="身份证明" className={styles.materialIcon} />
            <span>{g(homepage,'t_57')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/papers.svg" alt="转学证明" className={styles.materialIcon} />
            <span>{g(homepage,'t_58')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/pictures.svg" alt="照片" className={styles.materialIcon} />
            <span>{g(homepage,'t_59')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/id-card.svg" alt="家长身份证" className={styles.materialIcon} />
            <span>{g(homepage,'t_60')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/papers.svg" alt="住址证明" className={styles.materialIcon} />
            <span>{g(homepage,'t_61')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/file-spreadsheet.svg" alt="申请书" className={styles.materialIcon} />
            <span>{g(homepage,'t_62')}</span>
          </div>
          <div className={styles.materialItem}>
            <img src="/home/certificate-alt-1.svg" alt="特长证明" className={styles.materialIcon} />
            <span>{g(homepage,'t_63')}</span>
          </div>
        </div>
      </div>
      
      {/* 咨询按钮 */}
      <div className={styles.consultContainer}>
        <p className={styles.consultText}>{g(homepage,'t_64')}</p>
        <Link href="/assessment" className={styles.consultButton}>
          {g(homepage,'t_34')}
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
          {g(homepage,'t_17')}
        </div>
        <div 
          className={`${styles.tabItem} ${activeTab === 1? styles.activeTab : ""}`}
          onClick={() => setActiveTab(1)}
        >
          {g(homepage,'t_35')}
        </div>
        <div 
          className={`${styles.tabItem} ${activeTab === 2? styles.activeTab : ""}`}
          onClick={() => setActiveTab(2)}
        >
          {g(homepage,'t_50')}
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