import React, { useState } from "react";
import { FieldError } from "react-hook-form";
import classNames from "classnames";
import { Icon, Input, InputType } from "ui-kit";
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
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handlePasswordShow = () => {
    setIsShowPassword(prevState => !prevState);
  };

  const handleType = (type: string) => {
    if (type === "text") {
      return "text";
    }
    if (type === "password") {
      type = isShowPassword ? "text" : "password";
      return type;
    }
  };

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
        <>
          <Input
            className={classNames({
              [styles.Input__active]: isFocused,
              [styles.Input__error]: error,
            })}
            name={name}
            type={handleType(type)}
            error={error}
            {...register(name)}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {type === "password" && (
            <div className={styles.FormField_Visibility} onClick={handlePasswordShow}>
              {isShowPassword ? (
                <Icon type="VisibilityOff" />
              ) : (
                <Icon type="Visibility" />
              )}
            </div>
          )}
        </>
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
