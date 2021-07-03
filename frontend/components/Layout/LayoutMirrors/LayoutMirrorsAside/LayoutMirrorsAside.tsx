import React from "react";
import { IconButton } from "components/UI";
import styles from "./LayoutMirrorsAside.module.scss";

export const LayoutMirrorsAside: React.FC = () => {
  return (
    <aside className={styles.LayoutMirrorsAside}>
      <IconButton className={styles.FilterButton} type={"Filter"} />
      LayoutMirrorsAside
    </aside>
  );
};
