import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import styles from "src/styles/CarouselLayout.module.css";

// 假设图片资源放在 public 目录下，这里是图片路径示例，你需替换为实际路径
// const images = [
//   "/sushi.jpg",
//   "/desserts.jpg",
//   "/office.jpg",
// ];

type propsT = {
  text1?: string
  iconImage?:string
  images?: string[]
}

const CarouselLayout = ({
  text1 = '',
  iconImage='',
  images = [],
}: propsT) => {
  const settings = {
    dots: true, // 显示底部的 dots 指示器
    infinite: true, // 无限循环
    speed: 500, // 切换动画时长
    slidesToShow: 3, // 同时显示的幻灯片数量
    slidesToScroll: 1, // 每次滚动的幻灯片数量
    autoplay: true, // 是否自动播放，可根据需求设置为 true
    autoplaySpeed: 3000, // 自动播放间隔， autoplay 为 true 时生效
    prevArrow: <div className={styles.prevArrow}></div>, // 自定义左箭头
    nextArrow: <div className={styles.nextArrow}></div>, // 自定义右箭头
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 手机屏幕下显示 1 张
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 平板屏幕下显示 2 张
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>
        <span className={styles.icon}><img src={iconImage}></img></span>{text1}
      </h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className={styles.slide}>
            <img src={img} alt={`office-${index}`} className={styles.slideImage} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselLayout;