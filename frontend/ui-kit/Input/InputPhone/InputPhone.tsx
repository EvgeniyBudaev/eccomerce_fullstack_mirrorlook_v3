import React, {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
  useEffect,
} from "react";
import classNames from "classnames";
import { FieldError } from "react-hook-form";
import styles from "./InputPhone.module.scss";

export interface IInputPhoneProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  value?: string;
  error?: FieldError;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onInputRef?: (ref: React.RefObject<HTMLInputElement>) => void;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
}

export const InputPhone = forwardRef(
  (
    {
      className,
      value,
      error,
      onBlur,
      onFocus,
      onKeyDown,
      onInputRef,
      onPaste,
      ...rest
    }: IInputPhoneProps,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const inputRef = React.useRef(null);
    useEffect(() => {
      onInputRef(inputRef);
    }, [inputRef]);

    return (
      <>
        <input
          className={classNames(className, styles.Input, {
            [styles.Input__error]: error,
          })}
          value={value}
          type="tel"
          ref={inputRef}
          maxLength={18}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onPaste={onPaste}
          {...rest}
        />
        {error && <div className={styles.ErrorMessage}>{error.message}</div>}
      </>
    );
  }
);

InputPhone.displayName = "FormInput";
