import React from "react";
import { Logo } from "components";
import styles from "./HeaderTop.module.scss";

export const HeaderTop: React.FC = () => {
  return (
    <div className={styles.HeaderTop}>
      <Logo />
    </div>
  );
};
