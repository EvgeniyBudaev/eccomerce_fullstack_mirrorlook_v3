import React, { useEffect } from "react";
import classNames from "classnames";
import styles from "./Marker.module.scss";

export interface IMarkerProps {
  className?: string;
}

export const Marker: React.FC<IMarkerProps> = ({ className }) => {
  useEffect(() => {}, []);

  return (
    <div className={classNames(styles.Marker, className)}>
      <div className={styles.Header}>
        <div className={styles.Circle}></div>
      </div>
      <div className={styles.Footer}></div>
    </div>
  );
};
