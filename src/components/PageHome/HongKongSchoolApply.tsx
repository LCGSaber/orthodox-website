import React from "react";
import styles from "src/styles/HongKongSchoolApply.module.css";
import Link from "next/link";
import homepage from 'apidata/homepage-zx.json'
import { useRouter } from 'next/router'

const HongKongSchoolApply: React.FC = () => {
  const router = useRouter(); // 用于获取当前路由信息
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

  // 申请材料数据
  const applyMaterials = [
    { icon: "/home/papers.svg", text: g(homepage, 'apply_t_17') },
    { icon: "/home/id-card.svg", text: g(homepage, 'apply_t_18') },
    { icon: "/home/file-spreadsheet.svg", text: g(homepage, 'apply_t_19') },
    { icon: "/home/certificate-alt-1.svg", text: g(homepage, 'apply_t_20') },
    { icon: "/home/pictures.svg", text: g(homepage, 'apply_t_21') },
    { icon: "/home/question-sign-circle.svg", text: g(homepage, 'apply_t_22') },
  ];

  // 申请步骤数据
  const applySteps = [
    {
      step: "01",
      title: g(homepage, 'apply_t_23'),
      content: [
        g(homepage, 'apply_t_24'),
        g(homepage, 'apply_t_25'),
        g(homepage, 'apply_t_26'),
      ],
    },
    {
      step: "02",
      title: g(homepage, 'apply_t_27'),
      content: [
        g(homepage, 'apply_t_28'),
        g(homepage, 'apply_t_29'),
        g(homepage, 'apply_t_30'),
      ],
    },
    {
      step: "03",
      title: g(homepage, 'apply_t_31'),
      content: [
        g(homepage, 'apply_t_32'),
        g(homepage, 'apply_t_33'),
      ],
    },
    {
      step: "04",
      title: g(homepage, 'apply_t_34'),
      content: [
        g(homepage, 'apply_t_35'),
        g(homepage, 'apply_t_36'),
        g(homepage, 'apply_t_37'),
      ],
    },
    {
      step: "05",
      title: g(homepage, 'apply_t_38'),
      content: [
        g(homepage, 'apply_t_39'),
        g(homepage, 'apply_t_40'),
      ],
    },
    {
      step: "06",
      title: g(homepage, 'apply_t_41'),
      content: [],
      icon: "https://www.hkbacui.com/template/static/home/images/service/application/c1.jpg",
    },
  ];


  const navItems = [
    { label: g(homepage,'application_in'),link:"/application/international-school", isActive: true },
    { label: g(homepage,'application_lo'),link:"/application/local-school"},
    { label: g(homepage,'application_un') ,link:"/application/bachelor-application"},
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
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{g(homepage,'apply_t_1')}</h2>
        <div className={styles.materialsList}>
          {applyMaterials.map((material, index) => (
            <div key={index} className={styles.materialItem}>
              <img src={material.icon} alt="material-icon" className={styles.materialIcon} />
              <span>{material.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 申请步骤部分 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{g(homepage,'apply_t_2')}</h2>
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
              {step.icon && (
                <img src={step.icon} alt="step-icon" className={styles.stepIcon} />
              )}
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