import React from "react";
import { FieldError } from "react-hook-form";
import classNames from "classnames";
import { Input, InputType } from "ui-kit";
import InputPhone from "../Input/InputPhone";
import styles from "./FormField.module.scss";

export interface IFormFieldProps {
  label?: string;
  name?: string;
  type?: InputType;
  register?: (Ref, RegisterOptions?) => { onChange; onBlur; name; ref };
  error?: FieldError;
  isFocused?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const FormField: React.FC<IFormFieldProps> = ({
  label,
  name,
  type,
  register,
  error,
  isFocused,
  onBlur,
  onFocus,
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
      {type !== "tel" && (
        <Input
          className={classNames({
            [styles.Input__active]: isFocused,
            [styles.Input__error]: error,
          })}
          name={name}
          type={type}
          error={error}
          {...register(name)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      {type === "tel" && (
        <InputPhone
          className={classNames({
            [styles.Input__active]: isFocused,
            [styles.Input__error]: error,
          })}
          name={name}
          type={type}
          error={error}
          {...register(name)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
    </div>
  );
};
