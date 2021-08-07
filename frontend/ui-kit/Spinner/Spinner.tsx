import React from "react";
import { Icon } from "ui-kit";
import styles from "./Spinner.module.scss";

export const Spinner: React.FC = () => {
  return (
    <div className={styles.Spinner}>
      <Icon type="Spinner" />
    </div>
  );
};
