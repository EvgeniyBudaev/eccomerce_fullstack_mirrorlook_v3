import React, { DOMAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./Button.module.scss";

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
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
      className={classNames("Button", className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
