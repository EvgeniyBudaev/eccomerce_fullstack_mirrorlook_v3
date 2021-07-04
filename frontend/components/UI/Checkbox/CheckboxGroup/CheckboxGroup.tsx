import React, { ReactNode } from "react";
import styles from "./CheckboxGroup.module.scss";

export interface ICheckboxGroupProps {
  children?: ReactNode;
}

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({ children }) => {
  return (
    <div className={styles.CheckboxGroup}>
      <div className={styles.Item}>{children}</div>
    </div>
  );
};
