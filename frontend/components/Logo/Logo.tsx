import Link from "next/link";
import React from "react";
import classNames from "classnames";
import LogoIcon from "./Logo.svg";
import styles from "./Logo.module.scss";

export interface ILogoProps {
  className?: string;
  isHomePage?: boolean;
}

export const Logo: React.FC<ILogoProps> = ({ className, isHomePage }) => {
  return (
    <Link href={"/"}>
      <a
        className={classNames(styles.Logo, className, {
          [styles.Logo__isHomePage]: isHomePage,
        })}
      >
        <LogoIcon />
      </a>
    </Link>
  );
};
