import React, { ReactNode } from "react";
import styles from "./AccordionGroup.module.scss";

export interface IAccordionGroupProps {
  label?: string;
  children?: ReactNode;
}

export const AccordionGroup: React.FC<IAccordionGroupProps> = ({
  label = "",
  children,
}) => {
  return (
    <div className={styles.AccordionGroup}>
      {label && <div className={styles.Label}>{label}</div>}
      {children}
    </div>
  );
};
