import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer as AlertContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ROUTES } from "constants/routes";
import { ActionTypes } from "ducks/account";
import { setUnhandledClearError } from "ducks/unhandledError";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Button, FormField, Spinner } from "ui-kit";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";
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

  useEffect(() => {
    if (error) {
      const errorByStatus = getErrorByStatus(error);
      AlertError(errorByStatus.error.body);
    }
  }, [error]);

  const onSubmit = (data: ILoginForm) => {
    dispatch({
      type: ActionTypes.LOGIN,
      payload: {
        email: data.email,
        password: data.password,
      },
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.back();
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

  const errorMessage = (
    errorValidationMessage: string,
    errorResponseMessage: string
  ) => {
    if (errorValidationMessage) {
      return errorValidationMessage;
    }
    if (
      !errorValidationMessage &&
      errorResponseMessage ===
        "No active account found with the given credentials"
    ) {
      return "Неверный email или пароль. Для быстрого восстановления пароля нажмите на ссылку «Забыли пароль?»";
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <section className={styles.Login}>
      <AlertContainer />
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
                error={errorMessage(
                  errors.email?.message,
                  error?.response?.data?.detail
                )}
                isFocused={isFocused.email}
                isRequired
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
                error={errorMessage(
                  errors.password?.message,
                  error?.response.data?.detail
                )}
                isFocused={isFocused.password}
                isRequired
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            </div>
            <div className={styles.SectionCenter_Control}>
              <Button
                className={styles.SectionCenter_Button}
                type="submit"
                onClick={() => {}}
              >
                Войти
              </Button>
            </div>
          </form>
          <div className={styles.SectionCenter_Registration}>
            <span>Нет аккаунта?</span>
            <Link href={ROUTES.SIGNUP}>
              <a>Зарегистрироваться</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
