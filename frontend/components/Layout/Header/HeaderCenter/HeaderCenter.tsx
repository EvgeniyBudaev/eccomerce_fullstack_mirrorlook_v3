import React from "react";
import { Logo } from "components";
import { Icon } from "ui-kit";
import styles from "./HeaderCenter.module.scss";

export const HeaderCenter: React.FC = () => {
  return (
    <div className={styles.HeaderCenter}>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <Logo />
          <Icon className={styles.Basket} type={"Basket"} />
        </div>
      </div>
    </div>
  );
};
