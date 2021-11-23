import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import isEmpty from "lodash/isEmpty";
import { SliderNextArrow, SliderPrevArrow, SliderSimple } from "ui-kit";
import mainSlider1 from "ui-kit/assets/images/slide-home-10.jpg";
import mainSlider2 from "ui-kit/assets/images/slide-home-11.jpg";
import mainSlider3 from "ui-kit/assets/images/slide-home-9.jpg";
import card1 from "ui-kit/assets/images/home-mirrors4.jpg";
import promotion1 from "ui-kit/assets/images/promotion-1.jpg";
import promotion2 from "ui-kit/assets/images/promotion-2.jpg";
import promotion3 from "ui-kit/assets/images/promotion-3.jpg";
import promotion4 from "ui-kit/assets/images/promotion-4.jpg";
import { ActionTypes } from "ducks/cart";
import { useTypedSelector } from "hooks/useTypedSelector";
import styles from "./Home.module.scss";

const mainSliderImages = [mainSlider1, mainSlider2, mainSlider3];

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const account = useTypedSelector(state => state.account);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });

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

  const imageResponsiveSizeWidth = () => {
    if (isMobileScreen) {
      return "100px";
    } else {
      return "160px";
    }
  };

  const imageResponsiveSizeHeight = () => {
    if (isMobileScreen) {
      return "100px";
    } else {
      return "160px";
    }
  };

  return (
    <div className={styles.Home}>
      <section className={styles.MainSliders}>
        <SliderSimple
          className={styles.MainSlider}
          arrows={true}
          dots={true}
          images={mainSliderImages}
          infinite={true}
          height="300"
          slidesToShow={1}
          slidesToScroll={1}
          speed={500}
          width="1440"
          nextArrow={<SliderNextArrow styles={{ right: "5px" }} />}
          prevArrow={<SliderPrevArrow styles={{ left: "5px" }} />}
        />
      </section>
      <section className={styles.Catalog}>
        <div className={styles.CatalogItem}>
          <Link href={`/mirrors`}>
            <a>
              <h4 className={styles.CatalogItemTitle}>Зеркала</h4>
              <Image
                src={card1}
                alt=""
                priority
                width={imageResponsiveSizeWidth()}
                height={imageResponsiveSizeHeight()}
              />
            </a>
          </Link>
        </div>
      </section>
      <section className={styles.Promotions}>
        <h3 className={styles.PromotionsTitle}>Выгодные акции</h3>
        <ul className={styles.PromotionsList}>
          <li className={styles.PromotionsListItem}>
            <Image
              className={styles.PromotionsListItemImage}
              alt=""
              priority
              src={promotion1}
              width="270"
              height="205"
            />
            <div className={styles.PromotionsListItemTitle}>
              Продукты, товары для дома, детей, животных
            </div>
            <div className={styles.PromotionsListItemSybTitle}>
              Чтобы дома всего было с запасом
            </div>
          </li>
          <li className={styles.PromotionsListItem}>
            <Image
              className={styles.PromotionsListItemImage}
              alt=""
              priority
              src={promotion2}
              width="270"
              height="205"
            />
            <div className={styles.PromotionsListItemTitle}>
              Станьте рок-звездой
            </div>
            <div className={styles.PromotionsListItemSybTitle}>
              Настройтесь зажигать
            </div>
          </li>
          <li className={styles.PromotionsListItem}>
            <Image
              className={styles.PromotionsListItemImage}
              alt=""
              priority
              src={promotion3}
              width="270"
              height="205"
            />
            <div className={styles.PromotionsListItemTitle}>
              Включайте новый год
            </div>
            <div className={styles.PromotionsListItemSybTitle}>
              Товары для тех, кому не терпиться
            </div>
          </li>
          <li className={styles.PromotionsListItem}>
            <Image
              className={styles.PromotionsListItemImage}
              alt=""
              priority
              src={promotion4}
              width="270"
              height="205"
            />
            <div className={styles.PromotionsListItemTitle}>
              Сантехника Grohe
            </div>
            <div className={styles.PromotionsListItemSybTitle}>
              Скидки на чистую воду
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};
