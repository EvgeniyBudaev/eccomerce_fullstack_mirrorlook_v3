import React, { ReactNode } from "react";
import classNames from "classnames";
import { Icon } from "components/UI";
import styles from "./Checkbox.module.scss";

interface IValue {
  category: string[];
  form: string[];
}

interface ICheckbox {
  className?: string;
  id: string;
  label: string;
  nameGroup: string;
  checkedBox: IValue;
  children?: ReactNode;
  onClick: (event, nameGroup) => void;
}

export const Checkbox: React.FC<ICheckbox> = ({
  className,
  id,
  label,
  nameGroup,
  checkedBox,
  children,
  onClick,
}) => {
  const handleChange = (event, nameGroup) => {
    event.stopPropagation();
    onClick(event, nameGroup);
  };

  return (
    <div className={classNames(styles.CheckboxWrapper, className)}>
      <input
        className={styles.Checkbox}
        id={id}
        type="checkbox"
        name={label}
        value={label}
        checked={checkedBox[label]}
        onChange={() => handleChange(event, nameGroup)}
      />
      {label && (
        <label className={styles.Label} htmlFor={id}>
          <Icon className={styles.CheckboxIcon} type="Checkbox" />
          {label}
        </label>
      )}
      {children && <span className={styles.Description}>{children}</span>}
    </div>
  );
};
