import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { SearchProductsType } from "api/types/search";
import { loadingSelector } from "ducks/selectors";
import { useKey, useKeyPress, useSelector } from "hooks";
import { IConsole } from "types/console";
import { IMirror } from "types/mirror";
import { Spinner } from "ui-kit";
import { SearchCatalogListItem } from "../SearchCatalogListItem";
import { SearchProductListItem } from "../SearchProductListItem";
import styles from "./SearchProductList.module.scss";
import { ROUTES } from "../../../constants/routes";

export type FocusDirection =
  | "up"
  | "down"
  | "pageup"
  | "pagedown"
  | "first"
  | "last";

interface IFocusedOption {
  focusedOption: IMirror | IConsole | null;
}
export interface ISearchProductListProps {
  productList: SearchProductsType;
}

interface IProductsByCatalog {
  catalog: string;
  entities: IConsole[] | IMirror[];
}

export const SearchProductList: React.FC<ISearchProductListProps> = ({
  productList,
}) => {
  const router = useRouter();
  const options = productList.slice(0, 5);
  const { isLoading } = useSelector(loadingSelector);
  const [focusedOption, setFocusedOption] = useState<IFocusedOption>({
    focusedOption: null,
  });
  console.log("focusedOption: ", focusedOption);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const arrowUpPressed = useKeyPress("ArrowUp");
  // const arrowDownPressed = useKeyPress("ArrowDown");
  const arrowUpPressed = useKey("ArrowUp");
  const arrowDownPressed = useKey("ArrowDown");
  const enterPressed = useKey("Enter");

  // useEffect(() => {
  //   if (arrowUpPressed) {
  //     console.log("arrowUp");
  //     if (selectedIndex !== 0) {
  //       setSelectedIndex(selectedIndex - 1);
  //     } else {
  //       setSelectedIndex(productList.slice(0, 5).length - 1);
  //     }
  //   }
  // }, [arrowUpPressed]);
  //
  // useEffect(() => {
  //   if (arrowDownPressed) {
  //     console.log("arrowDown");
  //     if (selectedIndex !== productList.slice(0, 5).length - 1) {
  //       setSelectedIndex(selectedIndex + 1);
  //     } else {
  //       setSelectedIndex(0);
  //     }
  //   }
  // }, [arrowDownPressed]);

  useEffect(() => {
    setFocusedOption({ focusedOption: options[selectedIndex] });
  }, [selectedIndex]);

  const focusOption = (direction: FocusDirection = "first") => {
    if (!options.length) return;
    let nextFocus = selectedIndex; // handles 'first'

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
        console.log("Enter push");
        router.push(
          `${ROUTES.MIRRORS}/${focusedOption.focusedOption.product_slug}`
        );
        break;
    }
  };

  useEffect(() => {
    if (arrowUpPressed.keyup) {
      handleKeyDown(arrowUpPressed.event);
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed.keydown) {
      handleKeyDown(arrowDownPressed.event);
    }
  }, [arrowDownPressed]);

  useEffect(() => {
    if (enterPressed.enter) {
      handleKeyDown(enterPressed.event);
    }
  }, [enterPressed]);

  const groupProductsByCatalog = useCallback(
    (productList: SearchProductsType): IProductsByCatalog[] => {
      const catalog: string[] = Array.from(
        new Set(productList.map(item => item.catalog))
      );
      return catalog.map(item => {
        const catalog = item ? { catalog: item } : null;

        return {
          ...catalog,
          entities: productList.filter(product => product.catalog === item),
        };
      });
    },
    []
  );

  if (isLoading) return <Spinner />;

  return (
    <>
      <ul className={styles.SearchCatalogList}>
        {!isEmpty(productList) &&
          groupProductsByCatalog(productList)
            .slice(0, 2)
            .map(item => (
              <SearchCatalogListItem
                key={item.catalog}
                image={item.entities[0].image}
                slug={item.entities[0].catalog_slug}
                title={item.catalog}
              />
            ))}
      </ul>
      <ul className={styles.SearchProductList}>
        {!isEmpty(productList) &&
          productList.slice(0, 5).map((product, index) => (
            <SearchProductListItem
              key={product.id}
              product={product}
              aria-pressed={index === selectedIndex}
              style={{
                cursor: "pointer",
                color: index === selectedIndex ? "red" : "black",
              }}
            />
          ))}
      </ul>
    </>
  );
};
