import Link from "next/link";
import React from "react";
import { Logo } from "components";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterInner}>
        <div className={styles.FooterLogoWrapper}>
          <Logo className={styles.FooterLogo} />
        </div>
        <div className={styles.FooterCopy}>
          <div className={styles.FooterText}>Meta Home ©&nbsp;2021</div>
          <div className={styles.FooterText}>
            Webdesign by
            <Link href={"https://github.com/EvgeniyBudaev"}>
              <a className={styles.FooterLink}>&nbsp;Evgeniy Budaev</a>
            </Link>
          </div>
          <div className={styles.FooterText}>
            Developed by
            <Link href={"https://github.com/EvgeniyBudaev"}>
              <a className={styles.FooterLink}>&nbsp;Evgeniy Budaev</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
