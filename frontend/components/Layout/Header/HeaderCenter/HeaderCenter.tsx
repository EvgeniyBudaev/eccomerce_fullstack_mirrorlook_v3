import React from "react";
import { Logo } from "components";
import { HeaderIconsList } from "./HeaderIconsList";
import styles from "./HeaderCenter.module.scss";

export const HeaderCenter: React.FC = () => {
  return (
    <div className={styles.HeaderCenter}>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <Logo />
          <HeaderIconsList />
        </div>
      </div>
    </div>
  );
};
