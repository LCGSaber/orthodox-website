import { useTranslation } from 'next-i18next'
import React, {  } from 'react'
import Header from 'src/components/Header'
import { useRouter } from 'next/router'
import { Seo } from 'src/components/Seo'
import Banner from 'src/components/PageHome/Banner'
import LittleMenu from 'src/components/PageHome/LittleMenu'
import Footer from 'src/components/Footer'
import homepage from 'apidata/homepage-zx.json'
import HongKongMasterApply from 'src/components/PageHome/HongKongMasterApply'


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
    <LittleMenu text1={g(homepage,'home')} link1='/' text2={g(homepage,'application_sh')}/>
    <HongKongMasterApply/>
    <Footer textColor="white" />
    </>
  )
}

export default ApplicationInternationalScool
