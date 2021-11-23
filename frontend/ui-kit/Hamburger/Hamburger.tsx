import React from "react";
import classNames from "classnames";
import styles from "./Hamburger.module.scss";

enum HamburgerColor {
  BLACK = "black",
  WHITE = "white",
}

type HamburgerColorType = "black" | "white";

export interface IHamburgerProps {
  className?: string;
  color?: HamburgerColorType;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const Hamburger: React.FC<IHamburgerProps> = ({
  className,
  color = HamburgerColor.BLACK,
  isActive = false,
  onClick,
}) => {
  return (
    <div className={classNames(styles.Hamburger, className)} onClick={onClick}>
      <div
        className={classNames(styles.Burger, {
          [styles.Burger__black]: color === HamburgerColor.BLACK,
          [styles.Burger__white]: color === HamburgerColor.WHITE,
          [styles.Burger__active]: isActive,
        })}
      />
    </div>
  );
};
