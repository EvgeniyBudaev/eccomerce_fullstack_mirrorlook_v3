import React from "react";
import Link from "next/link";
import LogoIcon from "./Logo.svg";
import styles from "./Logo.module.scss";

export const Logo: React.FC = () => {
  return (
    <Link href={"/"}>
      <a className={styles.Logo}>
        <LogoIcon />
      </a>
    </Link>
  );
};
