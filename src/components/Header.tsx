import React, { useState, useEffect } from 'react';
import NavMenu from './PageHome/NavMenu';
import LanguageSwitcher from './LanguageSwitcher'
import LittleMenu from './PageHome/LittleMenu';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 检测屏幕尺寸变化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // 在大屏幕上自动关闭移动菜单
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    // 初始化
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`w-full bg-white ${className}`} style={{ height: isMobile ? '60px' : '96px' }}>
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo 区域 - 左侧固定宽度 */}
        <div className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="香港正心教育 Logo"
            className="object-contain"
            style={{ height: isMobile ? '50px' : '96px' }}
          />
        </div>
        
        {/* 导航菜单 - 在剩余空间中居中（桌面版） */}
        {!isMobile && (
          <div className="flex-1 flex items-center justify-center mx-8">
            <NavMenu />
          </div>
        )}
        
        {/* 右侧区域 - 与左侧内容以保持平衡 */}
        {!isMobile ? (
          <div className="flex-shrink-0 w-48">
            <LanguageSwitcher />
          </div>
        ) : (
          // 移动版菜单按钮
          <button 
            className="p-2 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="菜单"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                // 关闭图标
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                // 菜单图标
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        )}
      </div>
      
      {/* 移动版下拉菜单 */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-16">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <NavMenu />
            <div className="mt-8 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;