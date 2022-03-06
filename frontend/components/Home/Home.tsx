import dinamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import isEmpty from "lodash/isEmpty";
import { Header } from "components/Layout/Header";
import { ActionTypes } from "ducks/cart";
import { accountSelector, unhandledErrorSelector } from "ducks/selectors";
import { useDispatch, useSelector } from "hooks";
import { SliderNextArrow, SliderPrevArrow, SliderSimple } from "ui-kit";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";
import { Advantages } from "./Advantages";
import { Article } from "./Article";
import { Benefits } from "./Benefits";
import styles from "./Home.module.scss";

const Collections = dinamic(() => import("./Collections"));

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
  const account = useSelector(accountSelector);
  const dispatch = useDispatch();
  const { error } = useSelector(unhandledErrorSelector);

  useEffect(() => {
    if (error) {
      const errorByStatus = getErrorByStatus(error);
      AlertError(errorByStatus.error.body);
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

  const renderHelpText = () => {
    return (
      <p>
        У вас есть вопросы? Пообщайтесь со специалистом по телефону
        <Link href={"tel:+79955053978"}>
          <a className={styles.ArticleLink}>+7 (995) 505-39-78</a>
        </Link>
        или можете написать письмо на электронную почту
        <Link href={"mailto:infomirrorlook@gmail.com"}>
          <a className={styles.ArticleLink}>infomirrorlook@gmail.com</a>
        </Link>
      </p>
    );
  };

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
      <Article
        subTitle="У тебя есть вкус."
        text="Вдохновляйтесь красотой и комфортом стиля в интерьерах квартир,
          частных домов и апартаментов. Компания Mirror Look производит
          качественные зеркала и эффектный декор для тех, кто находится в поиске
          баланса между стилем, удобством и высокой функциональностью каждого
          элемента обстановки."
        title="Mirror Look."
      />
      <Collections />
      <Article
        subTitle="Производство дизайнерских зеркал"
        text="          Мы производим зеркала, в том числе по индивидуальному заказу. Мы учтем
          все ваши пожелания — у нас есть все, чтобы воплотить ваши самые смелые
          фантазии и замыслы в реальность!"
      />
      <Benefits />
      <Advantages />
      <Article text={renderHelpText()} title="Помощь при покупке" />
    </div>
  );
};
