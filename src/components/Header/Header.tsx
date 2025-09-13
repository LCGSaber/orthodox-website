import Link from 'next/link'
import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
import { ChevronDownIcon, ChevronUpIcon, XIcon } from '@heroicons/react/outline'
import { gsap } from 'gsap'
import { IconListItemArrow } from '../Svg/Icon'
import ArtaLogo from 'src/components/Svg/arta-logo'
import { links } from 'src/domains/links'
import { ButtonAnimated } from '../ButtonAnimated'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import MobileNavbar from 'src/components/Header/MobileNavbar'
import zxlogos from 'src/components/Svg/zxlogo4.png'
import SideMenu from "./SideMenu";
import MenuButton from "./MenuButton";
import LanguageSwitcher from 'src/components/LanguageSwitcher'

type menuItemT = {
  title: string
  link: string
}

const Header: React.FC<{
  onClose?: () => void
}> = (props) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

  // For mobile navbar
  const [showMenu, setShowMenu] = useState(false)
  const [navbarBg, setNavbarBg] = useState(false)
  const [activeMobileNavItem, setActiveMobileNavItem] = useState(-1)
  const [scrollDir, setScrollDir] = useState('scrolling down')

  const DEFAULT_TAB_INDEX = -1
  const [activeTabIndex, _setActiveTabIndex] = useState(DEFAULT_TAB_INDEX)

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const changeBackground = () => {
      // home page no bg is needed. It is working on home page because scrolling is not in home page, its window.scrollY is always 0
      // 66 is just a number that feels good, better than 0
      if (window) setNavbarBg(window?.scrollY >= 66 || false)

      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    changeBackground()
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [scrollDir])
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
    // 切换菜单状态
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    // 关闭菜单
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
    // 监听ESC键关闭菜单
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  // 菜单打开时禁止页面滚动
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  const onClose = () => setIsMenuOpen(false);

  return (
    <>
      {/* Logo 容器，让 Logo 靠左显示 */}
      <img
        src="/images/logo.png"
        alt="香港正心教育 Logo"
        className="h-24 md:h-24 object-contain"
      />
      {/* Language Switcher - 绝对定位到右上角 */}
      <div className="absolute right-32 top-1/2 transform -translate-y-1/2">
        <LanguageSwitcher />
      </div>
      {/* 右侧菜单区域 - 绝对定位到最右侧 */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 bg-primary rounded-tl-full rounded-br-full flex items-center justify-center"> 
        <MenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />

        {/* 背景遮罩 - 点击关闭菜单 */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </>
  )
}

export default Header
