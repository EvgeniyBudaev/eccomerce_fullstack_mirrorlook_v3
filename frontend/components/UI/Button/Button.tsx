import React, { DOMAttributes } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: (e?: React.MouseEvent) => void;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classNames(styles.Button, className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
