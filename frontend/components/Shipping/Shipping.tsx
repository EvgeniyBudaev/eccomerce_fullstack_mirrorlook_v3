import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  GeolocationControl,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ActionTypes } from "ducks/order";
import { setUnhandledClearError } from "ducks/unhandledError";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Button, Icon, FormField, Spinner } from "ui-kit";
import { ROUTES } from "constants/routes";
import PickMap from "../YMap/PickMap";
import GeoSearch from "../YMap/GeoSearch";
import styles from "./Shipping.module.scss";

export interface IShippingProps {
  searchState?: any;
  setSearchState?: any;
  mapState?: any;
  setMapState?: any;
}

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

export const Shipping: React.FC<IShippingProps> = ({
  searchState,
  setSearchState,
  mapState,
  setMapState,
}) => {
  const order = useTypedSelector(state => state.order);
  const cart = useTypedSelector(state => state.cart);
  const { hasMounted } = useMounted();
  const { shippingAddress } = hasMounted && order;
  const { id } = hasMounted && cart;
  const [address, setAddress] = useState(
    shippingAddress ? shippingAddress : ""
  );
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

  const onSubmit = (data: IShippingForm) => {
    console.log("data: ", data);
    console.log("address", address);
    dispatch({
      type: ActionTypes.FETCH_ORDER_SHIPPING_ADDRESS_SAVE,
      payload: {
        address: data.address,
        apartment: data.apartment,
        floor: data.floor,
        entrance: data.entrance,
        intercom: data.intercom,
        comment: data.comment,
      },
    });
    router.push(ROUTES.RECIPIENT);
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

  // const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   setAddress(event.target.value);
  // };

  const handleSearchAddress = (addressYMapSearched: string) => {
    console.log("addressYMapSearched", addressYMapSearched);
  };

  return (
    <section className={styles.Shipping}>
      <div className={styles.Step}>Шаг 1 из 3</div>
      <h2 className={styles.Title}>Где Вы хотите получить заказ?</h2>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.FormFieldGroup}>
          <GeoSearch
            style={{
              width: 400,
            }}
            state={searchState}
            onStateChange={setSearchState}
            onSearch={setMapState}
          />
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
        <div className={styles.Controls}>
          <Link
            href={{
              pathname: `/cart/${id}`,
            }}
          >
            <a className={styles.ControlsLink}>
              <Icon type="ArrowBack" />
              <div className={styles.ControlsText}>В корзину</div>
            </a>
          </Link>
          <Button
            className={styles.Button}
            typeButton="submit"
            onClick={() => {}}
          >
            Продолжить
          </Button>
        </div>
      </form>
      <div className={styles.Map}>
        <PickMap
          defaultState={{
            zoom: 9,
            center: [55.725146, 37.64693],
          }}
          style={{
            height: "95vh",
            marginLeft: 20,
            flexGrow: 1,
          }}
          state={mapState}
          onStateChange={setMapState}
          onPick={value => {
            setSearchState({
              value,
              showSuggestions: false,
              suggestions: [],
            });
          }}
          searchZoom={15}
          marker={
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "red",
              }}
            />
          }
        >
          <FullscreenControl options={{ float: "left" }} />
          <GeolocationControl options={{ float: "left" }} />
          <ZoomControl options={{ float: "left" }} />
        </PickMap>
      </div>
    </section>
  );
};
