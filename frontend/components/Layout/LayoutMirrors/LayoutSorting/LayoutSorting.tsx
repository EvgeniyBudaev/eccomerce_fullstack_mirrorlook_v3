import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { LayoutSortingSelectStyles } from "./styles";
import styles from "./LayoutSorting.module.scss";

interface ISorting {
  value: string;
  label: string;
}

interface ILayoutSortingProps {
  onFirstPage: () => void;
}

export const LayoutSorting: React.FC<ILayoutSortingProps> = ({
  onFirstPage,
}) => {
  const PRICE_UP = "по возрастанию цены";
  const PRICE_DOWN = "по убыванию цены";
  const options = [
    { value: "price", label: PRICE_UP },
    { value: "-price", label: PRICE_DOWN },
  ];

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
    setSelectedOption(selectedOption);
    setIsSubmitting(prevState => !prevState);
  };

  useEffect(() => {
    if (!isSubmitting) return;

    async function fetchMirrorsSorting(request) {
      await router.push({
        href: path,
        query: handleSorting(request),
      });
      onFirstPage();
    }
    setIsSubmitting(prevState => !prevState);

    fetchMirrorsSorting(selectedOption);
  }, [isSubmitting, onFirstPage]);

  return (
    <div className={styles.LayoutSorting}>
      <div className={styles.Inner}>
        <div className={styles.SelectGroup}>
          <div className={styles.SelectGroupItem}>
            <span className={styles.SelectGroupItemLabel}>Сортировать по</span>
            <Select
              className={styles.LayoutSortingSelectPrice}
              styles={LayoutSortingSelectStyles}
              id="LayoutSorting-SelectPrice"
              instanceId="LayoutSorting-SelectPrice"
              value={selectedOption}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
