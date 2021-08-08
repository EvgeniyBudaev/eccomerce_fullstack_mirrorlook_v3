import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SliderNextArrow, SliderPrevArrow, SliderSimple } from "ui-kit";
import mainSlider1 from "ui-kit/assets/images/slide-home-9.png";
import mainSlider2 from "ui-kit/assets/images/slide-home-9.png";
import mainSlider3 from "ui-kit/assets/images/slide-home-9.png";
import productSlider1 from "ui-kit/assets/images/slide-home-10.png";
import productSlider2 from "ui-kit/assets/images/slide-home-10.png";
import productSlider3 from "ui-kit/assets/images/slide-home-10.png";
import card1 from "ui-kit/assets/images/home-mirrors3.jpg";
import card2 from "ui-kit/assets/images/home-consoles.jpg";
import styles from "./Home.module.scss";

const mainSliderImages = [mainSlider1, mainSlider2, mainSlider3];
const productSliderImages = [productSlider1, productSlider2, productSlider3];

export const Home: React.FC = () => {
  return (
    <div className={styles.Home}>
      <section className={styles.MainSliders}>
        <SliderSimple
          className={styles.MainSlider}
          arrows={true}
          dots={true}
          images={mainSliderImages}
          infinite={true}
          height="360"
          slidesToShow={1}
          slidesToScroll={1}
          speed={500}
          width="900"
          nextArrow={<SliderNextArrow styles={{ right: "25px" }} />}
          prevArrow={<SliderPrevArrow styles={{ left: "25px" }} />}
        />
        <SliderSimple
          className={styles.ProductSlider}
          arrows={true}
          dots={true}
          images={productSliderImages}
          infinite={true}
          height="360"
          slidesToShow={1}
          slidesToScroll={1}
          speed={500}
          width="260"
          nextArrow={<SliderNextArrow styles={{ right: "-25px" }} />}
          prevArrow={<SliderPrevArrow styles={{ left: "-25px" }} />}
        />
      </section>
      <section className={styles.Catalog}>
        <div className={styles.CatalogImg}>
          <Link href={`/mirrors/`}>
            <a>
              <Image src={card1} alt="" width="585" height="380" />
            </a>
          </Link>
        </div>
        <div className={styles.CatalogImg}>
          <Link href={`/consoles/`}>
            <a>
              <Image src={card2} alt="" width="585" height="380" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};
