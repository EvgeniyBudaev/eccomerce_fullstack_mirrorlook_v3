import React from "react";
import classNames from "classnames";
import styles from "./Overlay.module.scss";

export interface IOverlayProps {
  className?: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const Overlay: React.FC<IOverlayProps> = ({
  className,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={classNames(styles.Overlay, className, {
        [styles.Overlay__active]: isActive,
      })}
      onClick={onClick}
    />
  );
};
