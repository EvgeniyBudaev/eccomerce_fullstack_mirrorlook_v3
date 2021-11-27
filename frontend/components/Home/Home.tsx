// import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useMediaQuery } from "react-responsive";
import { ToastContainer as AlertContainer } from "react-toastify";
import isEmpty from "lodash/isEmpty";
import { SliderNextArrow, SliderPrevArrow, SliderVideo } from "ui-kit";
import { ActionTypes } from "ducks/cart";
import { useTypedSelector } from "hooks/useTypedSelector";
import { AlertError } from "utils/alert";
import styles from "./Home.module.scss";

const videoSlider1 = "/video/home_video_slide_1.mp4";
const videoSlider2 = "/video/home_video_slide_2.mp4";
const mainSliderVideos = [videoSlider1, videoSlider2];

export const Home: React.FC = () => {
  const account = useTypedSelector(state => state.account);
  const dispatch = useDispatch();
  // const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });
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

  // const imageResponsiveSizeWidth = () => {
  //   if (isMobileScreen) {
  //     return "100px";
  //   } else {
  //     return "160px";
  //   }
  // };

  // const imageResponsiveSizeHeight = () => {
  //   if (isMobileScreen) {
  //     return "100px";
  //   } else {
  //     return "160px";
  //   }
  // };

  return (
    <div className={styles.Home}>
      <AlertContainer />
      <section className={styles.MainSliders}>
        {/*<video autoPlay loop muted>*/}
        {/*  <source*/}
        {/*    src={"/video/home_video_slide_1.mp4"} type="video/mp4"*/}
        {/*  />*/}
        {/*</video>*/}
        <SliderVideo
          className={styles.MainSlider}
          arrows={true}
          dots={true}
          videoList={mainSliderVideos}
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
    </div>
  );
};
