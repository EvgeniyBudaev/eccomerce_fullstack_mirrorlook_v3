import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import slide5 from "ui-kit/assets/images/slide-home-5.jpg";
import slide6 from "ui-kit/assets/images/slide-home-6.jpg";
import slide7 from "ui-kit/assets/images/slide-home-7.jpg";

const SliderAsNavFor: React.FC = () => {
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
        <div>
          <Image src={slide5} alt="" width="400" height="400" />
        </div>
        <div>
          <Image src={slide6} alt="" width="400" height="400" />
        </div>
        <div>
          <Image src={slide7} alt="" width="400" height="400" />
        </div>
        <div>
          <Image src={slide5} alt="" width="400" height="400" />
        </div>
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settingsNav}
      >
        <div>
          <Image
            className="ItemImageNav"
            src={slide5}
            alt=""
            width="60"
            height="60"
          />
        </div>
        <div>
          <Image
            className="ItemImageNav"
            src={slide6}
            alt=""
            width="60"
            height="60"
          />
        </div>
        <div>
          <Image
            className="ItemImageNav"
            src={slide7}
            alt=""
            width="60"
            height="60"
          />
        </div>
        <div>
          <Image
            className="ItemImageNav"
            src={slide5}
            alt=""
            width="60"
            height="60"
          />
        </div>
      </Slider>
    </>
  );
};

export { SliderAsNavFor };
