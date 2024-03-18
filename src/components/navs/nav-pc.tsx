'use client'
import styles from './nav.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import Link from "next/link";

import routes from './routes';

export default function NavPc(props: any) {
  const { pathname } = props;

  return (
    <div className={styles['nav-pc']}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="我的图片" width={50} height={50} />
        <div className={styles.title}>至真园</div>
      </div>
      <div className={styles.route}>
        {
          routes.map(item => {
            return <Link href={item.path} key={item.key} className={pathname === item.path ? styles['a-active'] : ''}>
              { item.name }
            </Link>
          })
        }
      </div>
    </div>
  );
}
