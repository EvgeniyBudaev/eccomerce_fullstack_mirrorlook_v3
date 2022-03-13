import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { SearchProductsType } from "api/types/search";
import { ROUTES } from "constants/routes";
import { loadingSelector } from "ducks/selectors";
import { useKey, useSelector } from "hooks";
import { IConsole } from "types/console";
import { IMirror } from "types/mirror";
import { Spinner } from "ui-kit";
import { newGuid } from "utils/guid";
import { SearchListItem } from "../SearchListItem";
import styles from "./SearchProductList.module.scss";

type FocusDirection = "up" | "down";

interface IFocusedOption {
  focusedOption: IProductsByCatalog | IMirror | IConsole | null;
}

export interface IProductsByCatalog {
  catalog: string;
  entities: IConsole[] | IMirror[];
}

export interface ISearchProductListProps {
  productList: SearchProductsType;
}

export const SearchProductList: React.FC<ISearchProductListProps> = ({
  productList,
}) => {
  const router = useRouter();
  const { isLoading } = useSelector(loadingSelector);
  const [list, setList] = useState<(IProductsByCatalog | IConsole | IMirror)[]>(
    []
  );
  const options = list;
  const [focusedOption, setFocusedOption] = useState<IFocusedOption>({
    focusedOption: null,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const arrowUpPressed = useKey("ArrowUp");
  const arrowDownPressed = useKey("ArrowDown");
  const enterPressed = useKey("Enter");

  useEffect(() => {
    setFocusedOption({ focusedOption: options[selectedIndex] });
  }, [options, selectedIndex]);

  const groupProductsByCatalog = useCallback(
    (productList: SearchProductsType): IProductsByCatalog[] => {
      const catalog: string[] = Array.from(
        new Set(productList.map(item => item.catalog))
      );
      return catalog.map(item => {
        const catalog = item ? { catalog: item } : null;

        return {
          ...catalog,
          id: newGuid(),
          entities: productList.filter(product => product.catalog === item),
        };
      });
    },
    []
  );

  useEffect(() => {
    if (!isEmpty(productList)) {
      const items = [
        ...groupProductsByCatalog(productList).slice(0, 2),
        ...productList.slice(0, 5),
      ];
      setList(items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList]);

  const focusOption = (direction: FocusDirection) => {
    if (!options.length) return;
    let nextFocus = selectedIndex;

    if (direction === "up") {
      nextFocus = selectedIndex > 0 ? selectedIndex - 1 : options.length - 1;
      setSelectedIndex(nextFocus);
    } else if (direction === "down") {
      nextFocus = selectedIndex !== options.length - 1 ? selectedIndex + 1 : 0;
      setSelectedIndex(nextFocus);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowUp":
        focusOption("up");
        break;
      case "ArrowDown":
        focusOption("down");
        break;
      case "Enter":
        "product_slug" in focusedOption.focusedOption
          ? router.push(
              `${ROUTES.MIRRORS}/${focusedOption.focusedOption.product_slug}`
            )
          : router.push(`${ROUTES.MIRRORS}?inStock=В+наличии&page=1`);
        break;
    }
  };

  useEffect(() => {
    if (arrowUpPressed.keyup) {
      handleKeyDown(arrowUpPressed.event);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed.keydown) {
      handleKeyDown(arrowDownPressed.event);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrowDownPressed]);

  useEffect(() => {
    if (enterPressed.enter) {
      handleKeyDown(enterPressed.event);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enterPressed]);

  const handleMouseOver = (
    event: React.MouseEvent<HTMLLIElement>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <ul className={styles.SearchProductList}>
        {!isEmpty(list) &&
          list.map((item, index) => (
            <SearchListItem
              index={index}
              item={item}
              key={index}
              aria-pressed={index === selectedIndex}
              isActive={index === selectedIndex}
              onMouseOver={handleMouseOver}
            />
          ))}
      </ul>
    </>
  );
};
