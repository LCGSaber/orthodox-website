import React, { useState, useEffect } from "react";
import { CSSProperties } from 'react';
import styles from "src/styles/Banner.module.css";


type propsT = {
  imageSrc?: string
  mainText?: string
  subText?: string
  imageStyle?: CSSProperties
}

const AssessmentBanner= ({
  imageSrc = '',
  mainText = '',
  subText = '',
  imageStyle,
}: propsT) => {
  const [isMobile, setIsMobile] = useState(false);
  
  // 检测屏幕尺寸变化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 初始化
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 移动端样式
  const mobileBannerStyle: CSSProperties = {
    height: '300px',
  };

  const mobileContentStyle: CSSProperties = {
    padding: '20px',
    textAlign: 'center',
  };

  const mobileTitleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  };

  const mobileSubtitleStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  };

  return (
    <div className="bg-white">
    <div className={styles.bannerContainer} style={isMobile ? mobileBannerStyle : undefined}>
      <img
        src= {imageSrc}
        alt="咨询评估场景"
        className={styles.bannerImage}
        style={{ 
          minHeight: isMobile ? '300px' : 'auto',
          ...imageStyle
        }}
      />
      <div className={styles.textOverlay} style={isMobile ? mobileContentStyle : undefined}>
        <h2 className={styles.mainText} style={isMobile ? mobileTitleStyle : undefined}>{mainText}</h2>
        <p className={styles.subText} style={isMobile ? mobileSubtitleStyle : undefined}>{subText}</p>
      </div>
    </div>
    </div>
  );
};

export default AssessmentBanner;