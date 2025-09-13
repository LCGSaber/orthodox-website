import React from 'react';
import { Seo } from 'src/components/Seo';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import styles from 'src/styles/about-us.module.css';
import AboutUsSection from 'src/components/PageHome/AboutUsSection'
import { useRouter } from "next/router";
import homepage from 'apidata/homepage-zx.json'

const AboutUsPage: React.FC = () => {
  const router = useRouter(); // 用于获取当前路由信息
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`
  return (
    <>
      <Seo
        title="公司简介 | 正心教育"
        description="正心教育的公司简介，包含教育理念、服务内容和发展历程。"
        keywords="正心教育,公司简介,香港教育咨询"
        ga="AboutUsPage"
      />
      
      {/* 页面内容 - 确保在背景图之上 */}
      <div className="relative z-10">
        <Header />
      </div>
      
      {/* 公司简介内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧文字内容 */}
          <div className="w-full lg:w-1/2">
            <div className="border-b-4 border-[#467238] inline-block mb-6">
              <h1 className="text-4xl font-bold text-[#467238]">{g(homepage,'apply_t_5')}</h1>
              <p className="text-lg text-gray-600">Brief Introduction of Orthodox Education</p>
            </div>
            
            <div className="space-y-8 text-gray-700 leading-relaxed text-left">
              <p>
              {g(homepage,'apply_t_6')}
              </p>
              
              <div className="bg-[#467238] text-white p-8 my-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-[1.02]">
                <p className="text-lg font-semibold leading-relaxed" style={{"animation":"fadeIn 0.8s ease forwards"}}>
                {g(homepage,'apply_t_7')}
                </p>
              </div>
              
              {/* <p className={styles.animateFadeIn}>
                正心教育目前擁有一個專業性高，責任心強的教師團隊，并在不斷提升和擴大這<br/>
                個團隊的規模和素質。同時我們的咨詢師亦全程跟蹤一個家庭的一個或多個孩<br/>
                子的學業及心理狀況，并與學生家長一同做出最有利於學生的決定，不僅是目<br/>
                前的選校生活上的。我們的學生目前就讀于香港各公立或國際學校，包括但<br/>
                不限于漢基國際學校，哈羅公學，新加坡國際學校，培正中學，滬江鄉村小型學<br/>
                校，弘立書院，福建中學，耀中國際學校等等。
              </p> */}
              
              {/* <div className="flex flex-col items-start mt-6">
                <p className="text-lg font-bold text-[#467238]">ORTHODOX EDUCATION</p>
              </div> */}
            </div>
          </div>
          
          {/* 右侧地图 */}
          <div className="w-full lg:w-1/2">
            {/* <div className="rounded-lg shadow-xl overflow-hidden h-full transition-all duration-300 hover:shadow-2xl"> */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.525416738025!2d114.16840857578185!3d22.2959603796897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f25ecc28e5%3A0x31b40a49bf966679!2z5rGJ5Y-j5Lit5b-D!5e0!3m2!1szh-CN!2shk!4v1747227012246!5m2!1szh-CN!2shk" 
                className={styles.addressMap} 
                loading="lazy" 
                title="正心教育地理位置"
                style={{ backgroundColor: 'transparent' }}
              ></iframe>
            {/* </div> */}
            {/* <div className="flex flex-col items-end mt-6">
                  <p className="text-lg font-bold text-[#467238]">HK</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AboutUsSection/>
      </div>
      {/* 数据概览部分 */}
      <div className="bg-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题区域 */}
          <div className="text-center mb-16">
             <div className="border-b-4 border-[#467238] inline-block mb-6">
              <h1 className="text-4xl font-bold text-[#467238]">{g(homepage,'apply_t_8')}</h1>
              <p className="text-lg text-gray-600">A Glimpse of Statistic Data</p>
            </div>
          </div>
          
          {/* 圆环图区域 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* 国际学校 */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="10" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#467238" strokeWidth="10" strokeDasharray="283" strokeDashoffset="85" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#467238]">70%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{g(homepage,'application_in')}</h3>
              <p className="text-center text-gray-600">{g(homepage,'apply_t_9')}</p>
            </div>
            
            {/* 公立學校 */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="10" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#467238" strokeWidth="10" strokeDasharray="283" strokeDashoffset="198" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#467238]">30%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{g(homepage,'apply_t_10')}</h3>
              <p className="text-center text-gray-600">{g(homepage,'apply_t_11')}</p>
            </div>
            
            {/* 申請成功 */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="10" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#467238" strokeWidth="10" strokeDasharray="283" strokeDashoffset="0" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#467238]">100%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{g(homepage,'apply_t_12')}</h3>
              <p className="text-center text-gray-600">{g(homepage,'apply_t_13')}</p>
            </div>
            
            {/* 大學錄取 */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="10" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#467238" strokeWidth="10" strokeDasharray="283" strokeDashoffset="28" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#467238]">90%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{g(homepage,'apply_t_14')}</h3>
              <p className="text-center text-gray-600">{g(homepage,'apply_t_15')}</p>
            </div>
          </div>
          
          {/* 引用文字区域 */}
          <div className="max-w-4xl mx-auto flex items-center justify-between mb-16">
            <div className="text-8xl font-bold text-[#467238]">&quot;</div>
            <div className="flex items-center flex-1 px-8">
              <p className="text-4xl font-bold text-[#467238] mr-6">100%</p>
              <p className="text-lg text-gray-700 leading-relaxed">
              {g(homepage,'apply_t_16')}
              </p>
            </div>
            <div className="text-8xl font-bold text-[#467238] transform scale-x-[-1]">&quot;</div>
          </div>
          
          {/* 底部文本 */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-12">
            <p className="text-xl font-bold text-[#467238] mb-4 md:mb-0">ORTHODOX EDUCATION</p>
            <p className="text-xl font-bold text-[#467238]">HONG KONG</p>
          </div>
        </div>
      </div>
      
      {/* 页脚 */}
      <Footer />
    </>
  );
};

export default AboutUsPage;