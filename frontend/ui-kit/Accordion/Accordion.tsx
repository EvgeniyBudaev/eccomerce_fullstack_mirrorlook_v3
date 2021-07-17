import React, { useState } from "react";
import classNames from "classnames";
import { SlideDown } from "react-slidedown";
import { Icon } from "ui-kit";
import "react-slidedown/lib/slidedown.css";
import styles from "./Accordion.module.scss";

export interface IAccordionProps {
  title?: string;
  active?: boolean;
  children?: React.ReactNode;
}

export const Accordion: React.FC<IAccordionProps> = ({
  title = "",
  active = false,
  children = null,
}) => {
  const [isActive, setIsActive] = useState(active);

  const toggleAccordion = () => {
    setIsActive(prev => !prev);
  };

  return (
    <div
      className={classNames(
        styles.Accordion,
        isActive ? styles.Accordion__active : ""
      )}
    >
      <div className={styles.Header} onClick={toggleAccordion}>
        <div className={styles.HeaderTitle}>{title}</div>
        <Icon className={styles.HeaderIcon} type="ArrowDown" />
      </div>
      <SlideDown className={styles.ContentSlideDown}>
        {isActive && <div className={styles.Content}>{children}</div>}
      </SlideDown>
    </div>
  );
};
