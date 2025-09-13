import React from "react";
import { useRouter } from 'next/router'
import homepage from 'apidata/homepage-zx.json'

interface MenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggleMenu }) => {
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`
  return (
    <button
      onClick={toggleMenu}
      className="relative w-24 h-24 rounded-tl-full rounded-br-full flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
      aria-label={isOpen ? "关闭菜单" : "打开菜单"}
    >
      <div className="flex flex-col items-center">
        <div className="w-10 h-1 bg-white mb-2 transition-all"></div>
        <div className="w-6 h-1 bg-white mb-1 transition-all"></div>
        <span className="text-white text-sm font-medium">{g(homepage,'menu')}</span>
      </div>
    </button>
  );
};

export default MenuButton;
