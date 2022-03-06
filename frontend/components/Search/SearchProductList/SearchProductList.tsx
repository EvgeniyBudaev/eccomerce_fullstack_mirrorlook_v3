import React, { useCallback } from "react";
import isEmpty from "lodash/isEmpty";
import { SearchProductsType } from "api/types/search";
import { loadingSelector } from "ducks/selectors";
import { useSelector } from "hooks";
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
          productList
            .slice(0, 5)
            .map(product => (
              <SearchProductListItem key={product.id} product={product} />
            ))}
      </ul>
    </>
  );
};
