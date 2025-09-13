import React from "react";
import Image from "next/image";

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
  }

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
      // 点击导航项后关闭菜单
  const handleNavClick = () => {
    onClose();
  };
  return (
    <div 
      className={`fixed top-0 right-0 h-full w-3/4 md:w-1/2 lg:w-1/3 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* 关闭按钮 */}
      <button
        className="absolute top-2 right-2 text-gray-700 px-2 py-1 rounded"
        onClick={onClose}
      >
        ×
      </button>

      {/* Logo + 导航区域 */}
      <div className="flex flex-col items-center p-8">
        {/* Logo */}
        <Image
          src="/images/zxlogo4.png"
          alt="香港拔萃教育"
          width={120}
          height={60}
          className="mb-4"
        />

        {/* 导航列表 */}
        <nav className="flex flex-col space-y-2">
          {/* <a href="/" className="text-gray-700 hover:text-yellow-500">首页</a>
          <a href="/apply" className="text-gray-700 hover:text-yellow-500">香港学校申请</a>
          <a href="/recommend" className="text-gray-700 hover:text-yellow-500">香港名校推荐</a>
          <a href="/courses" className="text-gray-700 hover:text-yellow-500">港式课程</a>
          <a href="/cases" className="text-gray-700 hover:text-yellow-500">成功案例</a>
          <a href="/news" className="text-gray-700 hover:text-yellow-500">教育资讯</a>
          <a href="/about" className="text-gray-700 hover:text-yellow-500">关于我们</a>
          <a href="/team" className="text-gray-700 hover:text-yellow-500">专业团队</a> */}
        </nav>

        {/* 联系方式 */}
        <div className="mt-8 text-center">
          <p className="text-gray-700">TEL. 18127037458</p>
          <p className="text-gray-700">广东省深圳市罗湖区南湖路 3009 号国贸商住大厦 21A - H</p>
          <p className="text-gray-700">香港沙田石门京瑞广场一期 11 楼 BCD</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;