import React, { ReactNode } from "react";
import classNames from "classnames";
import { Icon } from "components/UI";
import styles from "./Checkbox.module.scss";

interface ICheckbox {
  className?: string;
  id: string;
  label?: string;
  value?: string[];
  item: string;
  children?: ReactNode;
  handleChangeCheckedBox: (value: string[]) => void;
}

export const Checkbox: React.FC<ICheckbox> = ({
  className,
  id,
  label,
  value = [],
  item,
  children,
  handleChangeCheckedBox,
}) => {
  const handleChange = event => {
    const items = event.target.checked
      ? [...value, event.target.value]
      : value.filter(x => x !== event.target.value);
    handleChangeCheckedBox(items);
  };

  return (
    <div className={classNames(styles.CheckboxWrapper, className)}>
      <input
        className={styles.Checkbox}
        id={id}
        type="checkbox"
        checked={value.includes(item)}
        value={item}
        onChange={handleChange}
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
