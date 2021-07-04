import React from "react";
import { Accordion, IconButton } from "components/UI";
import styles from "./LayoutMirrorsAside.module.scss";

export const LayoutMirrorsAside: React.FC = () => {
  return (
    <aside className={styles.LayoutMirrorsAside}>
      <IconButton className={styles.FilterButton} type={"Filter"} />
      <form className={styles.AsideFilter}>
        <Accordion title="Категории">Контент</Accordion>
        <Accordion title="Форма">Контент</Accordion>
      </form>
    </aside>
  );
};
