import React, { useState, useEffect } from 'react'
import { Hr } from './Hr'
import { IconFacebook, IconLinkedIn, IconTwitter, IconWeChat } from './Svg/Icon'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { links } from 'src/domains/links'
import Link from 'next/link'
import cn from 'classnames'


const Footer: React.FC<{
  textColor?: 'white' | 'brown' | 'black'
  setShowWechatPopup?: (f: boolean) => void
}> = (props) => {
  const { t } = useTranslation('common')
  const { textColor = 'black', setShowWechatPopup } = props
  const router = useRouter()
  const { locale } = router

  const [footerData, setFooterData] = useState<any>({})
  const [isMobile, setIsMobile] = useState(false)

  const textClass =
    textColor === 'white'
      ? 'text-arta-eggshell-100 decoration-arta-snow-100'
      : textColor === 'black'
        ? 'text-arta-black decoration-arta-black'
        : 'text-arta-sand-100 decoration-arta-sand-100'
  const bgClass =
    textColor === 'white'
      ? 'arta-gm-footer'
      : textColor === 'black'
        ? 'bg-white'
        : 'bg-arta-eggshell-100'
  const borderClass =
    textColor === 'white'
      ? 'border-[#878095]'
      : textColor === 'black'
        ? 'border-[#AAAAAA]'
        : 'border-arta-sand-100/50'

  // 检测屏幕尺寸变化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // 初始化
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const fetchData = async () => {

    }

    fetchData()
  }, [])

  const g = (keyWithoutLang: string) => `${footerData[`${keyWithoutLang}_${locale}`]}`

  const k = {
    address: `Units 1-2, Level 9, \nK11 ATELIER King’s Road, \n728 King’s Road,Quarry Bay,\nHong Kong`,
  }

  return (
    <>
      <footer
        className={`relative z-2 h-full w-full ${bgClass} ${textClass} will-change-transform`}
      >
        <Hr borderColorClass={borderClass} />
        <div className="relative bg-white">
          {/* 多条线性波浪背景效果 - 重新设计 */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1440 40" preserveAspectRatio="none">
              {/* 波浪线条组 - 更密集的平行线条 */}
              <g stroke="#467238" fill="none">
                {/* 基础波浪路径 */}
                <path d="M0,20 Q120,5 240,20 T480,20 T720,20 T960,20 T1200,20 T1440,20" strokeWidth="0.5" opacity="0.2" />
                <path d="M0,25 Q120,10 240,25 T480,25 T720,25 T960,25 T1200,25 T1440,25" strokeWidth="0.5" opacity="0.15" />
                <path d="M0,15 Q120,0 240,15 T480,15 T720,15 T960,15 T1200,15 T1440,15" strokeWidth="0.5" opacity="0.15" />
                <path d="M0,30 Q120,15 240,30 T480,30 T720,30 T960,30 T1200,30 T1440,30" strokeWidth="0.5" opacity="0.1" />
                <path d="M0,10 Q120,-5 240,10 T480,10 T720,10 T960,10 T1200,10 T1440,10" strokeWidth="0.5" opacity="0.1" />
                
                {/* 交错波浪路径 - 创造更复杂的视觉效果 */}
                <path d="M0,20 Q180,35 360,20 T720,20 T1080,20 T1440,20" strokeWidth="0.5" opacity="0.15" />
                <path d="M0,25 Q180,40 360,25 T720,25 T1080,25 T1440,25" strokeWidth="0.5" opacity="0.1" />
                <path d="M0,15 Q180,30 360,15 T720,15 T1080,15 T1440,15" strokeWidth="0.5" opacity="0.1" />
                
                {/* 辅助波浪线 - 增加层次感 */}
                <path d="M0,22 Q150,7 300,22 T600,22 T900,22 T1200,22 T1440,22" strokeWidth="0.7" opacity="0.2" />
                <path d="M0,18 Q150,3 300,18 T600,18 T900,18 T1200,18 T1440,18" strokeWidth="0.7" opacity="0.2" />
              </g>
            </svg>
          </div>
          <div style={{ paddingLeft: isMobile ? '5%' : '10%', paddingRight: isMobile ? '5%' : '10%', paddingTop: '20px', paddingBottom: '20px' }}>
            <div className={`flex flex-col ${isMobile ? '' : 'lg:flex-row'} items-start justify-between`}>
              {/* 左侧联系信息 */}
              <div className={`${isMobile ? 'mb-6' : 'w-full lg:w-1/2 mb-8 lg:mb-0'}`}>
                <div className="text-lg font-semibold mb-4">TEL: +852 5345 4061
                <div className="inline-block cursor-pointer ml-2 border border-[#467238] px-3 py-1 rounded-full hover:bg-[#467238] hover:text-white transition-all duration-300">
                評估/咨詢
              </div>
                </div>
                <div className="text-sm mb-2">地址：尖沙咀漢口道5-15號漢口中心311A室</div>
                <div className="text-xs mt-6 relative z-10">版权所有 © 2006-2025 香港正心教育</div>
              </div>
              
              {/* 右侧二维码 */}
              <div className={`${isMobile ? 'w-full justify-center' : 'w-full lg:w-1/2 flex justify-center lg:justify-end'} flex space-x-4`}>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-100 mb-2">
                    {/* 香港载萃教育二维码 */}
                    <img src="/images/qrcode_for_gh.jpg" alt="香港正心教育二维码" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-xs">香港正心教育</div>
                </div>
                 {/* 港澳直通车二维码  */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-100 mb-2">
                   
                    <div className="w-full h-full flex items-center justify-center text-xs">二维码</div>
                  </div>
                  <div className="text-xs">正心微信号</div>
                </div>
                 {/* 小红书二维码 
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-100 mb-2">
                   
                    <div className="w-full h-full flex items-center justify-center text-xs">二维码</div>
                  </div>
                  <div className="text-xs">小红书</div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
