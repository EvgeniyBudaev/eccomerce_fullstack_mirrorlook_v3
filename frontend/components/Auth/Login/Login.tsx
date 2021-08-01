import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";
import { login } from "ducks/account";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Button, Input } from "ui-kit";
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
  const [formData, setFormData] = useState<ILoginForm>({
    email: "",
    password: "",
  });
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
  const { email, password } = formData;
  const myState = useTypedSelector(state => state);
  const isAuthenticated = useTypedSelector(
    state => state.account.isAuthenticated
  );
  console.log("[login][myState]", myState);
  const watchAllFields = watch();

  const onSubmit = (data: ILoginForm) => {
    setFormData(data);
    dispatch(login(email, password));
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

  return (
    <div className={styles.Login}>
      <div className={styles.LoginSectionLeft}>
        <Image
          src={"/images/login-left-background.png"}
          alt=""
          height="636"
          width="475"
        />
      </div>
      <div className={styles.LoginSectionCenter}>
        <div className={styles.LoginSectionCenter_Content}>
          <h1 className={styles.LoginSectionCenterContent_Title}>Вход</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className={classNames(styles.TextField, {
                [styles.TextField__active]: isFocused.email,
                [styles.TextField__error]: errors,
              })}
            >
              <label className={styles.TextField_Label} htmlFor="email">
                Электронная почта
              </label>
              <Input
                className={classNames({
                  [styles.Input__active]: isFocused.email,
                  [styles.Input__error]: errors.email,
                })}
                {...register("email")}
                error={errors.email}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className={styles.RememberPassword}>
              <Link href={"/reset-password"}>
                <a>Забыли пароль?</a>
              </Link>
            </div>
            <div
              className={classNames(styles.TextField, {
                [styles.TextField__active]: isFocused.password,
                [styles.Input__error]: errors.password,
              })}
            >
              <label className={styles.TextField_Label} htmlFor="password">
                Пароль
              </label>
              <Input
                className={classNames({
                  [styles.Input__active]: isFocused.password,
                })}
                {...register("password")}
                error={errors.password}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <Button
              className={styles.LoginSectionCenter_Button}
              typeButton="submit"
              onClick={() => {}}
            >
              Войти
            </Button>
          </form>
          <div className={styles.LoginSectionCenter_Registration}>
            <span>Нет аккаунта?</span>
            <Link href={"/signup"}>
              <a>Зарегистрироваться</a>
            </Link>
          </div>
        </div>
        <Image
          src={"/images/login-center-background.png"}
          alt=""
          height="222"
          width="257"
        />
      </div>
      <div className={styles.LoginSectionRight}>
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
