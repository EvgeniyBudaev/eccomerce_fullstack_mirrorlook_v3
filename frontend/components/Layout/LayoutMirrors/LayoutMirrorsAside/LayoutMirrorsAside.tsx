import React, { useState } from "react";
import { Accordion, Checkbox, IconButton } from "components/UI";
import styles from "./LayoutMirrorsAside.module.scss";

export const LayoutMirrorsAside: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCheckboxClick = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={styles.LayoutMirrorsAside}>
      <IconButton className={styles.FilterButton} type={"Filter"} />
      <form className={styles.AsideFilter}>
        <Accordion title="Категории">Контент</Accordion>
        <Accordion title="Форма">Контент</Accordion>
        <Checkbox
          label="Венецианские зеркала"
          isActive={isActive}
          onClick={handleCheckboxClick}
        />
      </form>
    </aside>
  );
};
