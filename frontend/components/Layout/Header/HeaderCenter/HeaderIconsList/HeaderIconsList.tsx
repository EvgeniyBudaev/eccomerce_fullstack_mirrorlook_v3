import Link from "next/link";
import React from "react";
import { Icon } from "ui-kit";
import styles from "./HeaderIconsList.module.scss";

export const HeaderIconsList: React.FC = () => {
  return (
    <div className={styles.HeaderIconsList}>
      <div className={styles.HeaderIconListItem}>
        <Link href={"/login"}>
          <a>
            <Icon className={styles.Icon} type={"User"} />
            <div className={styles.IconDescription}>Войти</div>
          </a>
        </Link>
      </div>
      <div className={styles.HeaderIconListItem}>
        <Link href={"/"}>
          <a>
            <Icon className={styles.Icon} type={"Basket"} />
            <div className={styles.IconDescription}>Корзина</div>
          </a>
        </Link>
      </div>
    </div>
  );
};
