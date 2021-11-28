// import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer as AlertContainer } from "react-toastify";
import isEmpty from "lodash/isEmpty";
import { Header } from "components/Layout/Header";
import { SliderNextArrow, SliderPrevArrow, SliderSimple } from "ui-kit";
import { ActionTypes } from "ducks/cart";
import { useTypedSelector } from "hooks/useTypedSelector";
import { AlertError } from "utils/alert";
import styles from "./Home.module.scss";

const mainSlider1 = "/images/slide_1920x1680_5.jpg";
const mainSlider2 = "/images/slide_1920x1680_5.jpg";
const mainSlider3 = "/images/slide_1920x1680_5.jpg";
const mainSliderImages = [mainSlider1, mainSlider2, mainSlider3];

export const Home: React.FC = () => {
  const account = useTypedSelector(state => state.account);
  const dispatch = useDispatch();
  const unhandledError = useTypedSelector(state => state.unhandledError);
  const { error } = unhandledError;

  useEffect(() => {
    if (error) {
      AlertError("Ошибка создания корзины!", error.message);
    }
  }, [error]);

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
      <AlertContainer />
      <Header isHomePage />
      <section className={styles.MainSliders}>
        <SliderSimple
          className={styles.MainSlider}
          arrows={true}
          dots={true}
          images={mainSliderImages}
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          speed={500}
          width="1920"
          height="880"
          nextArrow={<SliderNextArrow styles={{ right: "5px" }} />}
          prevArrow={<SliderPrevArrow styles={{ left: "5px" }} />}
        />
      </section>
    </div>
  );
};
