import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'src/styles/Carousel.module.css';

// 定义轮播项类型
interface CarouselItem {
  id: number;
  imageSrc: string;
  altText: string;
  link: string;
}

const Carousel: React.FC = () => {
  // 轮播数据 - 实际使用时替换为你的图片
  const carouselItems: CarouselItem[] = [
    { id: 1, imageSrc: 'https://www.hkbacui.com/template/static/home/images/index/banner1.jpg', altText: '第一张轮播图', link: '/page1' },
    { id: 2, imageSrc: 'https://www.hkbacui.com/template/static/home/images/index/banner2.jpg', altText: '第二张轮播图', link: '/page2' },
    { id: 3, imageSrc: 'https://www.hkbacui.com/template/static/home/images/index/banner3.jpg', altText: '第三张轮播图', link: '/page3' },
    { id: 4, imageSrc: 'https://www.hkbacui.com/template/static/home/images/index/banner4.jpg', altText: '第四张轮播图', link: '/page4' },
  ];
  
  // 复制一份数据用于无缝滚动
  const allItems = [...carouselItems, ...carouselItems];
  const trackRef = useRef<HTMLDivElement>(null);
  
  // 计算动画持续时间（每个项目滚动时间 * 项目数量）
  const animationDuration = allItems.length * 6; // 每个项目滚动3秒
  
  useEffect(() => {
    // 当组件挂载时重置动画
    if (trackRef.current) {
      trackRef.current.style.animation = 'none';
      // 触发重绘
      void trackRef.current.offsetWidth;
      trackRef.current.style.animation = `${styles.scroll} ${animationDuration}s linear infinite`;
    }
  }, [animationDuration]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack} ref={trackRef}>
        {allItems.map((item) => (
          <div key={`${item.id}-${item.id % carouselItems.length}`} className={styles.carouselItem}>
            <Link href={item.link} className={styles.imageLink}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
    