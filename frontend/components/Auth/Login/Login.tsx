import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LOGIN } from "ducks/account";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Button, FormField, Spinner } from "ui-kit";
import styles from "./Login.module.scss";

interface ILoginForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Укажите Email")
    .email("Неверный email. Проверьте, правильно ли введён email"),
  password: yup
    .string()
    .required("Укажите пароль")
    .min(8, "Пароль должен быть не менее 8 символов"),
});

export const Login: React.FC = () => {
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const router = useRouter();
  const loading = useTypedSelector(state => state.loading);
  const unhandledError = useTypedSelector(state => state.unhandledError);
  const isAuthenticated = useTypedSelector(
    state => state.account.isAuthenticated
  );
  const { isLoading } = loading;
  const { error } = unhandledError;
  const watchAllFields = watch();

  const onSubmit = (data: ILoginForm) => {
    dispatch({
      type: LOGIN,
      payload: {
        email: data.email,
        password: data.password,
      },
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

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

  return (
    <div className={styles.Login}>
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
          <h1 className={styles.SectionCenterContent_Title}>Вход</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.FormFieldGroup}>
              <FormField
                label="Электронная почта"
                name="email"
                type="text"
                register={register}
                error={errors.email && errors.email.message}
                isFocused={isFocused.email}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <div className={styles.RememberPassword}>
                <Link href={"/reset-password"}>
                  <a>Забыли пароль?</a>
                </Link>
              </div>
              <FormField
                label="Пароль"
                name="password"
                type="password"
                register={register}
                error={
                  (errors.password && errors.password.message) ||
                  ((!errors.password || !errors.email) &&
                  error &&
                  error.response.data.detail ===
                    "No active account found with the given credentials"
                    ? "Неверный email или пароль. Для быстрого восстановления пароля нажмите на ссылку «Забыли пароль?»"
                    : "")
                }
                isFocused={isFocused.password}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            </div>
            <Button
              className={styles.SectionCenter_Button}
              typeButton="submit"
              onClick={() => {}}
            >
              Войти
            </Button>
          </form>
          <div className={styles.SectionCenter_Registration}>
            <span>Нет аккаунта?</span>
            <Link href={"/signup"}>
              <a>Зарегистрироваться</a>
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
