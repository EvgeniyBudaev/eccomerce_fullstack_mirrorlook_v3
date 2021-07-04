import React, { useState } from "react";
import { Accordion, Checkbox, IconButton } from "components/UI";
import styles from "./LayoutMirrorsAside.module.scss";

export const LayoutMirrorsAside: React.FC = () => {
  const [checked, setChecked] = useState([]);
  console.log("checked", checked);

  const handleChangeCheckedBox = value => {
    setChecked(value);
  };

  const asideMirrorsOptions = {
    categories: ["Венецианские зеркала", "Напольные зеркала"],
    forms: ["Круглая", "Прямоугольная"],
  };

  return (
    <aside className={styles.LayoutMirrorsAside}>
      <IconButton className={styles.FilterButton} type={"Filter"} />
      <form className={styles.AsideFilter}>
        <Accordion title="Категория" active={true}>
          {asideMirrorsOptions.categories.map((item, index) => (
            <Checkbox
              className={styles.CheckboxItem}
              id={index.toString() + item}
              label={item}
              value={checked}
              item={item}
              key={index}
              handleChangeCheckedBox={handleChangeCheckedBox}
            />
          ))}
        </Accordion>
        <Accordion title="Форма" active={true}>
          {asideMirrorsOptions.forms.map((item, index) => (
            <Checkbox
              className={styles.CheckboxItem}
              id={index.toString() + item}
              label={item}
              value={checked}
              item={item}
              key={index}
              handleChangeCheckedBox={handleChangeCheckedBox}
            />
          ))}
        </Accordion>
      </form>
    </aside>
  );
};
