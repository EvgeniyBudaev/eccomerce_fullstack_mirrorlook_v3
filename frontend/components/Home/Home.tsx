import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { SliderNextArrow, SliderPrevArrow, SliderSimple } from "ui-kit";
import mainSlider1 from "ui-kit/assets/images/slide-home-10.jpg";
import mainSlider2 from "ui-kit/assets/images/slide-home-11.jpg";
import mainSlider3 from "ui-kit/assets/images/slide-home-9.jpg";
import card1 from "ui-kit/assets/images/home-mirrors4.jpg";
import card2 from "ui-kit/assets/images/home-mirrors5.jpg";
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
  const router = useRouter();
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
        <div className={styles.CatalogImg}>
          <Link href={`/mirrors`}>
            <a>
              <Image src={card1} alt="" priority width="160" height="160" />
            </a>
          </Link>
        </div>
        <div className={styles.CatalogImg}>
          <Link href={`/consoles`}>
            <a>
              <Image src={card2} alt="" priority width="160" height="160" />
            </a>
          </Link>
        </div>
      </section>
      <section className={styles.Promotions}>
        <h3 className={styles.PromotionsTitle}>Выгодные акции</h3>
        <div className={styles.PromotionsList}>
          <div className={styles.PromotionsListItem}>
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
          </div>
          <div className={styles.PromotionsListItem}>
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
          </div>
          <div className={styles.PromotionsListItem}>
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
          </div>
          <div className={styles.PromotionsListItem}>
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
          </div>
        </div>
      </section>
    </div>
  );
};
