import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import isNull from "lodash/isNull";
import { IconButton, Select } from "ui-kit";
import { LayoutSortingSelectStyles } from "./styles";
import styles from "./LayoutSorting.module.scss";

interface ISorting {
  value: string;
  label: string;
}

interface ILayoutSortingProps {
  isClickedDisplayLine?: boolean;
  onDisplayLine: () => void;
  onFirstPage: () => void;
}

export const LayoutSorting: React.FC<ILayoutSortingProps> = ({
  isClickedDisplayLine,
  onDisplayLine,
  onFirstPage,
}) => {
  const PRICE_UP = "по возрастанию цены";
  const PRICE_DOWN = "по убыванию цены";
  const options = [
    { value: "price", label: PRICE_UP },
    { value: "-price", label: PRICE_DOWN },
  ];
  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ISorting>({
    value: "price",
    label: PRICE_UP,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const path = router.asPath;

  const handleSorting = (selectedOption: ISorting) => {
    return { ...router.query, ordering: selectedOption.value, page: 1 };
  };

  const handleChange = (selectedOption: ISorting) => {
    if (isNull(selectedOption)) return;
    setSelectedOption(selectedOption);
    setIsSubmitting(prevState => !prevState);
  };

  const handleBlur = () => {
    setIsSelectOpened(false);
  };

  const handleFocus = () => {
    setIsSelectOpened(true);
  };

  useEffect(() => {
    if (!isSubmitting) return;

    async function fetchSorting(request) {
      await router.push({
        href: path,
        query: handleSorting(request),
      });
      onFirstPage();
    }
    setIsSubmitting(prevState => !prevState);

    fetchSorting(selectedOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  return (
    <div className={styles.LayoutSorting}>
      <div className={styles.Inner}>
        <div className={styles.SelectGroup}>
          <div className={styles.SelectGroupItem}>
            <span className={styles.SelectGroupItemLabel}>Сортировать</span>
            <Select
              className={classNames(styles.LayoutSortingSelectPrice, {
                [styles.LayoutSortingSelectPrice__active]: isSelectOpened,
              })}
              id="1"
              instanceId="1"
              options={options}
              styles={LayoutSortingSelectStyles}
              value={selectedOption}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
        </div>
        <div className={styles.ListingViewSwitcher}>
          <div className={styles.ListingViewSwitcherInner}>
            <div
              className={classNames(styles.ListingViewSwitcherPointer, {
                [styles.ListingViewSwitcherPointer__line]: isClickedDisplayLine,
              })}
            />
            <div className={styles.DisplayButtons}>
              <IconButton
                className={classNames(styles.DisplayButton, {
                  [styles.DisplayButton__line]: isClickedDisplayLine,
                })}
                typeIcon="DisplayLine"
                onClick={onDisplayLine}
              />
              <IconButton
                className={classNames(styles.DisplayButton, {
                  [styles.DisplayButton__line]: !isClickedDisplayLine,
                })}
                typeIcon="DisplayGrid"
                onClick={onDisplayLine}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
