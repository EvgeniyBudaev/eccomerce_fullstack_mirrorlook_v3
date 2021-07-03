import React, { ReactNode } from "react";
import { LayoutMirrorsAside } from "./LayoutMirrorsAside/LayoutMirrorsAside";
import styles from "./LayoutMirrors.module.scss";

export interface ILayoutMirrorsProps {
  children?: ReactNode;
}

export const LayoutMirrors: React.FC<ILayoutMirrorsProps> = ({ children }) => {
  return (
    <section className={styles.LayoutMirrors}>
      <div className={styles.Row}>
        <h2 className={styles.Title}>Зеркала</h2>
        <span>1-13 из 600 товаров</span>
      </div>
      <div className={styles.Inner}>
        <LayoutMirrorsAside />
        <>{children}</>
      </div>
    </section>
  );
};
