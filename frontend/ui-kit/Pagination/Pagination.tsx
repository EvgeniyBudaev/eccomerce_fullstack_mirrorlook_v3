import React from "react";
import ReactPaginate from "react-paginate";
import classNames from "classnames";
import { Icon } from "ui-kit";

export interface IPaginationProps {
  className?: string;
  initialPage?: number;
  marginPagesDisplayed?: number;
  pagesCount: number;
  pageRangeDisplayed?: number;
  onChange: ({ selected }: { selected: number }) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  className,
  initialPage,
  marginPagesDisplayed = 3,
  pagesCount,
  pageRangeDisplayed = 3,
  onChange,
}) => {
  return (
    <ReactPaginate
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pagesCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onChange}
      containerClassName={classNames("Pagination", className)}
      activeClassName={"Pagination__active"}
      pageLinkClassName={"Pagination__link"}
      breakLinkClassName={"Pagination__link"}
      nextLinkClassName={"Pagination__link"}
      previousLinkClassName={"Pagination__link"}
      pageClassName={"Pagination__item"}
      breakClassName={"Pagination__item"}
      nextClassName={"Pagination__item"}
      previousClassName={"Pagination__item"}
      previousLabel={
        <>
          <Icon type="ArrowLeft" />
        </>
      }
      nextLabel={
        <>
          <Icon type="ArrowRight" />
        </>
      }
    />
  );
};
