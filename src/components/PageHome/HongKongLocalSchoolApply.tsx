import React from "react";
import styles from "src/styles/HongKongSchoolApply.module.css";
import InterviewGuide from "../Application/InterviewGuide";
import Link from "next/link";
import AdmissionGuide from "src/components/Application/AdmissionGuide";
import { useRouter } from 'next/router'
import homepage from 'apidata/homepage-zx.json'

const HongKongSchoolApply: React.FC = () => {
  // 申请材料数据
  const applyMaterials = [
    { icon: "/home/papers.svg", text: "学生出世纸及护照" },
    { icon: "/home/id-card.svg", text: "家长香港身份证/护照/通行证" },
    { icon: "/home/file-spreadsheet.svg", text: "学生近两学年成绩表/学术报告" },
    { icon: "/home/certificate-alt-1.svg", text: "学生奖状、证书" },
    { icon: "/home/pictures.svg", text: "学生个人生活照及家庭合照" },
    { icon: "/home/question-sign-circle.svg", text: "国际学校问卷(申请前请家长回答)" },
  ];

  // 申请步骤数据
  const applySteps = [
    {
      step: "01",
      title: "评估规划",
      content: [
        "模拟评估（中英数笔试+面试）",
        "《评估报告》",
        "升学日程规划",
      ],
    },
    {
      step: "02",
      title: "递交申请",
      content: [
        "学生个人履历",
        "自荐信/推荐信",
        "申请材料撰写翻译",
      ],
    },
    {
      step: "03",
      title: "日常培训",
      content: [
        "《培训方案》及阶段性跟进",
        "国际课程练习册/模拟卷",
      ],
    },
    {
      step: "04",
      title: "考试特训",
      content: [
        "笔试部分：CAT4 / MAP / ISEE等",
        "面试部分：中英文模拟面试及面试技巧培训",
        "学生及家长《面试常见问题》",
      ],
    },
    {
      step: "05",
      title: "参加考试",
      content: [
        "安排入学考试时间和考核方式",
        "面试结果跟进，撰写求位信/感谢信",
      ],
    },
    {
      step: "06",
      title: "录取注册",
      content: [],
      icon: "https://www.hkbacui.com/template/static/home/images/service/application/c1.jpg",
    },
  ];

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
    <div className="bg-white border-l-8 border-r-8 border-blue-200 ">
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