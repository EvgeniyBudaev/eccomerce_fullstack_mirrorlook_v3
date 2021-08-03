import React from "react";
import { FieldError, Control } from "react-hook-form";
import classNames from "classnames";
import { InputPhone } from "ui-kit/Input/InputPhone/InputPhone";
import { ISignupForm } from "components/Auth/Signup/Signup";
import styles from "./FormFieldPhone.module.scss";

export interface IFormFieldPhoneProps {
  label?: string;
  name?: string;
  register?: (Ref, RegisterOptions?) => { onChange; onBlur; name; ref };
  error?: FieldError;
  isFocused?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  control?: Control<ISignupForm>;
}

export const FormFieldPhone: React.FC<IFormFieldPhoneProps> = ({
  label,
  name,
  register,
  error,
  isFocused,
  onBlur,
  onFocus,
  control,
}) => {
  return (
    <div
      className={classNames(styles.FormField, {
        [styles.FormField__active]: isFocused,
      })}
    >
      <label className={styles.FormField_Label} htmlFor={name}>
        {label}
      </label>
      <InputPhone
        className={classNames({
          [styles.Input__active]: isFocused,
          [styles.Input__error]: error,
        })}
        {...register(name)}
        error={error}
        control={control}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
