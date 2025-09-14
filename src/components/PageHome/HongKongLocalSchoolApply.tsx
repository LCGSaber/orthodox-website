import React from "react";
import styles from "src/styles/HongKongSchoolApply.module.css";
import Link from "next/link";
import AdmissionGuide from "src/components/Application/AdmissionGuide";
import { useRouter } from 'next/router'
import homepage from 'apidata/homepage-zx.json'

const HongKongSchoolApply: React.FC = () => {
 
  const router = useRouter(); // 用于获取当前路由信息
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

  const navItems = [
    { label: g(homepage,'application_in'),link:"/application/international-school" },
    { label: g(homepage,'application_lo'),link:"/application/local-school", isActive: true},
    { label: g(homepage,'application_un') ,link:"/application/bachelor-application"},
    { label: g(homepage,'application_sh'),link:"/application/master-application"},
  ];



  return (
    <div className="bg-white">
    <div className={styles.container}>
      {/* 标题和背景文字 */}
      <div className={styles.titleWrapper}>
        <h1 className={styles.mainTitle}>{g(homepage,'application_lo')}</h1>
        <span className={styles.backgroundText}>LOCAL</span>
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
      <AdmissionGuide/>
      </div>
    </div>
  );
};

export default HongKongSchoolApply;