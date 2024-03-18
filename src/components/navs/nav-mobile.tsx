'use client'
import styles from './nav.module.scss';

import { useEffect, useState } from 'react';
import { Popup, SideBar } from 'antd-mobile';
import Link from "next/link";
import Image from 'next/image';

import { UnorderedListOutline } from 'antd-mobile-icons';
import routes from './routes';
export default function NavMobile(props: any) {
  const { pathname } = props;
  const [visible3, setVisible3] = useState(false);


  const onMaskClick = () => {
    setVisible3(true);
  }

  return (
    <div className={styles['nav-mobile']}>
      <div className={styles.icon} onClick={onMaskClick}>
        <UnorderedListOutline />
      </div>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="我的图片" width={50} height={50} />
      </div>
      <Popup
        visible={visible3}
        onMaskClick={() => {
          setVisible3(false)
        }}
        position='left'
        bodyStyle={{ width: '60vw' }}
      >
        <div className={styles['side-bar']}>
          <div className={styles.logo}>
            <Image src="/images/logo.png" alt="我的图片" width={50} height={50} />
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
      </Popup>
    </div>
  );
}
