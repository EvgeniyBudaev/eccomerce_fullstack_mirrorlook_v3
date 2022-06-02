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
import styles from "./NewPassword.module.scss";

interface IFormData {
  new_password: string;
  re_new_password: string;
}

const schema = yup.object().shape({
  new_password: yup
    .string()
    .required("Укажите пароль")
    .min(8, "Пароль должен быть не менее 8 символов"),
  re_new_password: yup
    .string()
    .required("Укажите пароль")
    .min(8, "Пароль должен быть не менее 8 символов"),
});

export const NewPassword: React.FC = () => {
  const [isFocused, setIsFocused] = useState({
    new_password: false,
    re_new_password: false,
  });
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
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
  const { isAuthenticated, isPasswordChanged } = useSelector(accountSelector);
  const watchAllFields = watch();
  const uid = router.asPath.split("/")[4];
  const token = router.asPath.split("/")[5];

  useEffect(() => {
    if (isAuthenticated) {
      router.push(ROUTES.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  useEffect(() => {
    if (error) {
      const errorByStatus = getErrorByStatus(error);
      AlertError(errorByStatus.error.body);
    }
  }, [error]);

  useEffect(() => {
    return () => {
      dispatch(setUnhandledClearError());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isPasswordChanged) {
      router.push(ROUTES.LOGIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPasswordChanged]);

  const onSubmit = (data: IFormData) => {
    if (data.new_password === data.re_new_password) {
      setIsPasswordMatch(false);
      dispatch({
        type: ActionTypes.FETCH_NEW_PASSWORD,
        payload: {
          uid: uid,
          token: token,
          new_password: data.new_password,
          re_new_password: data.re_new_password,
        },
      });
    } else {
      setIsPasswordMatch(true);
    }
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
    <div className={styles.NewPassword}>
      <AlertContainer />
      <div className={styles.SectionCenter}>
        <div className={styles.SectionCenter_Content}>
          <h1 className={styles.SectionCenterContent_Title}>Новый пароль</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.FormFieldGroup}>
              <FormField
                label="Новый пароль"
                name="new_password"
                type="password"
                register={register}
                error={errorPasswordMessage(errors.new_password?.message)}
                isFocused={isFocused.new_password}
                isRequired
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <FormField
                label="Подтверждение нового пароля"
                name="re_new_password"
                type="password"
                register={register}
                error={errorPasswordMessage(errors.re_new_password?.message)}
                isFocused={isFocused.re_new_password}
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
                Изменить пароль
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
