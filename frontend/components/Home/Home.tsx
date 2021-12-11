// import Link from "next/link";
// import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer as AlertContainer } from "react-toastify";
import isEmpty from "lodash/isEmpty";
import { Header } from "components/Layout/Header";
import { SliderNextArrow, SliderPrevArrow, SliderSimple } from "ui-kit";
import { ActionTypes } from "ducks/cart";
import { useTypedSelector } from "hooks/useTypedSelector";
import { AlertError } from "utils/alert";
import { Advantages } from "./Advantages";
import { Collection } from "./Collection";
import styles from "./Home.module.scss";

const mainSlider1 = "/images/models-0.jpg";
const mainSlider2 = "/images/models-19.jpg";
const mainSlider3 = "/images/models-32.jpg";
const sliderOptions = [
  {
    buttonText: "Посмотреть все зеркала",
    image: mainSlider1,
    title: "Зеркало отражение прекрасного",
  },
  {
    buttonText: "Посмотреть все зеркала",
    image: mainSlider2,
    title: "Роскошь во всём",
  },
  {
    buttonText: "Посмотреть все зеркала",
    image: mainSlider3,
    title: "Внимание к деталям",
  },
];

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
          infinite={true}
          options={sliderOptions}
          slidesToShow={1}
          slidesToScroll={1}
          speed={500}
          width="1890"
          height="880"
          nextArrow={<SliderNextArrow styles={{ right: "5px" }} />}
          prevArrow={<SliderPrevArrow styles={{ left: "5px" }} />}
        />
      </section>
      <article className={styles.About}>
        <div className={styles.AboutTitle}>
          <h1>Meta Home</h1>
          <span>. У тебя есть вкус.</span>
        </div>
        <p>
          Вдохновляйтесь красотой и комфортом стиля в интерьерах квартир,
          частных домов и апартаментов. Компания Meta Home производит
          качественные зеркала и эффектный декор для тех, кто находится в поиске
          баланса между стилем, удобством и высокой функциональностью каждого
          элемента обстановки.
        </p>
      </article>
      <Collection />
      <Advantages />
    </div>
  );
};
