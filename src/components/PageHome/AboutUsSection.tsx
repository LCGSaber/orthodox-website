import React from "react";
import Link from "next/link";
import styles from "src/styles/AboutUsSection.module.css";
import homepage from 'apidata/homepage-zx.json'
import { useRouter } from "next/router";

const AboutUsSection: React.FC = () => {
  const router = useRouter(); // 用于获取当前路由信息
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 左侧文字内容 - 与公司简介内容区域保持一致 */}
        <div className="w-full lg:w-1/2">
          <div className="border-b-4 border-[#467238] inline-block mb-6">
            <h2 className="text-2xl font-bold text-[#467238]">{g(homepage,'about')}</h2>
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed text-left">
            <p className="text-base">
              {g(homepage,'about_desc')}
            </p>
            <div className="mt-8">
              <Link href="/application/international-school" className='bg-[#467238] px-4 py-2 rounded-md text-white hover:bg-opacity-90 transition-colors'>
                <span>查看更多</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* 右侧服务项区域 */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-6">
            <Link href="/application/international-school" className={styles.serviceItemLink}>
              <div className={styles.serviceItem}>
                <div className={styles.icon1}></div>
                <span>{g(homepage,'application_in')}</span>
              </div>
            </Link>
            <Link href="/application/local-school" className={styles.serviceItemLink}>
              <div className={styles.serviceItem}>
                <div className={styles.icon2}></div>
                <span>{g(homepage,'application_lo')}</span>
              </div>
            </Link>
            <Link href="/application/bachelor-application" className={styles.serviceItemLink}>
              <div className={styles.serviceItem}>
                <div className={styles.icon3}></div>
                <span>{g(homepage,'application_un')}</span>
              </div>
            </Link>
            <Link href="/application/master-application" className={styles.serviceItemLink}>
              <div className={styles.serviceItem}>
                <div className={styles.icon4}></div>
                <span>{g(homepage,'application_sh')}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;