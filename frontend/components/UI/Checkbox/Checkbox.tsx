import React, { ReactNode } from "react";
import classNames from "classnames";
import { Icon } from "components/UI";
import styles from "./Checkbox.module.scss";

interface ICheckbox {
  className?: string;
  label?: string;
  isActive?: boolean;
  children?: ReactNode;
  onClick: () => void;
}

export const Checkbox: React.FC<ICheckbox> = ({
  className,
  label,
  isActive = false,
  children,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div
      className={classNames(
        styles.CheckboxWrapper,
        className,
        isActive ? styles.CheckboxWrapper__active : ""
      )}
      onClick={handleClick}
    >
      <div className={styles.Checkbox}>
        <Icon type="Checkbox" />
      </div>
      {label && <label className={styles.Label}>{label}</label>}
      {children && <span className={styles.Description}>{children}</span>}
    </div>
  );
};
