import React from "react";
import classNames from "classnames";
import styles from "./Pagination.module.scss";

export interface IPaginationPageButtonProps {
  className?: string;
  page: number;
  isActive: boolean;
  onClick: (page: number) => void;
}

export const PaginationPageButton: React.FC<IPaginationPageButtonProps> = ({
  className,
  page,
  isActive,
  onClick,
}) => {
  const handleClick = () => {
    onClick(page);
  };

  return (
    <div
      onClick={handleClick}
      className={classNames(
        styles.PaginationPageButton,
        {
          [styles.PaginationPageButton_active]: isActive,
        },
        className
      )}
    >
      {page}
    </div>
  );
};
