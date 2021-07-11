import React from "react";
import classNames from "classnames";
import { IconButton } from "components/UI";
import { PaginationPageButton } from "./PaginationPageButton";
import styles from "./Pagination.module.scss";

export interface IPaginationProps {
  className?: string;
  currentPage: number;
  pageSize: number;
  totalItemsCount: number;
  onChange: (pageNumber: number) => void;
  onGoBack: () => void;
  onGoForward: () => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  className,
  totalItemsCount,
  pageSize,
  currentPage,
  onChange,
  onGoBack,
  onGoForward,
}) => {
  const DISPLAY_ITEMS_COUNT = 4;
  const FIRST_PAGE_NUMBER = 1;

  const pagesCount = Math.max(Math.ceil(totalItemsCount / pageSize), 1);

  const firstPage = FIRST_PAGE_NUMBER;
  const lastPage = pagesCount;

  const showSpaceAfterFirstPage =
    pagesCount > DISPLAY_ITEMS_COUNT && currentPage - firstPage - 1 > 2;

  const showSpaceBeforeLastPage =
    pagesCount > DISPLAY_ITEMS_COUNT && lastPage - currentPage - 1 > 2;

  const showLastPage = lastPage > firstPage;

  const firstMiddlePage = showSpaceAfterFirstPage
    ? showSpaceBeforeLastPage
      ? currentPage - 2
      : lastPage - DISPLAY_ITEMS_COUNT + 3
    : firstPage + 1;

  const lastMiddlePage = showSpaceBeforeLastPage
    ? showSpaceAfterFirstPage
      ? currentPage + 2
      : firstPage + DISPLAY_ITEMS_COUNT - 3
    : lastPage - 1;

  const handleClick = (page: number) => {
    if (page !== currentPage) {
      onChange(page);
    }
  };

  return (
    <>
      {pagesCount !== 1 && (
        <div className={classNames(className, styles.Pagination)}>
          <IconButton
            className={classNames(styles.PaginationArrowButton, {
              "Pagination-ArrowButton__disabled": currentPage === firstPage,
            })}
            type="ArrowDown"
            disabled={currentPage === firstPage}
            onClick={onGoBack}
          />

          <PaginationPageButton
            className={classNames({
              "Pagination-PageButton__with-right-space":
                showSpaceAfterFirstPage,
            })}
            page={1}
            isActive={currentPage === 1}
            onClick={handleClick}
          />

          {range(firstMiddlePage, lastMiddlePage).map(page => (
            <PaginationPageButton
              key={page}
              page={page}
              isActive={currentPage === page}
              onClick={handleClick}
            />
          ))}

          {showLastPage && (
            <PaginationPageButton
              className={classNames({
                "Pagination-PageButton__with-left-space":
                  showSpaceBeforeLastPage,
              })}
              page={lastPage}
              isActive={currentPage === lastPage}
              onClick={handleClick}
            />
          )}

          <IconButton
            className={classNames(styles.PaginationArrowButton, {
              "Pagination-ArrowButton__disabled": currentPage === lastPage,
            })}
            type="ArrowDown"
            disabled={currentPage === lastPage}
            onClick={onGoForward}
          />
        </div>
      )}
    </>
  );
};

const range = (start: number, stop: number) =>
  Array.from({ length: stop - start + 1 }, (_, i) => start + i);
