import Image from "next/image";
import React from "react";
import LazyLoad from "react-lazyload";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderVideo.module.scss";

export interface ISliderVideoProps {
  className?: string;
  alt?: string;
  arrows?: boolean;
  dots?: boolean;
  videoList?: any;
  infinite?: boolean;
  height?: string;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  width?: string;
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
}

export const SliderVideo: React.FC<ISliderVideoProps> = ({
  className,
  alt = "",
  arrows,
  dots,
  videoList,
  infinite,
  height,
  slidesToShow,
  slidesToScroll,
  speed,
  width,
  nextArrow,
  prevArrow,
}) => {
  const settings = {
    arrows: arrows,
    className: classNames(className),
    dots: dots,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    nextArrow: nextArrow,
    prevArrow: prevArrow,
  };
  const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const imageResponsive = () => {
    if (isMobileScreen) {
      return "fill";
    } else {
      return "responsive";
    }
  };

  return (
    <Slider {...settings}>
      {videoList &&
        videoList.map((video, index) => {
          return (
            <div className={styles.Item} key={index}>
              <LazyLoad>
                <video autoPlay loop muted preload="none" playsInline>
                  <source src={video} type="video/mp4" />
                </video>
              </LazyLoad>
            </div>
          );
        })}
    </Slider>
  );
};
