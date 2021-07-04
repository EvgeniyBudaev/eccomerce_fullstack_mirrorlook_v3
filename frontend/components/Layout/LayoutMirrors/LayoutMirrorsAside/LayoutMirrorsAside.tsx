import React, { useState } from "react";
import { Accordion, Checkbox, CheckboxGroup, IconButton } from "components/UI";
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
              label="Венецианские зеркала"
              isActive={isActive}
              onClick={handleCheckboxClick}
            />
          </div>
          <div className={styles.CheckboxItem}>
            <Checkbox
              label="Напольные зеркала"
              isActive={isActive}
              onClick={handleCheckboxClick}
            />
          </div>
        </Accordion>
        <Accordion title="Форма" active={true}>
          <div className={styles.CheckboxItem}>
            <Checkbox
              label="Круглая"
              isActive={isActive}
              onClick={handleCheckboxClick}
            />
          </div>
          <div className={styles.CheckboxItem}>
            <Checkbox
              label="Прямоугольная"
              isActive={isActive}
              onClick={handleCheckboxClick}
            />
          </div>
        </Accordion>
        <Accordion title="Группы" active={true}>
          <CheckboxGroup>
            <Checkbox
              label="Круглая"
              isActive={isActive}
              onClick={handleCheckboxClick}
            />
            <Checkbox
              label="Прямоугольная"
              isActive={isActive}
              onClick={handleCheckboxClick}
            />
          </CheckboxGroup>
        </Accordion>
      </form>
    </aside>
  );
};
