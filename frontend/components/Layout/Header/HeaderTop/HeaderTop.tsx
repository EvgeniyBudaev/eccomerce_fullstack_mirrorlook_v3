import Link from "next/link";
import React from "react";
import styles from "./HeaderTop.module.scss";

export const HeaderTop: React.FC = () => {
  return (
    <div className={styles.HeaderTop}>
      <div className={styles.Info}>
        <div className={styles.InfoInner}>
          <div className={styles.InfoLeft}>
            <Link href={"/"}>
              <a className={styles.Text}>О компании</a>
            </Link>
            <Link href={"/"}>
              <a className={styles.Text}>Доставка и оплата</a>
            </Link>
          </div>
          <div className={styles.InfoRight}>
            <Link href={"mailto:mirrorlook@gmail.com"}>
              <a className={styles.Text}>mirrorlook@gmail.com</a>
            </Link>
            <Link href={"tel:+74999999999"}>
              <a className={styles.Text}>+7 (499) 999-99-99</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
