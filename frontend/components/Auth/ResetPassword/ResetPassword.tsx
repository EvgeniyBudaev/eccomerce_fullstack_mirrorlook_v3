import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ROUTES } from "constants/routes";
import { ActionTypes } from "ducks/account";
import {
  accountSelector,
  loadingSelector,
  unhandledErrorSelector,
} from "ducks/selectors";
import { setUnhandledClearError } from "ducks/unhandledError";
import { useDispatch, useSelector } from "hooks";
import { Button, FormField, Spinner } from "ui-kit";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";
import styles from "./ResetPassword.module.scss";

interface IFormData {
  email: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Укажите Email")
    .email("Неверный email. Проверьте, правильно ли введён email"),
});

export const ResetPassword: React.FC = () => {
  const [isFocused, setIsFocused] = useState({
    email: false,
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading } = useSelector(loadingSelector);
  const { error } = useSelector(unhandledErrorSelector);
  const { isAuthenticated, isPasswordReset } = useSelector(accountSelector);
  const watchAllFields = watch();

  useEffect(() => {
    dispatch({
      type: ActionTypes.FETCH_NEW_PASSWORD_CLEAR,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      const errorByStatus = getErrorByStatus(error);
      AlertError(errorByStatus.error.body);
    }
  }, [error]);

  useEffect(() => {
    if (isPasswordReset) {
      router.push(ROUTES.CONFIRM_RESET_PASSWORD);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPasswordReset]);

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

  const onSubmit = (data: IFormData) => {
    dispatch({
      type: ActionTypes.FETCH_PASSWORD_RESET,
      payload: data.email,
    });
  };

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
      return "Неверный email.";
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.ResetPassword}>
      <AlertContainer />
      <div className={styles.SectionCenter}>
        <div className={styles.SectionCenter_Content}>
          <h1 className={styles.SectionCenterContent_Title}>Сброс пароля</h1>
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
            </div>
            <div className={styles.SectionCenter_Control}>
              <Button
                className={styles.SectionCenter_Button}
                type="submit"
                onClick={() => {}}
              >
                Cбросить пароль
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
