import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import { ROUTES } from "constants/routes";
import { LinkButton } from "ui-kit";
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
  const isLaptopScreen = useMediaQuery({ query: "(max-width: 1366px)" });
  const isPadScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobileScreen = useMediaQuery({ query: "(max-width: 100px)" });

  // const imageResponsive = () => {
  //   if (isMobileScreen) {
  //     return "fill";
  //   } else {
  //     return "responsive";
  //   }
  // };

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
                  // height="120px"
                  // width="470px"
                  height={height}
                  width={width}
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
                  <div
                    className={classNames(styles.ItemContent, {
                      [styles.ItemContent__isLaptopScreen]: isLaptopScreen,
                      [styles.ItemContent__isPadScreen]: isPadScreen,
                    })}
                  >
                    <div className={styles.Container}>
                      <h2 className={styles.ItemTitle}>{option.title}</h2>
                      <LinkButton
                        className={styles.ItemButton}
                        href={ROUTES.MIRRORS}
                      >
                        {option.buttonText}
                      </LinkButton>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
    </Slider>
  );
};
