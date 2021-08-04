import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";
import parsePhoneNumberFromString from "libphonenumber-js";
import NumberFormat from "react-number-format";
import { signup } from "ducks/account";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Button, FormField } from "ui-kit";
import FormFieldPhone from "ui-kit/FormField/FormFieldPhone";
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
  // first_name: yup
  //   .string()
  //   .matches(/^([^0-9]*)$/, "Имя не должно содержать цифры")
  //   .required("Укажите имя"),
  // last_name: yup
  //   .string()
  //   .matches(/^([^0-9]*)$/, "Имя не должно содержать цифры")
  //   .required("Укажите фамилию"),
  // email: yup
  //   .string()
  //   .required("Укажите Email")
  //   .email("Неверный email. Проверьте, правильно ли введён email"),
  // password: yup
  //   .string()
  //   .required("Укажите пароль")
  //   .min(8, "Пароль должен быть не менее 8 символов"),
});

export const Signup: React.FC = () => {
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [formData, setFormData] = useState<ISignupForm>({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    re_password: "",
  });
  const [isFocused, setIsFocused] = useState({
    first_name: false,
    last_name: false,
    phone_number: false,
    email: false,
    password: false,
    re_password: false,
  });
  const [value, setValue] = useState("");
  const [phoneKeyDown, setPhoneKeyDown] = useState("");
  const [inputPhoneRef, setInputPhoneRef] =
    useState<React.RefObject<HTMLInputElement>>();
  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const router = useRouter();
  const account = useTypedSelector(state => state.account);
  const { error } = account;
  const isAuthenticated = useTypedSelector(
    state => state.account.isAuthenticated
  );
  const watchAllFields = watch();
  const hasPhone = watch("phone_number");

  const normalizePhoneNumber = (value: string) => {
    return value.replace(/\D/g, "");
  };

  const onPhoneInput = (value: string) => {
    console.log("value", value);
    //console.log("value.length", value.length);
    //console.log("hasPhone", hasPhone);
    let inputNumbersValue = normalizePhoneNumber(value);
    console.log("inputNumbersValue", inputNumbersValue);
    let formattedInputValue = "";
    const selectionStart = inputPhoneRef.current.selectionStart;

    if (!inputNumbersValue) {
      return "";
    }

    // if (value.length !== selectionStart) {
    // }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === "9") {
        inputNumbersValue = "7" + inputNumbersValue;
      }

      const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
    }

    inputNumbersValue = formattedInputValue;
    return inputNumbersValue;
  };

  useEffect(() => {
    if (hasPhone) {
      const phoneInput = onPhoneInput(hasPhone);
      if (phoneKeyDown == "") {
        setValue(phoneKeyDown);
      } else {
        setValue(phoneInput);
      }
    }
  }, [hasPhone, phoneKeyDown]);

  const onSubmit = (data: ISignupForm) => {
    //console.log("[DATA]", data);
    // const phone_number = normalizePhoneNumber(data.phone_number);
    // if (data.password === data.re_password) {
    //   dispatch(
    //     signup(
    //       data.first_name,
    //       data.last_name,
    //       data.phone_number,
    //       data.email,
    //       data.password,
    //       data.re_password
    //     )
    //   );
    //   setIsAccountCreated(true);
    // }
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
    //console.log("watchAllFields", watchAllFields);
    if (watchAllFields[event.target.name] !== "") {
      setIsFocused({ ...isFocused, [event.target.name]: true });
    } else {
      setIsFocused({ ...isFocused, [event.target.name]: false });
    }
  };

  const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //console.log("[event][KeyDown]", event);
    let input = event.key;
    if (event.key === "Backspace" && normalizePhoneNumber(value).length <= 1) {
      input = "";
    }
    setPhoneKeyDown(input);
    return input;
  };

  const handleInputRef = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current && setInputPhoneRef(ref);
  };

  const handlePhonePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = event.clipboardData;
    console.log("hasPhone", hasPhone);
    console.log("event", event);
    const inputNumbersValue = hasPhone && normalizePhoneNumber(hasPhone);

    if (pasted) {
      console.log("pasted", pasted);
      const textPasted = pasted.getData("Text");
      if (/\D/g.test(textPasted)) {
        return inputNumbersValue;
      }
    }

    return inputNumbersValue;
  };

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
              {/*<FormField*/}
              {/*  label="Имя"*/}
              {/*  name="first_name"*/}
              {/*  register={register}*/}
              {/*  error={errors.first_name}*/}
              {/*  isFocused={isFocused.first_name}*/}
              {/*  onBlur={handleBlur}*/}
              {/*  onFocus={handleFocus}*/}
              {/*/>*/}
              {/*<FormField*/}
              {/*  label="Фамилия"*/}
              {/*  name="last_name"*/}
              {/*  register={register}*/}
              {/*  error={errors.last_name}*/}
              {/*  isFocused={isFocused.last_name}*/}
              {/*  onBlur={handleBlur}*/}
              {/*  onFocus={handleFocus}*/}
              {/*/>*/}

              {/*<FormField*/}
              {/*  label="Мобильный телефон"*/}
              {/*  name="phone_number"*/}
              {/*  type="tel"*/}
              {/*  register={register}*/}
              {/*  error={errors.phone_number}*/}
              {/*  isFocused={isFocused.phone_number}*/}
              {/*  onBlur={handleBlur}*/}
              {/*  onFocus={handleFocus}*/}
              {/*/>*/}

              <FormFieldPhone
                label="Мобильный телефон"
                name="phone_number"
                register={register}
                value={value}
                error={errors.phone_number}
                isFocused={isFocused.phone_number}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onKeyDown={handlePhoneKeyDown}
                onInputRef={handleInputRef}
                onPaste={handlePhonePaste}
              />

              {/*<NumberFormat format="+7 (###) ###-##-##" allowEmptyFormatting mask="_"/>*/}

              {/*<input*/}
              {/*  type="tel"*/}
              {/*  placeholder="0 000 000 00 00"*/}
              {/*  onChange={event => {*/}
              {/*    event.target.value = normalizePhoneNumber(event);*/}
              {/*  }}*/}
              {/*  autoComplete="cc-number"*/}
              {/*  inputMode="tel"*/}
              {/*/>*/}

              {/*<FormField*/}
              {/*  label="Электронная почта"*/}
              {/*  name="email"*/}
              {/*  register={register}*/}
              {/*  error={errors.email}*/}
              {/*  isFocused={isFocused.email}*/}
              {/*  onBlur={handleBlur}*/}
              {/*  onFocus={handleFocus}*/}
              {/*/>*/}
              {/*<FormField*/}
              {/*  label="Пароль"*/}
              {/*  name="password"*/}
              {/*  register={register}*/}
              {/*  error={errors.password}*/}
              {/*  isFocused={isFocused.password}*/}
              {/*  onBlur={handleBlur}*/}
              {/*  onFocus={handleFocus}*/}
              {/*/>*/}
              {/*<FormField*/}
              {/*  label="Подтверждение пароля"*/}
              {/*  name="re_password"*/}
              {/*  register={register}*/}
              {/*  error={errors.re_password}*/}
              {/*  isFocused={isFocused.re_password}*/}
              {/*  onBlur={handleBlur}*/}
              {/*  onFocus={handleFocus}*/}
              {/*/>*/}
              <div
                className={classNames(styles.ErrorResponse, {
                  [styles.ErrorResponse__error]: error,
                })}
              >
                {error &&
                error &&
                (!errors.password || !errors.email) &&
                error === "No active account found with the given credentials"
                  ? "Неверный email или пароль. Для быстрого восстановления пароля нажмите на ссылку «Забыли пароль?»"
                  : ""}
              </div>
            </div>
            <Button
              className={styles.SectionCenter_Button}
              typeButton="submit"
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
