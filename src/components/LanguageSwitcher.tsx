import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const LanguageSwitcher: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const langs = ["tc", "sc"];

  // 检测屏幕尺寸变化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 初始化
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const switchToLocale = (lang:string) => {
    const path = router.asPath;
    router.push(path, path, { locale: lang });
    setIsOpen(false);
  }

  const langMap = (lang:string) => {
    return [
      {
        key: "tc",
        name: "繁",
      },
      {
        key: "sc",
        name: "簡",
      },
    ].find((l) => l.key === lang)?.name || ""
  }

  // 移动端样式
  const mobileButtonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    border: '1px solid #467238',
    borderRadius: '8px',
    backgroundColor: 'white',
    color: '#467238'
  };

  const mobileMenuStyle = {
    position: 'absolute' as const,
    right: '10px',
    top: '100%',
    marginTop: '5px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    minWidth: '120px',
    zIndex: 10
  };

  const mobileMenuItemStyle = {
    padding: '12px 20px',
    fontSize: '16px',
    color: '#467238',
    border: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    textAlign: 'left' as const
  };

  // 移动端下拉菜单
  if (isMobile) {
    return (
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={mobileButtonStyle}
          className="flex items-center justify-between"
        >
          <span>{langMap(locale || '')}</span>
          <span className={`ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
        </button>

        {isOpen && (
          <div style={mobileMenuStyle}>
            {langs
              .filter(lang => lang !== locale)
              .map(lang => (
                <button
                  key={lang}
                  onClick={() => switchToLocale(lang)}
                  style={mobileMenuItemStyle}
                  className="hover:bg-[#f0f5eb] transition-colors"
                >
                  {langMap(lang)}
                </button>
              ))}
          </div>
        )}
      </div>
    );
  }

  // 桌面端原始样式
  return (
    <div className="flex flex-row justify-end">
      {langs.map((lang, i) => {
        if (lang !== locale) {
          return (
            <React.Fragment key={i}>
              <div className="inline-block cursor-pointer mr-4 border border-[#467238] px-3 py-1 rounded-full hover:bg-[#467238] hover:text-white transition-all duration-300" onClick={() => switchToLocale(lang)}>
                { langMap(lang) }
              </div>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

export default LanguageSwitcher;
