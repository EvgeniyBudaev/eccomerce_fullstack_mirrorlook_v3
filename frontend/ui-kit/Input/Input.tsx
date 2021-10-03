import React, {
  useState,
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
} from "react";
import classNames from "classnames";
import { FieldError } from "react-hook-form";
import styles from "./Input.module.scss";

export type InputType = "text" | "password" | "tel";

export interface IInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  name?: string;
  type?: string;
  error?: string;
  value?: string;
}

export const Input = forwardRef(
  (
    { className, name, type, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <>
        <input
          className={classNames(className, styles.Input, {
            [styles.Input__error]: error,
          })}
          name={name}
          type={type}
          ref={ref}
          {...rest}
        />
      </>
    );
  }
);

Input.displayName = "FormInput";
