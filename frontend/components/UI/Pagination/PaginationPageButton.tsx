import React, { useRef } from "react";
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
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = e => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    buttonRef.current.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);

    onClick(page);
  };

  return (
    <div
      className={classNames(
        styles.PaginationPageButton,
        {
          [styles.PaginationPageButton_active]: isActive,
        },
        className
      )}
      ref={buttonRef}
      onClick={handleClick}
    >
      {page}
    </div>
  );
};
