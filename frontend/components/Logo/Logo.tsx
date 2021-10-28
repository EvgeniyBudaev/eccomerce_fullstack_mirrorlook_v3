import Link from "next/link";
import React from "react";
import classNames from "classnames";
import LogoIcon from "./Logo.svg";
import styles from "./Logo.module.scss";

export interface ILogoProps {
  className?: string;
}

export const Logo: React.FC<ILogoProps> = ({ className }) => {
  return (
    <Link href={"/"}>
      <a className={classNames(styles.Logo, className)}>
        <LogoIcon />
      </a>
    </Link>
  );
};
