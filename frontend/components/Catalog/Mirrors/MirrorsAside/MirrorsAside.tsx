import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { isEmpty, isNil } from "lodash";
import { Accordion, Button, Checkbox, IconButton } from "ui-kit";
import styles from "./MirrorsAside.module.scss";

interface ICheckedMirrors {
  category: string[];
  form: string[];
  frame_color: string[];
}

interface MirrorsAsideProps {
  onFirstPage: () => void;
}

export const MirrorsAside: React.FC<MirrorsAsideProps> = ({ onFirstPage }) => {
  const router = useRouter();
  const [checkedMirrors, setCheckedMirrors] = useState<ICheckedMirrors>({
    category: [],
    form: [],
    frame_color: [],
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
    form: ["Круглая", "Овальная", "Прямоугольная", "Фигурная"],
    frame_color: [
      "Античное золото",
      "Античное серебро",
      "Бронза",
      "Золото",
      "Латунь",
      "Серебро",
      "Хром",
    ],
  };

  useEffect(() => {
    if (!isSubmitting) return;

    const handleFilter = (request: ICheckedMirrors) => {
      const obj = {};
      const entries = Object.entries(request);
      entries.forEach(([key, value]) => {
        if (!isEmpty(value)) {
          obj[key] = value.join(",");
        }
      });

      if (!isEmpty(router.query.ordering)) {
        return { ...obj, ordering: router.query.ordering, page: 1 };
      } else {
        return { ...obj, page: 1 };
      }
    };

    async function fetchMirrorsFilter(request) {
      const response = await router.push({
        href: "/mirrors",
        query: handleFilter(request),
      });
      if (!isNil(response)) {
        onFirstPage();
        setIsSubmitting(prevState => !prevState);
      }
    }

    fetchMirrorsFilter(checkedMirrors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting, checkedMirrors, onFirstPage]);

  return (
    <aside className={styles.LayoutMirrorsAside}>
      <IconButton className={styles.FilterButton} typeIcon={"Filter"} />
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
        <Accordion title="Цвет рамы" active={true}>
          {asideMirrorsOptions.frame_color.map((label, index) => (
            <Checkbox
              className={styles.CheckboxItem}
              id={index.toString() + label}
              label={label}
              checkedBox={checkedMirrors}
              key={index}
              nameGroup="frame_color"
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