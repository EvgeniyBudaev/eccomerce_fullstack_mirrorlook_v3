import React from "react";
import classNames from "classnames";
import styles from "./Tabs.module.scss";

export interface ITab {
  id: string | number;
  label?: string | number;
}

export interface ITabsProps {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  onClick?: (id: string | number) => void;
}

export const Tabs: React.FC<ITabsProps> = ({
  className,
  selectedId,
  tabs,
  onClick,
}) => {
  return (
    <div className={classNames(styles.Tabs, className)}>
      {tabs &&
        tabs.map(tab => (
          <div
            className={classNames(styles.Tab, {
              [styles.Tab__selected]: tab.id === selectedId,
            })}
            key={tab.id}
            onClick={() => onClick(tab.id)}
          >
            <div
              className={classNames(styles.TabLabel, {
                [styles.TabLabel__selected]: tab.id === selectedId,
              })}
            >
              {tab.label}
            </div>
          </div>
        ))}
    </div>
  );
};
