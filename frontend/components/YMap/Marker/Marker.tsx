import React, { useEffect } from "react";
import classNames from "classnames";
import styles from "./Marker.module.scss";

export interface IMarkerProps {
  className?: string;
  isDragging?: boolean;
}

export const Marker: React.FC<IMarkerProps> = ({ className, isDragging }) => {
  useEffect(() => {}, []);

  return (
    <div
      className={classNames(styles.Marker, className, {
        [styles.Marker__dragging]: isDragging,
      })}
    >
      <div className={styles.Header}>
        <div className={styles.Circle}></div>
      </div>
      <div className={styles.Footer}></div>
    </div>
  );
};
