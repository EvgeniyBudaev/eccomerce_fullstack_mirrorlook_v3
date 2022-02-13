import React from "react";
import classNames from "classnames";
import styles from "./Alert.module.scss";

export enum AlertType {
  Error = "Error",
  Success = "Success",
  Warning = "Warning",
}

export interface IAlertProps {
  className?: string;
  description?: string;
  title?: string;
  type?: AlertType;
  onClose?: () => void;
}

export const Alert: React.FC<IAlertProps> = ({
  className,
  description,
  title,
}) => {
  return (
    <div className={classNames(styles.Alert, className)}>
      <div className={styles.AlertTitle}>{title}</div>
      <div className={styles.AlertDescription}>{description}</div>
    </div>
  );
};
