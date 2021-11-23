import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import * as yup from "yup";
import isEmpty from "lodash/isEmpty";
import isNull from "lodash/isNull";
import { ActionTypes } from "ducks/account";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Button, FormField, Spinner } from "ui-kit";
import { normalizePhoneNumber } from "utils/normalizePhoneNumber";
import { setUnhandledClearError } from "ducks/unhandledError";
import { useMounted } from "hooks/useMounted";
import styles from "./Signup.module.scss";

export interface ISignupForm {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  re_password: string;
}

const schema = yup.object().shape({
  first_name: yup
    .string()
    .matches(/^([^0-9]*)$/, "Имя не должно содержать цифры")
    .required("Укажите имя"),
  last_name: yup
    .string()
    .matches(/^([^0-9]*)$/, "Фамилия не должна содержать цифры")
    .required("Укажите фамилию"),
  phone_number: yup.string().required("Укажите номер телефона"),
  email: yup
    .string()
    .required("Укажите Email")
    .email("Неверный email. Проверьте, правильно ли введён email"),
  password: yup
    .string()
    .required("Укажите пароль")
    .min(8, "Пароль должен быть не менее 8 символов"),
  re_password: yup
    .string()
    .required("Укажите пароль")
    .min(8, "Пароль должен быть не менее 8 символов"),
});

export const Signup: React.FC = () => {
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isFocused, setIsFocused] = useState({
    first_name: false,
    last_name: false,
    phone_number: false,
    email: false,
    password: false,
    re_password: false,
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const router = useRouter();
  const { hasMounted } = useMounted();
  const account = useTypedSelector(state => state.account);
  const { isAuthenticated } = hasMounted && account;
  const loading = useTypedSelector(state => state.loading);
  const unhandledError = useTypedSelector(state => state.unhandledError);
  const { isLoading } = loading;
  const { error } = unhandledError;
  const watchAllFields = watch();

  const onSubmit = (data: ISignupForm) => {
    console.log("[DATA]", data);
    const phone_number_normalize = normalizePhoneNumber(data.phone_number);
    if (data.password === data.re_password) {
      setIsPasswordMatch(false);
      dispatch({
        type: ActionTypes.SIGNUP,
        payload: {
          first_name: data.first_name,
          last_name: data.last_name,
          phone_number: phone_number_normalize,
          email: data.email,
          password: data.password,
          re_password: data.re_password,
        },
      });
    } else {
      setIsPasswordMatch(true);
    }
  };

  useEffect(() => {
    if (!isNull(isAuthenticated) && isAuthenticated === false) {
      router.push("/activate");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

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

  const errorEmailMessage = (
    errorValidation: string,
    errorResponse: string
  ) => {
    if (!isEmpty(errorValidation) && !errorResponse) {
      return errorValidation;
    }
    if (!isNull(errorResponse) && !errors.email) {
      if (errorResponse === "user account с таким email уже существует.") {
        return "Пользователь с таким email уже существует";
      } else {
        return errorResponse;
      }
    }
  };

  const errorPasswordMessage = (message: string) => {
    if (message) {
      return message;
    }
    if (isPasswordMatch) {
      return "Пароли не совпадают";
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.Signup}>
      <div className={styles.SectionLeft}>
        <Image
          src={"/images/login-left-background.png"}
          alt=""
          height="636"
          width="475"
        />
      </div>
      <div className={styles.SectionCenter}>
        <div className={styles.SectionCenter_Content}>
          <h1 className={styles.SectionCenterContent_Title}>Регистрация</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.FormFieldGroup}>
              <FormField
                label="Имя"
                name="first_name"
                type="text"
                register={register}
                error={errors.first_name && errors.first_name.message}
                isFocused={isFocused.first_name}
                isRequired
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <FormField
                label="Фамилия"
                name="last_name"
                type="text"
                register={register}
                error={errors.last_name && errors.last_name.message}
                isFocused={isFocused.last_name}
                isRequired
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <FormField
                label="Мобильный телефон"
                name="phone_number"
                type="tel"
                register={register}
                error={errors.phone_number && errors.phone_number.message}
                isFocused={isFocused.phone_number}
                isRequired
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <FormField
                label="Электронная почта"
                name="email"
                type="text"
                register={register}
                error={errorEmailMessage(
                  errors.email?.message,
                  error?.response.data?.email[0]
                )}
                isFocused={isFocused.email}
                isRequired
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <FormField
                label="Пароль"
                name="password"
                type="password"
                register={register}
                error={errorPasswordMessage(errors.password?.message)}
                isFocused={isFocused.password}
                isRequired
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <FormField
                label="Подтверждение пароля"
                name="re_password"
                type="password"
                register={register}
                error={errorPasswordMessage(errors.re_password?.message)}
                isFocused={isFocused.re_password}
                isRequired
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            </div>
            <Button
              className={styles.SectionCenter_Button}
              type="submit"
              onClick={() => {}}
            >
              Зарегистрироваться
            </Button>
          </form>
          <div className={styles.SectionCenter_Registration}>
            <span>Есть аккаунт?</span>
            <Link href={"/login"}>
              <a>Войти</a>
            </Link>
          </div>
        </div>
        <div className={styles.SectionCenter_Image}>
          <Image
            src={"/images/login-center-background.png"}
            alt=""
            height="202"
            width="237"
          />
        </div>
      </div>
      <div className={styles.SectionRight}>
        <Image
          src={"/images/login-right-background.png"}
          alt=""
          height="482"
          width="454"
        />
      </div>
    </div>
  );
};
