import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { IconButton } from "ui-kit";
import styles from "./Pagination.module.scss";

export interface IPaginationProps {
  pages: number;
  onChange: (number) => void;
  onGoBack: (number) => void;
  onGoForward: (number) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  pages,
  onChange,
  onGoBack,
  onGoForward,
}) => {
  //Set number of pages
  const numberOfPages = [];
  const FIRST_PAGE = 1;

  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  // Current active button number
  const [currentButton, setCurrentButton] = useState(1);

  // Array of buttons what we see on the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    const dotsInitial = -100;
    const dotsLeft = -101;
    const dotsRight = -99;

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, 5, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ];
    } else if (currentButton > numberOfPages.length - 3) {
      // > 7
      const sliced = numberOfPages.slice(numberOfPages.length - 5);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 3);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 3);
    }

    setArrOfCurrButtons(tempNumberOfPages);

    if (
      currentButton === -100 ||
      currentButton === -99 ||
      currentButton === -101
    ) {
      return;
    }
    onChange(currentButton);
  }, [currentButton, setCurrentButton, pages]);

  const handlePageChange = item => {
    if (item !== currentButton) {
      setCurrentButton(item);
      onChange(currentButton);
    }
  };

  const handlePageGoBack = () => {
    setCurrentButton(prev => (prev <= 1 ? prev : prev - 1));
  };

  const handlePageGoForward = () => {
    setCurrentButton(prev => (prev >= pages ? prev : prev + 1));
    onGoForward(currentButton);
  };

  const handleItemNumberOrDots = (item: number) => {
    if (item === -100) {
      return "...";
    } else if (item === -101) {
      return " ...";
    } else if (item === -99) {
      return "... ";
    } else {
      return item;
    }
  };

  return (
    <div className={styles.Pagination}>
      <IconButton
        className={classNames(styles.PaginationArrowButton, {
          [styles.PaginationArrowButton__disabled]:
            currentButton === FIRST_PAGE,
        })}
        type="ArrowLeft"
        disabled={currentButton === FIRST_PAGE}
        onClick={handlePageGoBack}
      />

      {arrOfCurrButtons.map((item, index) => {
        return (
          <div
            key={index}
            className={classNames(styles.PaginationCurrentButton, {
              [styles.PaginationCurrentButton__active]: currentButton === item,
            })}
            onClick={() => handlePageChange(item)}
          >
            {handleItemNumberOrDots(item)}
          </div>
        );
      })}

      <IconButton
        className={classNames(styles.PaginationArrowButton, {
          [styles.PaginationArrowButton__disabled]: currentButton === pages,
        })}
        type="ArrowRight"
        disabled={currentButton === pages}
        onClick={handlePageGoForward}
      />
    </div>
  );
};
