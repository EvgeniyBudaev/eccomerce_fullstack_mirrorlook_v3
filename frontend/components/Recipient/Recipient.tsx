import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Button, Icon, FormField, Spinner } from "ui-kit";
import { ActionTypes } from "ducks/order";
import { setUnhandledClearError } from "ducks/unhandledError";
import { ROUTES } from "constants/routes";
import { normalizePhoneNumber } from "utils/normalizePhoneNumber";
import styles from "./Recipient.module.scss";

export interface IRecipientForm {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
}

export interface IRecipientIsFocused {
  first_name: boolean;
  last_name: boolean;
  phone_number: boolean;
  email: boolean;
}

const schema = yup.object().shape({
  first_name: yup
    .string()
    .matches(/^([^0-9]*)$/, "Имя не должно содержать цифры")
    .required("Укажите имя"),
  last_name: yup
    .string()
    .matches(/^([^0-9]*)$/, "Имя не должно содержать цифры")
    .required("Укажите фамилию"),
  phone_number: yup.string().required("Укажите номер телефона"),
  email: yup
    .string()
    .required("Укажите Email")
    .email("Неверный email. Проверьте, правильно ли введён email"),
});

export const Recipient: React.FC = () => {
  const [isFocused, setIsFocused] = useState<IRecipientIsFocused>({
    first_name: false,
    last_name: false,
    phone_number: false,
    email: false,
  });
  const account = useTypedSelector(state => state.account);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IRecipientForm>({
    defaultValues: {
      first_name: account.isAuthenticated ? account.user.first_name : "",
      last_name: account.isAuthenticated ? account.user.last_name : "",
      phone_number: account.isAuthenticated ? account.user.phone_number : "",
      email: account.isAuthenticated ? account.user.email : "",
    },
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const loading = useTypedSelector(state => state.loading);
  const unhandledError = useTypedSelector(state => state.unhandledError);
  const { isLoading } = loading;
  const { error } = unhandledError;
  const watchAllFields = watch();

  const onSubmit = (data: IRecipientForm) => {
    console.log("[DATA]", data);
    const phone_number_normalize = normalizePhoneNumber(data.phone_number);
    dispatch({
      type: ActionTypes.FETCH_ORDER_RECIPIENT_SAVE,
      payload: {
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: phone_number_normalize,
        email: data.email,
      },
    });
    router.push(ROUTES.ORDER);
  };

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

  if (isLoading) return <Spinner />;

  return (
    <section className={styles.Recipient}>
      <div className={styles.Step}>Шаг 2 из 3</div>
      <h2 className={styles.Title}>Получатель</h2>
      <div className={styles.Inner}>
        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.FormFieldGroup}>
            <FormField
              className={styles.FormFieldGroupItem}
              label="Имя"
              name="first_name"
              type="text"
              register={register}
              error={errors.first_name && errors.first_name.message}
              isFocused={isFocused.first_name}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              className={styles.FormFieldGroupItem}
              label="Фамилия"
              name="last_name"
              type="text"
              register={register}
              error={errors.last_name && errors.last_name.message}
              isFocused={isFocused.last_name}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              className={styles.FormFieldGroupItem}
              label="Мобильный телефон"
              name="phone_number"
              type="tel"
              register={register}
              error={errors.phone_number && errors.phone_number.message}
              isFocused={isFocused.phone_number}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <FormField
              className={styles.FormFieldGroupItem}
              label="Электронная почта"
              name="email"
              type="text"
              register={register}
              error={
                (errors.email && errors.email.message) ||
                (!errors.email &&
                  error &&
                  error.response.data.email &&
                  error.response.data.email[0] ===
                    "user account с таким email уже существует.")
                  ? "Пользователь с таким email уже существует"
                  : ""
              }
              isFocused={isFocused.email}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </div>
          <div className={styles.Controls}>
            <Link
              href={{
                pathname: ROUTES.SHIPPING,
              }}
            >
              <a className={styles.ControlsLink}>
                <Icon type="ArrowBack" />
                <div className={styles.ControlsText}>Назад</div>
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
        <div className={styles.Info}>
          <Icon className={styles.InfoIcon} type="Attention" />
          <div className={styles.InfoText}>
            <div className={styles.InfoTitle}>
              Указывайте
              <br />
              реальные данные
            </div>
            <div>
              У вас могут попросить паспорт,
              <br />
              прежде чем вручить оплаченный заказ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};