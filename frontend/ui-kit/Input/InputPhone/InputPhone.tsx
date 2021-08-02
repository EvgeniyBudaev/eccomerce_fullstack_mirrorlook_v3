import React, {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
} from "react";
import classNames from "classnames";
import { FieldError, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import styles from "./InputPhone.module.scss";

export interface IInputPhoneProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  error?: FieldError;
  control?: any;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const InputPhone = forwardRef(
  (
    { className, error, control, onBlur, onFocus, ...rest }: IInputPhoneProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <>
        <Controller
          render={({ field }) => (
            <NumberFormat
              className={classNames(className, styles.Input, {
                [styles.Input__error]: error,
              })}
              format="+7 (###) ###-##-##"
              allowEmptyFormatting
              mask="_"
              onFocus={onFocus}
              onBlur={onBlur}
              {...field}
            />
          )}
          name="phone_number"
          control={control}
        />
        {error && <div className={styles.ErrorMessage}>{error.message}</div>}
      </>
    );
  }
);

InputPhone.displayName = "FormInput";
