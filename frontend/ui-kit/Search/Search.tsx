import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { isEmpty } from "lodash";
import { Button, Overlay } from "ui-kit";
import * as searchApi from "api/search";
import { IConsole } from "types/console";
import { IMirror } from "types/mirror";
import styles from "./Search.module.scss";

export interface ISearchProps {
  className?: string;
  transition?: number;
}

type SearchProductList = IMirror[] | IConsole[];

export const Search: React.FC<ISearchProps> = ({
  className,
  transition = 500,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [productList, setProductList] = useState<SearchProductList>([]);
  const [requestIndicator, setRequestIndicator] = useState(0);
  const [searchedKeyword, setSearchedKeyword] = useState("");
  console.log("productList", productList);
  const handleIndicatorIncrease = () => {
    setRequestIndicator(requestIndicator => requestIndicator + 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedKeyword(event.target.value);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleIndicatorIncrease();
  };

  const fetchSearchItems = useCallback(
    (searchedKeyword: string) => {
      searchApi
        .fetchSearch({ searchedKeyword })
        .then(response => {
          console.log("data", response);
          setProductList(response.entities);
        })
        .catch(error => {
          console.log("Ошибка", error);
        });
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    fetchSearchItems(searchedKeyword);
    // eslint-disable-next-line
  }, [fetchSearchItems, requestIndicator, searchedKeyword]);

  return (
    <>
      <div
        className={classNames(styles.Search, className, {
          [styles.Search__active]: isActive,
        })}
      >
        <form className={styles.Form} onSubmit={handleSubmit}>
          <div className={styles.SearchInputWrapper}>
            <input
              className={styles.SearchInput}
              type="text"
              placeholder="Искать товары"
              value={searchedKeyword}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
          <Button
            className={styles.SearchButton}
            type="submit"
            onClick={() => {}}
          >
            Найти
          </Button>
        </form>
        <div className={styles.SearchDropDown}>
          <ul className={styles.SearchProductList}>
            {/*{productList.map(product => (*/}
            {/*    <li className={styles.SearchProductItem} key={product.id}>*/}
            {/*      {product.title}*/}
            {/*    </li>*/}
            {/*  ))}*/}
          </ul>
        </div>
      </div>
      <Overlay
        className="SearchOverlay"
        timeout={transition}
        isActive={isActive}
        onClick={handleBlur}
      />
    </>
  );
};
