import React from "react";
import styles from "src/styles/Littlemenu.module.css";
import Link from "next/link";

type propsT = {
  link1?: string
  text1?: string
  text2?: string
}

const LittleMenu= ({
  text1 = '',
  link1 = '',
  text2 = '',
}: propsT) => {
  return (
    <div className="bg-white">
    <div className={styles.breadcrumbContainer}>
    <Link href={link1} className={styles.breadcrumbItem}>
      {text1}
    </Link>
    <span className={styles.divider}>/</span>
    <span className={styles.breadcrumbItemCurrent}>{text2}</span>
    </div>
  </div>
  );
}; 

export default LittleMenu;