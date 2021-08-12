import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "../SliderSimple/SliderSimple.module.scss";

interface ISliderAsNavForProps {
  alt?: string;
  images?: string[];
  heightNav?: string;
  heightFor?: string;
  widthNav?: string;
  widthFor?: string;
}

const SliderAsNavFor: React.FC<ISliderAsNavForProps> = ({
  alt = "",
  images,
  heightNav,
  heightFor,
  widthNav,
  widthFor,
}) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const settingsFor = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    className: "SliderFor",
  };

  const settingsNav = {
    slidesToShow: 3,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: false,
    swipeToSlide: true,
    focusOnSelect: true,
    className: "SliderNav",
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
    ],
  };

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <>
      <Slider asNavFor={nav2} ref={slider1} {...settingsFor}>
        {images &&
          images.map((image, index) => {
            return (
              <div key={index + "Nav"}>
                <Image
                  src={image}
                  alt={alt}
                  height={heightNav}
                  width={widthNav}
                />
              </div>
            );
          })}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settingsNav}
      >
        {images &&
          images.map((image, index) => {
            return (
              <div key={index + "For"}>
                <Image
                  src={image}
                  alt={alt}
                  height={heightFor}
                  width={widthFor}
                />
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export { SliderAsNavFor };
