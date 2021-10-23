import React from "react";
import { isEmpty } from "lodash";
import { SearchProductsType } from "api/types/search";
import { SearchProductListItem } from "../SearchProductListItem";
import styles from "./SearchProductList.module.scss";

export interface ISearchProductListProps {
  productList: SearchProductsType;
}

export const SearchProductList: React.FC<ISearchProductListProps> = ({
  productList,
}) => {
  return (
    <ul className={styles.SearchProductList}>
      {!isEmpty(productList) &&
        productList
          .slice(0, 5)
          .map(product => (
            <SearchProductListItem key={product.id} product={product} />
          ))}
    </ul>
  );
};
