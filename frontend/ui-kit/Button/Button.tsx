import React, { DOMAttributes, useRef } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export type ButtonType = "button" | "submit";

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  type?: ButtonType;
  onClick?: (e?: React.MouseEvent) => void;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  children,
  disabled = false,
  type = "button",
  onClick,
  ...rest
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = e => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    buttonRef.current.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);

    onClick(e);
  };

  return (
    <button
      className={classNames(styles.Button, className, {
        [styles.Button__disabled]: disabled,
      })}
      disabled={disabled}
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};
