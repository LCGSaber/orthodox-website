import React from "react";
import styles from "src/styles/Training.module.css";
import Link from "next/link";
import homepage from 'apidata/homepage-zx.json'
import { useRouter } from 'next/router'
import TradingFirst from "src/components/Application/TradingFirst"

const OrientationTraining: React.FC = () => {

  const router = useRouter(); // 用于获取当前路由信息
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

  const navItems = [
    { label: g(homepage,'course_rx'),link:"/application/orientation-training", isActive: true },
    { label: g(homepage,'course_1'),link:"/application/subject-tutoring"},
    { label: g(homepage,'course_2') ,link:"/application/after-school-care"},
    { label: g(homepage,'course_3'),link:"/application/academic-planning"},
  ];
 

  return (
    <div className="bg-white">
    <div className={styles.container}>
      {/* 标题和背景文字 */}
      <div className={styles.titleWrapper}>
        <h1 className={styles.mainTitle}>{g(homepage,'course_rx')}</h1>
        <span className={styles.backgroundText}>Course</span>
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
      <TradingFirst/>
      {/* <InterviewGuide/> */}
      {/* <div className={styles.bannerContainer}>
      <p className={styles.bannerText}>如果您不知道怎么选择适合孩子的学校？</p>
      <Link href="/assessment" className={styles.consultButton}>
        {g(homepage,'assessment')}
      </Link>
    </div> */}
    </div>
    </div>
  );
};

export default OrientationTraining;