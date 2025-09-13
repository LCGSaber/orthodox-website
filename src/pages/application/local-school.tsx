import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState, useEffect } from 'react'
import Header from 'src/components/Header'
import { useRouter } from 'next/router'
import NavMenu from 'src/components/PageHome/NavMenu'
import { Seo } from 'src/components/Seo'
import Banner from 'src/components/PageHome/Banner'
import LittleMenu from 'src/components/PageHome/LittleMenu'
import AboutUsInfo from 'src/components/PageHome/AboutUsInfo'
import AssessmentForm from 'src/components/PageHome/AssessmentForm'
import Footer from 'src/components/Footer'
import Link from "next/link";
import homepage from 'apidata/homepage-zx.json'
import HongKongLocalSchoolApply from 'src/components/PageHome/HongKongLocalSchoolApply'

const imagesEnv = [
  "https://www.hkbacui.com/template/static/home/images/about/a1/23.jpg",
  "https://www.hkbacui.com/template/static/home/images/about/a1/22.jpg",
  "https://www.hkbacui.com/template/static/home/images/about/a1/1.jpg",
  "https://www.hkbacui.com/template/static/home/images/about/a1/8.jpg"
  // 可继续添加更多图片路径
];

const ApplicationInternationalScool = () => {
  const router = useRouter(); // 用于获取当前路由信息
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`
  const { t } = useTranslation('common')


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
      imageSrc= "https://www.hkbacui.com/template/static/home/images/service/application/banner1.jpg"  
      mainText ={g(homepage,'apply_1')}  
      subText="HK Outstanding Education"/>
    <LittleMenu text1={g(homepage,'home')} link1='/' text2={g(homepage,'application_lo')}/>
    <HongKongLocalSchoolApply/>
    <Footer textColor="white" />
    </>
  )
}

export default ApplicationInternationalScool
