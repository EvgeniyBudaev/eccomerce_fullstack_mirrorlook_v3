import React from "react";
import { FieldError } from "react-hook-form";
import classNames from "classnames";
import { Input } from "ui-kit";
import styles from "./FormField.module.scss";

export interface IFormFieldProps {
  labelTitle?: string;
  name?: string;
  register?: (Ref, RegisterOptions?) => { onChange; onBlur; name; ref };
  error?: FieldError;
  isFocused?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const FormField: React.FC<IFormFieldProps> = ({
  labelTitle,
  name,
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
        {labelTitle}
      </label>
      <Input
        className={classNames({
          [styles.Input__active]: isFocused,
          [styles.Input__error]: error,
        })}
        {...register(name)}
        error={error}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
