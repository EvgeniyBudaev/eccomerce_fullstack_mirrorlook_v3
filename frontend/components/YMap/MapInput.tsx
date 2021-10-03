import React, { CSSProperties } from "react";
import classNames from "classnames";
import styles from "./MapInput.module.scss";

export interface IMapInputProps {
  className?: string;
  error?: string;
  name?: string;
  style?: CSSProperties;
  type: string;
  value: string;
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
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const MapInput: React.FC<IMapInputProps> = ({
  className,
  error,
  name,
  style,
  type,
  value,
  onBlur,
  onChange,
  onFocus,
  ...inputProps
}) => {
  return (
    <>
      <input
        className={classNames(className, styles.Input, {
          [styles.Input__error]: error,
        })}
        autoComplete="off"
        name={name}
        style={style}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        {...inputProps}
      />
    </>
  );
};
