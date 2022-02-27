import React, { useState } from "react";
import classNames from "classnames";
import { Icon, Input, TextArea } from "ui-kit";
import InputPhone from "../Input/InputPhone";
import styles from "./FormField.module.scss";

export type FormFieldType = "text" | "password" | "tel" | "textarea";

export interface IFormFieldProps {
  className?: string;
  error?: string;
  label?: string;
  name?: string;
  type: FormFieldType;
  register?: (Ref, RegisterOptions?) => { onChange; onBlur; name; ref };
  isFocused?: boolean;
  isRequired?: boolean;
  onBlur?: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => void;
}

export const FormField: React.FC<IFormFieldProps> = ({
  className,
  label,
  name,
  type,
  register,
  error,
  isFocused,
  isRequired,
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
      className={classNames(styles.FormField, className, {
        [styles.FormField__active]: isFocused,
      })}
    >
      {type === "text" && (
        <>
          <Input
            className={classNames(styles.Input, {
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
          {error && <div className={styles.ErrorMessage}>{error}</div>}
        </>
      )}

      {type === "password" && (
        <>
          <Input
            className={classNames(styles.Input, {
              [styles.Input__active]: isFocused,
              [styles.Input__error]: error,
            })}
            autoComplete="on"
            name={name}
            type={handleType(type)}
            error={error}
            {...register(name)}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <div
            className={styles.FormField_Visibility}
            onClick={handlePasswordShow}
          >
            {isShowPassword ? (
              // <Icon type="VisibilityOff" />
              <Icon type="Star" />
            ) : (
              <Icon type="Star" />
              // <Icon type="Visibility" />
            )}
          </div>
          {error && <div className={styles.ErrorMessage}>{error}</div>}
        </>
      )}

      {type === "tel" && (
        <>
          <InputPhone
            className={classNames(styles.Input, {
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
          {error && <div className={styles.ErrorMessage}>{error}</div>}
        </>
      )}

      {type === "textarea" && (
        <TextArea
          className={classNames(styles.Input, {
            [styles.Input__active]: isFocused,
            [styles.Input__error]: error,
          })}
          name={name}
          error={error}
          {...register(name)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}

      <label className={styles.FormField_Label} htmlFor={name}>
        {label}
        {isRequired && (
          <span className={styles.FormField_LabelRequired}> *</span>
        )}
      </label>
    </div>
  );
};
