'use client';

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

import NavPc from '@/components/navs/nav-pc';
import NavMobile from '@/components/navs/nav-mobile';


const Nav = () => {

  const pathname = usePathname()

  const [isWideScreen, setIsWideScreen] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 初始化时检测一次屏幕宽度

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isWideScreen ? <NavPc pathname={pathname} /> : <NavMobile pathname={pathname} />
}

export default Nav