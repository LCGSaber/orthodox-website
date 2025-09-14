import React from "react";
import styles from "src/styles/HongKongSchoolApply.module.css";
import Link from "next/link";
import homepage from 'apidata/homepage-zx.json'
import { useRouter } from 'next/router'

const HongKongSchoolApply: React.FC = () => {
  const router = useRouter(); // 用于获取当前路由信息
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`
  // 申请步骤数据
  const applySteps = [
    {
      step: "01",
      title: g(homepage, 'apply_t_23'),
      content: [
        g(homepage, 'apply_t_44'),
        g(homepage, 'apply_t_45'),
      ],
    },
    {
      step: "02",
      title: "签约",
      content: [
        g(homepage, 'apply_t_46'),
        g(homepage, 'apply_t_47'),
      ],
    },
    {
      step: "03",
      title: "资料确认",
      content: [
        g(homepage, 'apply_t_48'),
        g(homepage, 'apply_t_49'),
        g(homepage, 'apply_t_50'),
      ],
    },
    {
      step: "04",
      title: "留学文案",
      content: [
        g(homepage, 'apply_t_51'),
        g(homepage, 'apply_t_52'),
        g(homepage, 'apply_t_53'),
      ],
    },
    {
      step: "05",
      title: g(homepage, 'apply_t_38'),
      content: [
        g(homepage, 'apply_t_35'),
        g(homepage, 'apply_t_36'),
        g(homepage, 'apply_t_37'),
      ],
    },
    {
      step: "06",
      title: g(homepage, 'apply_t_41'),
      content: [
        g(homepage, 'apply_t_54'),
        g(homepage, 'apply_t_55'),
      ],
    },
    {
      step: "07",
      title: g(homepage, 'apply_t_56'),
      content: [
        g(homepage, 'apply_t_57'),
        g(homepage, 'apply_t_58'),
      ],
    },
    {
      step: "08",
      title: g(homepage, 'apply_t_59'),
      content: [
        g(homepage, 'apply_t_60'),
        g(homepage, 'apply_t_61'),
      ],
    },
    {
      step: "09",
      title: g(homepage, 'apply_t_62'),
      content: [
        g(homepage, 'apply_t_63'),
        g(homepage, 'apply_t_64'),
      ],
    },
    {
      step: "10",
      title: g(homepage, 'apply_t_65'),
      content: [
        g(homepage, 'apply_t_66'),
        g(homepage, 'apply_t_67'),
      ],
    },
  ];

  const navItems = [
    { label: g(homepage,'application_in'),link:"/application/international-school"},
    { label: g(homepage,'application_lo'),link:"/application/local-school"},
    { label: g(homepage,'application_un') ,link:"/application/bachelor-application", isActive: true },
    { label: g(homepage,'application_sh'),link:"/application/master-application"},
  ];
 

  return (
    <div className="bg-white">
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
        <h2 className={styles.sectionTitle}>{g(homepage,'apply_t_3')}</h2>
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
      <p className={styles.bannerText}>{g(homepage, 'apply_t_42')}</p>
      <Link href="/assessment" className={styles.consultButton}>
        {g(homepage, 'apply_t_43')}
      </Link>
    </div>
    </div>
    </div>
  );
};

export default HongKongSchoolApply;