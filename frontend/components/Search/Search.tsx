import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { Icon, Overlay } from "ui-kit";
import * as searchApi from "api/search";
import { SearchProductsType } from "api/types/search";
import * as loadingActionCreators from "ducks/loading";
import { SearchProductList } from "./SearchProductList";
import styles from "./Search.module.scss";

export interface ISearchProps {
  className?: string;
  transition?: number;
}

export const Search: React.FC<ISearchProps> = ({
  className,
  transition = 500,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [productList, setProductList] = useState<SearchProductsType>([]);
  const [requestIndicator, setRequestIndicator] = useState(0);
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const dispatch = useDispatch();
  const nodeRef = useRef<HTMLDivElement>(null);

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
      dispatch(loadingActionCreators.setLoading());
      searchApi
        .fetchLiveProductsSearch({ searchedKeyword })
        .then(response => {
          setProductList(response.entities);
          dispatch(loadingActionCreators.unsetLoading());
        })
        .catch(error => {
          console.log("Ошибка", error);
          dispatch(loadingActionCreators.unsetLoading());
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
              autoComplete="off"
              name="search"
              placeholder="Искать товары"
              type="text"
              value={searchedKeyword}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
          <Icon className={styles.SearchIcon} type="Search" />
        </form>
        <CSSTransition
          className="SearchDropDownWindow"
          in={isActive}
          nodeRef={nodeRef}
          timeout={transition}
          unmountOnExit
        >
          <div ref={nodeRef}>
            <SearchProductList productList={productList} />
          </div>
        </CSSTransition>
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
