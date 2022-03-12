import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { Modal } from "ui-kit";
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
  // heightNav,
  heightFor,
  // widthNav,
  widthFor,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
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

  useEffect(() => {
    slider1.current && slider1.current.slickGoTo(currentSlide);
    slider2.current && slider2.current.slickGoTo(currentSlide);
  }, [currentSlide]);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleAfterChange = (currentSlideAfterChange: number) => {
    setCurrentSlide(currentSlideAfterChange);
  };

  return (
    <>
      <Modal
        className={styles.OrderModal}
        isOpen={isOpenModal}
        onCloseModal={handleCloseModal}
      >
        <Slider
          asNavFor={nav2}
          initialSlide={currentSlide}
          ref={slider1}
          afterChange={handleAfterChange}
          {...settingsFor}
        >
          {images &&
            images.map((image, index) => {
              return (
                <div className={styles.ImageContainer} key={index + "Nav"}>
                  <Image
                    className={styles.Image}
                    priority
                    alt={alt}
                    src={image}
                    layout="responsive"
                    objectFit="contain"
                    height="100%"
                    width="100%"
                  />
                </div>
              );
            })}
        </Slider>
      </Modal>
      <Slider
        asNavFor={nav2}
        initialSlide={currentSlide}
        ref={slider1}
        afterChange={handleAfterChange}
        {...settingsFor}
      >
        {images &&
          images.map((image, index) => {
            return (
              <div className={styles.ImageContainer} key={index + "Nav"}>
                <Image
                  className={styles.Image}
                  priority
                  alt={alt}
                  src={image}
                  layout="responsive"
                  // layout="fill"
                  objectFit="contain"
                  height="100%"
                  width="100%"
                  // height={heightNav}
                  // width={widthNav}
                  onClick={handleOpenModal}
                />
              </div>
            );
          })}
      </Slider>

      <Slider
        asNavFor={nav1}
        initialSlide={currentSlide}
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
                  className={styles.Image}
                  priority
                  alt={alt}
                  src={image}
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
