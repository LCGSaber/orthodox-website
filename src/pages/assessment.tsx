import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import React, { useState, useEffect } from 'react'
import Header from 'src/components/Header'
import { useRouter } from 'next/router'
import NavMenu from 'src/components/PageHome/NavMenu'
import { Seo } from 'src/components/Seo'
import AssessmentBanner from 'src/components/PageHome/Assessment'
import AssessmentForm from 'src/components/PageHome/AssessmentForm'
import Footer from 'src/components/Footer'
import Link from "next/link";
import homepage from 'apidata/homepage-zx.json'
import styles from "src/styles/Breadcrumb.module.css";

const Assessment = () => {
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
    <AssessmentBanner/>
    <div className="bg-white">
      <div className={styles.breadcrumbContainer}>
      <Link href="/" className={styles.breadcrumbItem}>
        {g(homepage,'home')}
      </Link>
      <span className={styles.divider}>/</span>
      <span className={styles.breadcrumbItemCurrent}>{g(homepage,'assessment')}</span>
      </div>
    </div>
    <AssessmentForm/>
    <Footer textColor="white" />
    </>
  )
}

export default Assessment
