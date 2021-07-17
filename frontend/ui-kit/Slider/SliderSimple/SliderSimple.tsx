import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderSimple.module.scss";

import slide1 from "ui-kit/assets/images/slide-home-1.jpg";
import slide2 from "ui-kit/assets/images/slide-home-2.jpg";
import slide3 from "ui-kit/assets/images/slide-home-3.jpg";
import slide4 from "ui-kit/assets/images/slide-home-4.jpg";
import slide5 from "ui-kit/assets/images/slide-home-5.jpg";
import slide6 from "ui-kit/assets/images/slide-home-6.jpg";
import slide7 from "ui-kit/assets/images/slide-home-7.jpg";
import slide8 from "ui-kit/assets/images/slide-home-8.jpg";

class SliderSimple extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "SliderSimple",
    };
    return (
      <div className={styles.Slider}>
        <Slider {...settings}>
          <div className={styles.Item}>
            <Image src={slide5} alt="" width="1200" height="780" />
          </div>
          <div className={styles.Item}>
            <Image src={slide6} alt="" width="1200" height="780" />
          </div>
          <div className={styles.Item}>
            <Image src={slide7} alt="" width="1200" height="780" />
          </div>
          <div className={styles.Item}>
            <Image src={slide8} alt="" width="1200" height="780" />
          </div>
        </Slider>
      </div>
    );
  }
}

export { SliderSimple };
