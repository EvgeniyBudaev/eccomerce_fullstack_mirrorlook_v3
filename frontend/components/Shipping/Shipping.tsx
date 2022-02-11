import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer as AlertContainer } from "react-toastify";
import {
  GeolocationControl,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import { ROUTES } from "constants/routes";
import { Marker } from "components";
import { ActionTypes } from "ducks/order";
import { setUnhandledClearError } from "ducks/unhandledError";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Button, Icon, FormField, FormFieldYMap, Spinner } from "ui-kit";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";
import PickMap, { PickMapState } from "../YMap/PickMap";
import { GeoSearchSuggestion } from "../YMap/GeoSearch";
import styles from "./Shipping.module.scss";

export interface IShippingProps {
  searchState?: {
    value: string;
    suggestions: GeoSearchSuggestion[];
    showSuggestions: boolean;
  };
  setSearchState?: React.Dispatch<
    React.SetStateAction<{
      value: string;
      suggestions: GeoSearchSuggestion[];
      showSuggestions: boolean;
    }>
  >;
  mapState?: PickMapState;
  setMapState?: React.Dispatch<React.SetStateAction<PickMapState>>;
}

export interface IShippingForm {
  address?: string;
  apartment?: string;
  floor?: string;
  entrance?: string;
  intercom?: string;
  comment?: string;
}

export const Shipping: React.FC<IShippingProps> = ({
  searchState,
  setSearchState,
  mapState,
  setMapState,
}) => {
  const order = useTypedSelector(state => state.order);
  const cart = useTypedSelector(state => state.cart);
  const { hasMounted } = useMounted();
  const { shipping_address } = hasMounted && order;
  const { id } = hasMounted && cart;
  const [address, setAddress] = useState(
    shipping_address ? shipping_address : searchState.value
  );
  const [isFocused, setIsFocused] = useState({
    address: true,
    apartment: false,
    floor: false,
    entrance: false,
    intercom: false,
    comment: false,
  });
  const [isDragging, setDragging] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IShippingForm>({
    defaultValues: {
      address: order.shipping_address?.address ?? "",
      apartment: order.shipping_address?.apartment ?? null,
      floor: order.shipping_address?.floor ?? null,
      entrance: order.shipping_address?.entrance ?? null,
      intercom: order.shipping_address?.intercom ?? null,
      comment: order.shipping_address?.comment ?? "",
    },
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const loading = useTypedSelector(state => state.loading);
  const unhandledError = useTypedSelector(state => state.unhandledError);
  const { isLoading } = loading;
  const { error } = unhandledError;
  const watchAllFields = watch();

  useEffect(() => {
    if (error) {
      const errorByStatus = getErrorByStatus(error);
      AlertError(errorByStatus.error.body);
    }
  }, [error]);

  const onSubmit = (data: IShippingForm) => {
    dispatch({
      type: ActionTypes.FETCH_ORDER_SHIPPING_ADDRESS_SAVE,
      payload: {
        address: searchState.value,
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
    setAddress(searchState.value);
    if (!isEmpty(searchState.value)) {
      setIsFocused({ ...isFocused, ["address"]: true });
    } else {
      setIsFocused({ ...isFocused, ["address"]: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchState.value]);

  useEffect(() => {
    return () => {
      dispatch(setUnhandledClearError());
    };
  }, [dispatch]);

  useEffect(() => {
    const keys = Object.keys(watchAllFields);
    keys.forEach(key => handleInitSetFocused(key));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInitSetFocused = (name: string) => {
    if (!isEmpty(watchAllFields[name])) {
      const newState = Object.assign(isFocused, { [name]: true });
      setIsFocused(prevState => {
        return { ...prevState, ...newState };
      });
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused({ ...isFocused, [event.target.name]: true });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!isEmpty(watchAllFields[event.target.name])) {
      setIsFocused({ ...isFocused, [event.target.name]: true });
    } else {
      setIsFocused({ ...isFocused, [event.target.name]: false });
    }
  };

  const handleFocusYMap = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused({ ...isFocused, [event.target.name]: true });
  };

  const handleBlurYMap = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!isEmpty(searchState.value)) {
      setIsFocused({ ...isFocused, [event.target.name]: true });
    } else {
      setIsFocused({ ...isFocused, [event.target.name]: false });
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <section className={styles.Shipping}>
      <AlertContainer />
      <div className={styles.Step}>Шаг 1 из 3</div>
      <h2 className={styles.Title}>Где Вы хотите получить заказ?</h2>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.FormContent}>
          <div className={styles.FormFieldGroup}>
            <FormFieldYMap
              error={
                isEmpty(address) &&
                "Пожалуйста, выберите адрес на карте или из выпадающего списка"
              }
              label="Адрес"
              name="address"
              searchState={searchState}
              type="text"
              isFocused={isFocused.address}
              onBlur={handleBlurYMap}
              onFocus={handleFocusYMap}
              onStateChange={setSearchState}
              onSearch={setMapState}
            />
          </div>
          <div
            className={classNames(
              styles.FormFieldGroup,
              styles.FormFieldCouple
            )}
          >
            <FormField
              className={styles.FormFieldGroupItem}
              error={errors.apartment && errors.apartment.message}
              label="Квартира"
              name="apartment"
              register={register}
              type="text"
              isFocused={isFocused.apartment}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              className={styles.FormFieldGroupItem}
              error={errors.floor && errors.floor.message}
              label="Этаж"
              name="floor"
              register={register}
              type="text"
              isFocused={isFocused.floor}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </div>
          <div
            className={classNames(
              styles.FormFieldGroup,
              styles.FormFieldCouple
            )}
          >
            <FormField
              className={styles.FormFieldGroupItem}
              error={errors.entrance && errors.entrance.message}
              label="Подъезд"
              name="entrance"
              register={register}
              type="text"
              isFocused={isFocused.entrance}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              className={styles.FormFieldGroupItem}
              error={errors.intercom && errors.intercom.message}
              label="Домофон"
              name="intercom"
              register={register}
              type="text"
              isFocused={isFocused.intercom}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </div>
          <div className={styles.FormFieldGroup}>
            <FormField
              className={styles.TextField}
              error={errors.comment && errors.comment.message}
              label="Комментарий для курьера"
              name="comment"
              register={register}
              type="textarea"
              isFocused={isFocused.comment}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </div>
        </div>
        <div className={styles.FormFooter}>
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
              type="submit"
              isDisabled={isEmpty(address)}
              onClick={() => {}}
            >
              Продолжить
            </Button>
          </div>
        </div>
      </form>
      <div className={styles.Map}>
        <PickMap
          defaultState={{
            zoom: 9,
            center: [55.725146, 37.64693],
          }}
          style={{
            height: "85vh",
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
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
          searchZoom={15}
          marker={<Marker isDragging={isDragging} />}
        >
          <FullscreenControl options={{ float: "left" }} />
          <GeolocationControl options={{ float: "left" }} />
          <ZoomControl options={{ float: "left" }} />
        </PickMap>
      </div>
    </section>
  );
};
