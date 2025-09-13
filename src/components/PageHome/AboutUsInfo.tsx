import React from "react";
import Link from "next/link";
import styles from "src/styles/AboutUsInfo.module.css";
import CarouselLayout from "./CarouselLayout";

type propsT = {
    text1?: string
    text2?: string
  }

const imagesEnv = [
    "https://www.hkbacui.com/template/static/home/images/about/a1/23.jpg",
    "https://www.hkbacui.com/template/static/home/images/about/a1/22.jpg",
    "https://www.hkbacui.com/template/static/home/images/about/a1/1.jpg",
    "https://www.hkbacui.com/template/static/home/images/about/a1/8.jpg"
    // 可继续添加更多图片路径
  ];

const AboutUsInfo = ({
    text1 = '',
    text2 = '',
}: propsT) => {
  return (
    <div className="bg-white border-l-8 border-r-8 border-blue-200">
    <section className={styles.aboutUsContainer}>
      {/* 背景文字“Education” */}
      <div className={styles.backgroundText}>Education</div>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>{text1}</h2>
        <p className={styles.description}>
          香港正心教育提供专业、订制化的一站式香港升学服务，包括香港幼稚园、香港中小学、香
          港国际学校、副学士、本科及研究生等升学服务。针对不同年龄层的学生需求，提供个性化
          评估、择校、学科培训、申请服务；同时为会员提供粤语班、名校特训课程、DSE学科辅导
          等机具香港教育体系特色的一系列课程；同时为在港学生提供寄宿家庭服务、各类证件办理
          指引、香港医疗支援等当地生活服务，香港正心教育为内地学生赴港读书和生活指路引航，
          陪伴成长，圆梦名校，成就拔萃理想！
        </p>
      </div>
    </section>
    {/* <CarouselLayout text1="123" images = {imagesEnv} iconImage="/home/soft-drinks.svg"/> */}
    </div>
  );
};

export default AboutUsInfo;