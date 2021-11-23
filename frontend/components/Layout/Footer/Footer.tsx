import React from "react";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <p className={styles.FooterText}>©&nbsp;2021</p>
    </footer>
  );
};
