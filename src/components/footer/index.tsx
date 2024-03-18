'use client';

import { useEffect, useState } from "react";

import FooterPc from '@/components/footer/footer-pc'
import FooterMobile from '@/components/footer/footer-mobile';

const Footer = () => {

  const [isWideScreen, setIsWideScreen] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 初始化时检测一次屏幕宽度

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isWideScreen? <FooterPc /> : <FooterMobile />
}

export default Footer;