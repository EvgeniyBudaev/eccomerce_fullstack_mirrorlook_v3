import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer as AlertContainer } from "react-toastify";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import * as searchApi from "api/search";
import { SearchProductsType } from "api/types/search";
import * as loadingActionCreators from "ducks/loading";
import { Icon, Overlay } from "ui-kit";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";
import { SearchProductList } from "./SearchProductList";
import styles from "./Search.module.scss";

export interface ISearchProps {
  className?: string;
  transition?: number;
  isHomePage?: boolean;
}

export const Search: React.FC<ISearchProps> = ({
  className,
  transition = 300,
  isHomePage,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [productList, setProductList] = useState<SearchProductsType>([]);
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const dispatch = useDispatch();
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedKeyword(event.target.value);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const fetchSearchItems = useCallback(
    (searchedKeyword: string) => {
      //dispatch(loadingActionCreators.setLoading());
      searchApi
        .fetchLiveProductsSearch({ searchedKeyword })
        .then(response => {
          setProductList(response.entities);
          dispatch(loadingActionCreators.unsetLoading());
        })
        .catch(error => {
          dispatch(loadingActionCreators.unsetLoading());
          const errorByStatus = getErrorByStatus(error);
          AlertError(errorByStatus.error.body);
        });
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    fetchSearchItems(searchedKeyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedKeyword]);

  return (
    <>
      <div
        className={classNames(styles.Search, className, {
          [styles.Search__active]: isActive,
          [styles.Search__isHomePage]: isHomePage,
        })}
      >
        <AlertContainer />
        <div className={styles.Form}>
          <div className={styles.SearchInputWrapper}>
            <input
              className={styles.SearchInput}
              autoComplete="off"
              name="search"
              placeholder="Поиск"
              type="text"
              value={searchedKeyword}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
          <Icon className={styles.SearchIcon} type="Search" />
        </div>
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
      <Overlay timeout={transition} isActive={isActive} onClick={handleBlur} />
    </>
  );
};
