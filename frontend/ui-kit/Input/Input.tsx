import React, {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
} from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

export interface IInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  autoComplete?: string;
  name?: string;
  type?: string;
  error?: string;
  value?: string;
}

export const Input = forwardRef(
  (
    { className, autoComplete, name, type, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <>
        <input
          className={classNames(className, styles.Input, {
            [styles.Input__error]: error,
          })}
          autoComplete={autoComplete}
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
