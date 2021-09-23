import { GetStaticProps } from "next";
import getConfig from "next/config";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import * as ym from "react-yandex-maps";

// import {
//   GeoObject,
//   GeolocationControl,
//   FullscreenControl,
//   YMaps,
//   Map,
//   SearchControl,
//   Placemark,
//   YMapsApi,
//   ZoomControl,
//   PlacemarkGeometry,
// } from "react-yandex-maps";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setUnhandledClearError } from "ducks/unhandledError";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Button, FormField, Spinner } from "ui-kit";
import styles from "./Shipping.module.scss";

import { YandexGeocodingService } from "../YMap/scripts/geo/YandexGeocodingService";
import YMap from "../YMap/YMap";

export interface IShippingForm {
  address: string;
  apartment?: number;
  floor?: number;
  entrance?: number;
  intercom?: number;
  comment?: string;
}

const schema = yup.object().shape({
  address: yup.string().required("Пожалуйста, укажите адрес"),
});

const { serverRuntimeConfig } = getConfig();

export const Shipping: React.FC = () => {
  // const order = useTypedSelector(state => state.order);
  // const { hasMounted } = useMounted();
  // const { shippingAddress } = hasMounted && order;
  // const [address, setAddress] = useState(
  //   shippingAddress ? shippingAddress : ""
  // );
  const [isFocused, setIsFocused] = useState({
    address: false,
    apartment: false,
    floor: false,
    entrance: false,
    intercom: false,
    comment: false,
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IShippingForm>({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const router = useRouter();
  const loading = useTypedSelector(state => state.loading);
  const unhandledError = useTypedSelector(state => state.unhandledError);
  const { isLoading } = loading;
  const { error } = unhandledError;
  const watchAllFields = watch();

  //const [ymaps, setYmaps] = useState<YMapsApi>(null);
  const loadSuggest = (ymaps: ym.YMapsApi): void => {
    console.log("ymaps", ymaps);
    new ymaps.SuggestView("suggest");
  };

  const onSubmit = (data: IShippingForm) => {
    console.log("data: ", data);
  };

  useEffect(() => {
    return () => {
      dispatch(setUnhandledClearError());
    };
  }, [dispatch]);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused({ ...isFocused, [event.target.name]: true });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (watchAllFields[event.target.name] !== "") {
      setIsFocused({ ...isFocused, [event.target.name]: true });
    } else {
      setIsFocused({ ...isFocused, [event.target.name]: false });
    }
  };

  if (isLoading) return <Spinner />;

  // const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   dispatch({
  //     type: ActionTypes.FETCH_ORDER_SHIPPING_ADDRESS_SAVE,
  //     payload: {
  //       address: address,
  //     },
  //   });
  //   router.push("/order");
  // };

  // const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   setAddress(event.target.value);
  // };

  return (
    <section className={styles.Shipping}>
      <h2 className={styles.Title}>Где Вы хотите получить заказ?</h2>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.FormFieldGroup}>
          <FormField
            id="suggest"
            label="Адрес"
            name="address"
            type="text"
            register={register}
            error={errors.address && errors.address.message}
            isFocused={isFocused.address}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </div>
        <div className={styles.FormFieldGroup}>
          <FormField
            className={styles.FormFieldGroupItem}
            label="Квартира"
            name="apartment"
            type="text"
            register={register}
            error={errors.apartment && errors.apartment.message}
            isFocused={isFocused.apartment}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <FormField
            className={styles.FormFieldGroupItem}
            label="Этаж"
            name="floor"
            type="text"
            register={register}
            error={errors.floor && errors.floor.message}
            isFocused={isFocused.floor}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </div>
        <div className={styles.FormFieldGroup}>
          <FormField
            className={styles.FormFieldGroupItem}
            label="Подъезд"
            name="entrance"
            type="text"
            register={register}
            error={errors.entrance && errors.entrance.message}
            isFocused={isFocused.entrance}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <FormField
            className={styles.FormFieldGroupItem}
            label="Домофон"
            name="intercom"
            type="text"
            register={register}
            error={errors.intercom && errors.intercom.message}
            isFocused={isFocused.intercom}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </div>
        <div className={styles.FormFieldGroup}>
          <FormField
            className={styles.TextField}
            label="Комментарий для курьера"
            name="comment"
            register={register}
            type="textarea"
            error={errors.comment && errors.comment.message}
            isFocused={isFocused.comment}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </div>
        <Button
          className={styles.Button}
          typeButton="submit"
          onClick={() => {}}
        >
          Продолжить
        </Button>
      </form>

      <div className={styles.Map}>
        {/*<YMaps query={{ apikey: process.env.NEXT_PUBLIC_MAP_API_KEY }}>*/}
        {/*  <Map*/}
        {/*    defaultState={{*/}
        {/*      center: [55.75, 37.57],*/}
        {/*      zoom: 15,*/}
        {/*    }}*/}
        {/*    modules={["SuggestView"]}*/}
        {/*    width="500px"*/}
        {/*    height="500px"*/}
        {/*    onLoad={loadSuggest}*/}
        {/*  />*/}
        {/*</YMaps>*/}

        <ym.YMaps query={YandexGeocodingService.getDefaultQuery()}>
          <YMap onLoadSuggest={loadSuggest} />
        </ym.YMaps>

      </div>
    </section>
  );
};
