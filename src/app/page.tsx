'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import styles from './page.module.scss';
import { animated } from 'react-spring';


export default function Home() {
  const [containerWidth, setContainerWidth] = useState(0);

  const [productList, setProductList] = useState([])

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setContainerWidth(screenWidth);
    };

    // 初始加载时获取屏幕宽度
    handleResize();

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);

    // 清除监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getGoodsWidth = () => {
    if (containerWidth < 800) {
      return '100%';
    } else if (containerWidth >= 800 && containerWidth <= 1280) {
      return '50%';
    } else {
      return '33%';
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3333/home/product/list').then(res => {
      const { data } = res;
      setProductList(data.productDtos)
    }).catch(err => {
      console.log(err, 'err')
    })
  }, [])


  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <div className={styles.title}>我们是一家科技零售公司</div>
        <div className={styles.introduce}>致力于满足您对品质和便捷的需求，让您享受到美味与健康的完美结合。</div>
        <div className={styles.introduce}>我们的目标是通过持续改进和客户满意度的追求，成为行业的领导者。</div>
      </div>
      <div className={styles.content}>
        <div className={styles['product-title']}>最新产品</div>
        <div className={styles['product-info']}>
          {!productList.length ? [1,2 ,3, 4, 5, 6].map((item) => {
            return (
              <div
                className={styles.goods}
                style={{ width: getGoodsWidth() }}
                key={item}
                onClick={() => {}}
              >
                <div className={styles['goods-img']}></div>
                {/* <img className={styles['goods-img']} src='https://5b0988e595225.cdn.sohucs.com/images/20171207/880fd2653a9043b7b9bcb726685e4c56.jpeg' /> */}
                <div>标题</div>
              </div>
            );
          }) : <div className={styles['no-data']}>
              暂无产品~
          </div>}
        </div>
      </div>
    </main>
  );
}