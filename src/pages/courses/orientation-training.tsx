import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import React, { useState, useEffect } from 'react'
import Header from 'src/components/Header'
import { useRouter } from 'next/router'
import { Seo } from 'src/components/Seo'
import Banner from 'src/components/PageHome/Banner'
import LittleMenu from 'src/components/PageHome/LittleMenu'
import Footer from 'src/components/Footer'
import homepage from 'apidata/homepage-zx.json'
import OrientationTraining from 'src/components/PageHome/OrientationTraining'

const ApplicationInternationalScool = () => {
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
    {/* 页面内容 - 确保在背景图之上 */}
    <div className="relative z-10">
        <Header />
      </div>
    <Banner 
      imageSrc= "/images/teacher-7.png"  
      mainText ={g(homepage,'course_rx')}  
      subText="HK Outstanding Education"
      imageStyle={{ height: '300px', width: '100%' }}/>
    <LittleMenu text1={g(homepage,'home')} link1='/application/orientation-training' text2={g(homepage,'course_rx')}/>
    <OrientationTraining/>
    <Footer textColor="white" />
    </>
  )
}

export default ApplicationInternationalScool
