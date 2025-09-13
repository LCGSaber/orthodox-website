/* eslint-disable */
import React from "react";
import { useRouter } from "next/router";
import { Seo } from 'src/components/Seo'
import { FC } from 'react'
import Footer from 'src/components/Footer'
import AboutUsSection from './AboutUsSection'
import Header from 'src/components/Header'
import homepage from 'apidata/homepage-zx.json'

type propsT = {
  hideTab?: boolean
  simpleHeader?: boolean
}

const HomeLayout: FC<propsT> = ({}) => {
  const router = useRouter(); // 用于获取当前路由信息
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo
        title={`Home | Orthodox`}
        description=''
        keywords=''
        ga="Homepage"
      />
      {/* 全屏背景图 */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f9faf5] to-white opacity-70"></div>
      </div>
      
      {/* 页面内容 - 确保在背景图之上 */}
      <div className="relative z-10">
        <Header />
      {/* 首页主要内容区域 - 左右布局 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* 左侧文字内容 */}
          <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
            <div className="leading-relaxed">
              <style jsx>{`
                .gradient-text {
                  background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #1dd1a1, #5f27cd, #ff9ff3);
                  background-size: 300% 300%;
                  -webkit-background-clip: text;
                  background-clip: text;
                  color: transparent;
                  animation: gradient-text-animation 8s ease infinite;
                }
                
                @keyframes gradient-text-animation {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
              `}</style>
              <p className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">ORTHODOX EDUCATION</p>
              <p className="text-2xl md:text-3xl font-semibold mb-6">
                {g(homepage,'home_1')}
              </p>
              <p className="text-lg md:text-xl opacity-90">
                {g(homepage,'home_2')}
              </p>
            </div>
          </div>
          
          {/* 右侧树木照片 */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/book.jpg" 
                alt="培育树木" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部动态绿色波浪线效果 */}
      <div className="w-full overflow-hidden">
        <img 
          src="/images/wavy_line.svg" 
          alt="动态绿色波浪线" 
          className="w-full h-auto" 
        />
      </div>

      {/* <LogoBanner /> */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0">
        <Carousel />
      </div> */}

      <Footer textColor="white" />
      </div>
    </>
  )
}

export default HomeLayout
