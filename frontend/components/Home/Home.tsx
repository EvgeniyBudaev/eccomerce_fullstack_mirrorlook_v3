import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { SliderNextArrow, SliderPrevArrow, SliderSimple } from "ui-kit";
import mainSlider1 from "ui-kit/assets/images/slide-home-9.png";
import mainSlider2 from "ui-kit/assets/images/slide-home-9.png";
import mainSlider3 from "ui-kit/assets/images/slide-home-9.png";
import productSlider1 from "ui-kit/assets/images/slide-home-10.png";
import productSlider2 from "ui-kit/assets/images/slide-home-10.png";
import productSlider3 from "ui-kit/assets/images/slide-home-10.png";
import card1 from "ui-kit/assets/images/home-mirrors3.jpg";
import card2 from "ui-kit/assets/images/home-consoles.jpg";
import { ActionTypes } from "ducks/cart";
import { useTypedSelector } from "hooks/useTypedSelector";
import styles from "./Home.module.scss";

const mainSliderImages = [mainSlider1, mainSlider2, mainSlider3];
const productSliderImages = [productSlider1, productSlider2, productSlider3];

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const account = useTypedSelector(state => state.account);

  useEffect(() => {
    if (isEmpty(localStorage.getItem("cart"))) {
      dispatch({
        type: ActionTypes.CART_CREATE,
        payload: account.user && account.user.id,
      });
    } else {
      dispatch({
        type: ActionTypes.CART_INIT,
      });
    }
  }, [account.user, dispatch]);

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
          nextArrow={<SliderNextArrow styles={{ right: "5px" }} />}
          prevArrow={<SliderPrevArrow styles={{ left: "5px" }} />}
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
