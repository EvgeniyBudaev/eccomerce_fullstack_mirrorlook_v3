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
  const { isLoading } = useSelector(loadingSelector);
  // const arrowUpPressed = useKeyPress("ArrowUp");
  // const arrowDownPressed = useKeyPress("ArrowDown");
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const handleUp = () => {
    console.log("UP!");
    if (selectedIndex !== 0) {
      setSelectedIndex(selectedIndex - 1);
    } else {
      setSelectedIndex(productList.slice(0, 5).length - 1);
    }
  };

  const handleDown = () => {
    console.log("Down!");
    if (selectedIndex !== productList.slice(0, 5).length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }
  };

  const handleEnter = () => {
    console.log("Enter");
  };

  useKey("ArrowUp", handleUp);
  useKey("ArrowDown", handleDown);
  useKey("Enter", handleEnter);

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

  const handleKeyPress = (event: any) => {
    console.log("event: ", event);
  };

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
              onKeyPress={handleKeyPress}
            />
          ))}
      </ul>
    </>
  );
};
