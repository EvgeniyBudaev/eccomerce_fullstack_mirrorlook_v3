import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { isEmpty } from "lodash";
import { Accordion, Checkbox, IconButton } from "ui-kit";
import { fetchMirrors } from "ducks/products/mirrors";
import styles from "./LayoutMirrorsAside.module.scss";

interface ICheckedMirrors {
  category: string[];
  form: string[];
}

export const LayoutMirrorsAside: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const mir = useSelector(state => state);
  // console.log("[STATE]", mir);

  const [checkedMirrors, setCheckedMirrors] = useState<ICheckedMirrors>({
    category: [],
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
    category: ["Венецианские зеркала", "Напольные зеркала"],
    form: ["Круглая", "Прямоугольная"],
  };

  useEffect(() => {
    if (!isSubmitting) return;

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const handleFilter = (request: ICheckedMirrors) => {
      let str = "";
      const entries = Object.entries(request);
      entries.forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        str += isEmpty(value) ? "" : `${key}=${value}&`;
      });

      console.log("[STR]", str);

      return str;
    };

    async function fetch(request) {
      // const response = await axios.post(
      //   `http://127.0.0.1:8000/api/catalog/mirrors/filter/`,
      //   request,
      //   config
      // );
      // console.log("[response][filter]", response);
      // setIsSubmitting(false);
      // dispatch(fetchMirrors(response.data.entities));

      router.push({
        href: "/mirrors",
        search: handleFilter(request),
        // search: isEmpty(request.category)
        //   ? ""
        //   : `?category=${request.category.join(",")}`,
        //search: isEmpty(request.form) ? "" : `?form=${request.form.join(",")}`,
      });
    }

    fetch(checkedMirrors);
    console.log("[checkedMirrors form]", checkedMirrors.form.join(","));
    console.log("[checkedMirrors category]", checkedMirrors.category.join(","));
  }, [isSubmitting, dispatch, checkedMirrors]);

  return (
    <aside className={styles.LayoutMirrorsAside}>
      <IconButton className={styles.FilterButton} type={"Filter"} />
      <form className={styles.AsideFilter}>
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
      </form>
    </aside>
  );
};
