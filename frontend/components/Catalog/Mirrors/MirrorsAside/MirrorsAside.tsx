import { useRouter } from "next/router";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";
import { FilterBarMobile } from "components";
import { TRANSITION } from "constants/transition";
import { Accordion, Button, Checkbox, IconButton, Overlay } from "ui-kit";
import styles from "./MirrorsAside.module.scss";

export interface ICheckedMirrors {
  category: string[];
  form: string[];
  frame_color: string[];
}

interface IMirrorsAsideProps {
  onFirstPage: () => void;
}

export interface IAsideOption {
  option: {
    optionNameRu: string;
    optionNameOnBackend: string;
  };
  entities: string[];
}

export const MirrorsAside: React.FC<IMirrorsAsideProps> = ({ onFirstPage }) => {
  const [checkedMirrors, setCheckedMirrors] = useState<ICheckedMirrors>({
    category: [],
    form: [],
    frame_color: [],
  });
  const [isFilterBarMobile, setIsFilterBarMobile] = useState(false);
  const [needRequestIndicator, setNeedRequestIndicator] = useState(0);
  const nodeRef = useRef(null);
  const router = useRouter();

  const requestIndicator = useCallback(() => {
    setNeedRequestIndicator(needRequestIndicator + 1);
  }, [setNeedRequestIndicator, needRequestIndicator]);

  const handleFilterBarMobileOpen = () => {
    setIsFilterBarMobile(true);
  };

  const handleFilterBarMobileClose = () => {
    setIsFilterBarMobile(false);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    requestIndicator();
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

  const asideOptionsMirrors: IAsideOption[] = [
    {
      option: { optionNameRu: "Категория", optionNameOnBackend: "category" },
      entities: ["Венецианские зеркала", "Напольные зеркала"],
    },
    {
      option: { optionNameRu: "Форма", optionNameOnBackend: "form" },
      entities: ["Круглая", "Овальная", "Прямоугольная", "Фигурная"],
    },
    {
      option: { optionNameRu: "Цвет", optionNameOnBackend: "frame_color" },
      entities: [
        "Античное золото",
        "Античное серебро",
        "Бронза",
        "Золото",
        "Латунь",
        "Серебро",
        "Хром",
      ],
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const fetchMirrorsFilter = useCallback(
    (request: ICheckedMirrors) => {
      const response = router.push({
        href: "/mirrors",
        query: handleFilter(request),
      });
      if (!isNil(response)) {
        onFirstPage();
      }
    },
    [handleFilter, onFirstPage, router]
  );

  useEffect(() => {
    fetchMirrorsFilter(checkedMirrors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needRequestIndicator]);

  return (
    <aside className={styles.MirrorsAside}>
      <div className={styles.FilterMobile}>
        <div className={styles.FilterButtonLabelMobile}>Фильтры</div>
        <IconButton
          className={styles.FilterButtonMobile}
          typeIcon={"Filter"}
          onClick={handleFilterBarMobileOpen}
        />
      </div>
      <Overlay
        timeout={TRANSITION}
        onClick={handleFilterBarMobileClose}
        isActive={isFilterBarMobile}
      />
      <CSSTransition
        className="FilterBar"
        in={isFilterBarMobile}
        nodeRef={nodeRef}
        timeout={TRANSITION}
        unmountOnExit
      >
        <FilterBarMobile
          asideOptions={asideOptionsMirrors}
          checked={checkedMirrors}
          ref={nodeRef}
          onChangeCheckedBox={handleChangeCheckedBox}
          onClose={handleFilterBarMobileClose}
          onSubmit={handleSubmit}
        />
      </CSSTransition>
      <form className={styles.AsideFilterDesktop} onSubmit={handleSubmit}>
        {asideOptionsMirrors.map(item => (
          <Accordion
            key={item.option.optionNameRu}
            title={item.option.optionNameRu}
            active={true}
          >
            {item.entities.map((label, index) => (
              <Checkbox
                className={styles.CheckboxItem}
                id={index.toString() + label}
                label={label}
                checkedBox={checkedMirrors}
                key={index}
                nameGroup={item.option.optionNameOnBackend}
                onClick={(event, nameGroup) =>
                  handleChangeCheckedBox(event, nameGroup)
                }
              />
            ))}
          </Accordion>
        ))}
        <Button
          className={styles.MirrorsAsideButton}
          type="submit"
          onClick={() => {}}
        >
          Применить
        </Button>
      </form>
    </aside>
  );
};
