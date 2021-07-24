import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { Accordion, Button, Checkbox, IconButton } from "ui-kit";
import styles from "./LayoutMirrorsAside.module.scss";

interface ICheckedMirrors {
  category: string[];
  form: string[];
}

export const LayoutMirrorsAside: React.FC = () => {
  const router = useRouter();
  const [checkedMirrors, setCheckedMirrors] = useState<ICheckedMirrors>({
    category: [],
    form: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(prevState => !prevState);
  };

  const handleChangeCheckedBox = (
    { target: { checked, value } },
    nameGroup
  ) => {
    if (checked) {
      setCheckedMirrors(prevState => ({
        ...prevState,
        [nameGroup]: [...prevState[nameGroup], value],
      }));
    } else {
      setCheckedMirrors(prevState => ({
        ...prevState,
        [nameGroup]: [...prevState[nameGroup].filter(x => x !== value)],
      }));
    }
  };

  const asideMirrorsOptions = {
    category: ["Венецианские зеркала", "Напольные зеркала"],
    form: ["Круглая", "Прямоугольная"],
  };

  useEffect(() => {
    if (!isSubmitting) return;

    const handleFilter = (request: ICheckedMirrors) => {
      const obj = {};
      const entries = Object.entries(request);
      entries.forEach(([key, value]) => {
        if (!isEmpty(value)) {
          obj[key] = value;
        }
      });

      return { ...obj };
    };

    async function fetchMirrorsFilter(request) {
      await router.push({
        href: "/mirrors",
        query: handleFilter(request),
      });
    }
    setIsSubmitting(prevState => !prevState);

    fetchMirrorsFilter(checkedMirrors);
  }, [isSubmitting, checkedMirrors, router]);

  return (
    <aside className={styles.LayoutMirrorsAside}>
      <IconButton className={styles.FilterButton} type={"Filter"} />
      <form className={styles.AsideFilter} onSubmit={handleSubmit}>
        <Accordion title="Категория" active={true}>
          {asideMirrorsOptions.category.map((label, index) => (
            <Checkbox
              className={styles.CheckboxItem}
              id={index.toString() + label}
              label={label}
              checkedBox={checkedMirrors}
              key={index}
              nameGroup="category"
              onClick={(event, nameGroup) =>
                handleChangeCheckedBox(event, nameGroup)
              }
            />
          ))}
        </Accordion>
        <Accordion title="Форма" active={true}>
          {asideMirrorsOptions.form.map((label, index) => (
            <Checkbox
              className={styles.CheckboxItem}
              id={index.toString() + label}
              label={label}
              checkedBox={checkedMirrors}
              key={index}
              nameGroup="form"
              onClick={(event, nameGroup) =>
                handleChangeCheckedBox(event, nameGroup)
              }
            />
          ))}
        </Accordion>
        <Button
          className={styles.LayoutMirrorsAsideButton}
          type="submit"
          onClick={() => {}}
        >
          Применить
        </Button>
      </form>
    </aside>
  );
};
