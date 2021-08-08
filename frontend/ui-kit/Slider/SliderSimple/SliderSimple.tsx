import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderSimple.module.scss";

export interface ISliderSimpleProps {
  className?: string;
  alt?: string;
  arrows?: boolean;
  dots?: boolean;
  images?: StaticImageData[];
  infinite?: boolean;
  height?: string;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  width?: string;
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
}

export const SliderSimple: React.FC<ISliderSimpleProps> = ({
  className,
  alt = "",
  arrows,
  dots,
  images,
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

  return (
    <Slider {...settings}>
      {images &&
        images.map((image, index) => {
          return (
            <div className={styles.Item} key={index}>
              <Image src={image} alt={alt} height={height} width={width} />
            </div>
          );
        })}
    </Slider>
  );
};
