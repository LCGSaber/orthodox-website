import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import homepage from 'apidata/homepage-zx.json'
// 定义菜单数据类型
interface SubMenu {
  title: string;
  path: string;
}

interface MainMenu {
  title: string;
  path: string;
  subMenus: SubMenu[];
}

const NavMenu: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const router = useRouter(); // 用于获取当前路由信息
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

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

  const toggleSubMenu = (id: number) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  // 移动端菜单样式
  const mobileMenuStyles = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  };

  // 移动端菜单项样式
  const mobileMenuItemStyles = {
    padding: '8px 0',
    borderBottom: '1px solid #eee',
  };

  // 移动端子菜单样式
  const mobileSubMenuStyles = {
    marginLeft: '20px',
    marginTop: '8px',
    marginBottom: '8px',
  };

  // 导航菜单数据（包含路径信息）
  const mainMenus: MainMenu[] = [
    {
      title: g(homepage,'home'),
      path: "/",
      subMenus: [],
    },
    {
      title: g(homepage,'introduction'),
      path: "/introduction/about-us",
      subMenus: [
        { title: g(homepage,'introduction'), path: "/introduction/about-us" },
      ],
    },
    {
      title: g(homepage,'application'),
      path: "/application/international-school",
      subMenus: [
        { title: g(homepage,'application_in'), path: "/application/international-school" },
        { title: g(homepage,'application_lo'), path: "/application/local-school" },
        { title: g(homepage,'application_un'), path: "/application/bachelor-application" },
        { title: g(homepage,'application_sh'), path: "/application/master-application" },
      ],
    },
    {
      title: g(homepage,'course'),
      path: "/courses/orientation-training",
      subMenus: [
        { title: g(homepage,'course_rx'), path: "/courses/orientation-training" },
        { title: g(homepage,'course_1'), path: "/courses/subject-tutoring" },
        { title: g(homepage,'course_2'), path: "/courses/after-school-care" },
        { title: g(homepage,'course_3'), path: "/courses/academic-planning" },
      ],
    },
    {
      title: g(homepage,'cases'),
      path: "/cases",
      subMenus: [],
    },
    {
      title: g(homepage,'contact_us'),
      path: "/assessment",
      subMenus: [
        { title: g(homepage,'contact_us'), path: "/assessment" },
      ],
    },
  ];

  // 判断当前路径是否为活跃状态
  const isActive = (path: string) => {
    return router.pathname.startsWith(path) && path !== "/";
  };

  return (
    <nav className="flex items-center justify-center bg-white py-0 h-full">
      {isMobile ? (
        // 移动端菜单
        <div style={mobileMenuStyles}>
          {mainMenus.map((menu, index) => (
            <div key={index} style={mobileMenuItemStyles}>
              <div className="flex items-center justify-between" onClick={() => menu.subMenus.length > 0 && toggleSubMenu(index)}>
                <Link href={menu.path} className={`font-medium transition-colors py-2 inline-block ${isActive(menu.path) ? 'text-yellow-600' : 'text-gray-700'}`} style={{ fontSize: '1.1rem' }}>
                  {menu.title}
                </Link>
                {menu.subMenus.length > 0 && (
                  <span className="text-gray-500">
                    {openSubMenu === index ? '▼' : '▶'}
                  </span>
                )}
              </div>
              {menu.subMenus.length > 0 && openSubMenu === index && (
                <div style={mobileSubMenuStyles}>
                  {menu.subMenus.map((subMenu, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subMenu.path}
                      className={`block px-4 py-3 text-gray-700 hover:bg-[rgb(73,120,57)] hover:text-white 
                        transition-colors ${router.pathname === subMenu.path ? 'bg-[rgb(73,120,57)] text-white' : ''}`}
                      style={{ fontSize: '0.9rem' }}
                      onClick={() => setOpenSubMenu(null)}
                    >
                      {subMenu.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        // 桌面端菜单
        <div className="flex space-x-8 px-4 mx-auto">
          {mainMenus.map((menu, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="relative group"
            >
              <Link 
                href={menu.path}
                className={`font-medium transition-colors py-2 inline-block ${isActive(menu.path) ? 'text-yellow-600' : 'text-gray-700 hover:text-[#467238]'}`}
              >
                {menu.title}
              </Link>
              
              {/* 子菜单 */}
              {menu.subMenus.length > 0 && (
                <div 
                  className={`absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md overflow-hidden 
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                    transition-all duration-200 transform origin-top scale-95 group-hover:scale-100
                    min-w-[200px] z-10`}
                >
                  {menu.subMenus.map((subMenu, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subMenu.path}
                      className={`block px-4 py-3 text-gray-700 hover:bg-[rgb(73,120,57)] hover:text-white 
                        transition-colors ${router.pathname === subMenu.path ? 'bg-[rgb(73,120,57)] text-white' : ''}`}
                      style={{ fontSize: '0.9rem' }}
                    >
                      {subMenu.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* 右侧功能区 */}
          <div className="ml-auto flex items-center space-x-3">
             
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
