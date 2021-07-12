import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Accordion, Checkbox, IconButton } from "components/UI";
import { fetchMirrors } from "ducks/products/mirrors";
import styles from "./LayoutMirrorsAside.module.scss";

interface ICheckedMirrorsProps {
  category_id: string[];
  form: string[];
}

export const LayoutMirrorsAside: React.FC = () => {
  const dispatch = useDispatch();
  const mir = useSelector(state => state);
  console.log("[STATE]", mir);

  const [checkedMirrors, setCheckedMirrors] = useState<ICheckedMirrorsProps>({
    category_id: [],
    form: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
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

    handleSubmit();
  };

  const asideMirrorsOptions = {
    // categories: ["Венецианские зеркала", "Напольные зеркала"],
    category_id: ["1", "2"],
    form: ["Круглая", "Прямоугольная"],
  };

  useEffect(() => {
    if (!isSubmitting) return;

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    async function fetch(request) {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/catalog/mirrors/filter/`,
        request,
        config
      );
      console.log("[response][filter]", response);
      setIsSubmitting(false);
      dispatch(fetchMirrors(response.data.entities));
    }

    fetch(checkedMirrors);
  }, [isSubmitting, dispatch]);

  return (
    <aside className={styles.LayoutMirrorsAside}>
      <IconButton className={styles.FilterButton} type={"Filter"} />
      <form className={styles.AsideFilter}>
        <Accordion title="Категория" active={true}>
          {asideMirrorsOptions.category_id.map((label, index) => (
            <Checkbox
              className={styles.CheckboxItem}
              id={index.toString() + label}
              label={label}
              checkedBox={checkedMirrors}
              key={index}
              nameGroup="category_id"
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
      </form>
    </aside>
  );
};
