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
        <Accordion title="Категории" active={true}>
          <div className={styles.CheckboxItem}>
            <Checkbox
              className={styles.CheckboxItem}
              label="Венецианские зеркала"
              isActive={isActive}
              onClick={handleCheckboxClick}
            />
          </div>
          <div className={styles.CheckboxItem}>
            <Checkbox
              className={styles.CheckboxItem}
              label="Напольные зеркала"
              isActive={isActive}
              onClick={handleCheckboxClick}
            />
          </div>
        </Accordion>
        <Accordion title="Форма" active={true}>
          <div className={styles.CheckboxItem}>
            <Checkbox
              className={styles.CheckboxItem}
              label="Круглая"
              isActive={isActive}
              onClick={handleCheckboxClick}
            />
          </div>
          <div className={styles.CheckboxItem}>
            <Checkbox
              className={styles.CheckboxItem}
              label="Прямоугольная"
              isActive={isActive}
              onClick={handleCheckboxClick}
            />
          </div>
        </Accordion>
        <Accordion title="Группы" active={true}>
          <Checkbox
            className={styles.CheckboxItem}
            label="Круглая"
            isActive={isActive}
            onClick={handleCheckboxClick}
          />
          <Checkbox
            className={styles.CheckboxItem}
            label="Прямоугольная"
            isActive={isActive}
            onClick={handleCheckboxClick}
          />
        </Accordion>
      </form>
    </aside>
  );
};
