import React, {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
} from "react";
import classNames from "classnames";
import styles from "./TextArea.module.scss";

export interface ITextAreaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  className?: string;
  name?: string;
  type?: string;
  error?: string;
}

export const TextArea = forwardRef(
  (
    { className, name, error, ...rest }: ITextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <>
        <textarea
          className={classNames(className, styles.TextArea, {
            [styles.TextArea__error]: error,
          })}
          name={name}
          ref={ref}
          {...rest}
        />
      </>
    );
  }
);

TextArea.displayName = "FormTextArea";
