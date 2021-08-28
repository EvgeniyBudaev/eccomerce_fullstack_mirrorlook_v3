import Link from "next/link";
import React from "react";
import { Icon } from "ui-kit";
import { useTypedSelector } from "hooks/useTypedSelector";
import styles from "./HeaderIconsList.module.scss";

export const HeaderIconsList: React.FC = () => {
  const account = useTypedSelector(state => state.account);
  //console.log("[HeaderIconsList][account]", account);

  return (
    <div className={styles.HeaderIconsList}>
      <div className={styles.HeaderIconListItem}>
        <Link href={"/login"}>
          <a>
            <Icon className={styles.Icon} type={"User"} />
            <div className={styles.IconDescription}>
              {account.isAuthenticated ? account.user.first_name : "Войти"}
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.HeaderIconListItem}>
        <Link href={"/cart"}>
          <a>
            <Icon className={styles.Icon} type={"Basket"} />
            <div className={styles.IconDescription}>Корзина</div>
          </a>
        </Link>
      </div>
    </div>
  );
};
