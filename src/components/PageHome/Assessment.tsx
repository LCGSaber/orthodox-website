import React from "react";
import styles from "src/styles/AssessmentBanner.module.css";

const Assessment: React.FC = () => {
  return (
    <div className="bg-white">
    <div className={styles.bannerContainer}>
      <img
        src="https://www.hkbacui.com/template/static/home/images/about/pg.jpg" 
        alt="咨询评估场景"
        className={styles.bannerImage}
      />
      <div className={styles.textOverlay}>
        <h2 className={styles.mainText}>咨询/评估</h2>
        <p className={styles.subText}>ASSESSMENT</p>
      </div>
    </div>
    </div>
  );
};

export default Assessment;