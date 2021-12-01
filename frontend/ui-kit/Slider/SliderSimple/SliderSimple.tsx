import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import { Button } from "ui-kit";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderSimple.module.scss";

interface IOption {
  buttonText?: string;
  image: StaticImageData | string;
  title?: string;
}

export interface ISliderSimpleProps {
  className?: string;
  alt?: string;
  arrows?: boolean;
  dots?: boolean;
  infinite?: boolean;
  height?: string;
  options: IOption[];
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
  infinite,
  height,
  options,
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
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });

  // const imageResponsive = () => {
  //   if (isMobileScreen) {
  //     return "fill";
  //   } else {
  //     return "responsive";
  //   }
  // };

  const handleButtonClick = (event) => {
    event.preventDefault();
    router.push("/mirrors");
  };

  return (
    <Slider {...settings}>
      {!isEmpty(options) &&
      options.map((option, index) => {
          return (
            <div className={styles.Item} key={index}>
              {isMobileScreen ? (
                <Image
                  className={styles.Image}
                  src={option.image}
                  alt={alt}
                  priority
                  layout="responsive"
                  //layout={imageResponsive()}
                  height="120px"
                  width="470px"
                />
              ) : (
                <>
                  <Image
                    className={styles.Image}
                    src={option.image}
                    alt={alt}
                    priority
                    layout="responsive"
                    //layout={imageResponsive()}
                    //objectFit="cover"
                    height={height}
                    width={width}
                  />
                  <div className={styles.ItemContent}>
                    <h1 className={styles.ItemTitle}>
                      {option.title}
                    </h1>
                    <Button
                      className={styles.ItemButton
                      } onClick={handleButtonClick}>
                      {option.buttonText}
                    </Button>
                  </div>
                </>
              )}
            </div>
          );
        })}
    </Slider>
  );
};
