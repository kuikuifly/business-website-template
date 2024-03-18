'use client'

import type { Metadata } from "next";
import { useEffect, useState } from "react";
import Nav from '@/components/navs';
import Footer from '@/components/footer';

import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [hasWindow, setHasWindow] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setHasWindow(true);
  }, []);

  return (
    <html lang="en">
      <body>
        {hasWindow ? <div>
          <Nav />
          <div>{children}</div>
          <Footer />
        </div> : <div className='loading-box'>
          <span>加载中...</span>
        </div>}
      </body>
    </html>
  );
}