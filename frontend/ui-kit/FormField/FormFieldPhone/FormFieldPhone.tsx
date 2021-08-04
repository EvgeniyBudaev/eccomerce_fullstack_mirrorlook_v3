import React from "react";
import { FieldError } from "react-hook-form";
import classNames from "classnames";
import { InputPhone } from "ui-kit/Input/InputPhone/InputPhone";
import styles from "./FormFieldPhone.module.scss";

export interface IFormFieldPhoneProps {
  label?: string;
  name?: string;
  register?: (Ref, RegisterOptions?) => { onChange; onBlur; name; ref };
  value?: string;
  error?: FieldError;
  isFocused?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onInputRef?: (ref: React.RefObject<HTMLInputElement>) => void;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
}

export const FormFieldPhone: React.FC<IFormFieldPhoneProps> = ({
  label,
  name,
  register,
  value,
  error,
  isFocused,
  onBlur,
  onFocus,
  onKeyDown,
  onInputRef,
  onPaste,
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
        value={value}
        error={error}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onInputRef={onInputRef}
        onPaste={onPaste}
      />
    </div>
  );
};
