import React from "react";
import classNames from "classnames";
import { IConsole } from "types/console";
import { IMirror } from "types/mirror";
import { MirrorsListItem } from "components/Catalog/Mirrors";
import { CatalogNames } from "constants/names";
import styles from "./ProductsList.module.scss";

export interface IProductsListProps {
  catalogName?: string;
  products: IConsole[] | IMirror[];
  isClickedDisplayLine: boolean;
}

export const ProductsList: React.FC<IProductsListProps> = ({
  catalogName,
  products,
  isClickedDisplayLine,
}) => {
  const renderMirrorsListItem = (product: IMirror) => {
    return (
      <MirrorsListItem
        key={product.id}
        mirror={product}
        isClickedDisplayLine={isClickedDisplayLine}
      />
    );
  };

  return (
    <ul
      className={classNames(styles.ProductsList, {
        [styles.ProductsList__line]: isClickedDisplayLine,
      })}
    >
      {catalogName === CatalogNames.MIRRORS &&
        products.map(product => renderMirrorsListItem(product))}
    </ul>
  );
};
