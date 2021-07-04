import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./CheckboxGroup.module.scss";

export interface ICheckboxGroupProps {
  className?: string;
  children?: ReactNode;
}

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames(styles.CheckboxGroup, className)}>
      {children}
    </div>
  );
};
