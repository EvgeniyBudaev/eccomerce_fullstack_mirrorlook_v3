import React, { DOMAttributes } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  children,
  disabled = false,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classNames(styles.Button, className)}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
