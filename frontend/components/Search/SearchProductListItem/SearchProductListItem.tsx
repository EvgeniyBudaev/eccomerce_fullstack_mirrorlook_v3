import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SearchProductType } from "api/types/search";
import { numberWithSpaces } from "utils/numberWithSpaces";
import styles from "./SearchProductListItem.module.scss";

interface ISearchProductListItemProps {
  product: SearchProductType;
}

export const SearchProductListItem: React.FC<ISearchProductListItemProps> = ({
  product,
}) => {
  return (
    <li className={styles.SearchProductListItem}>
      <Link href={`/${product.catalog_slug}/${product.product_slug}`}>
        <a className={styles.SearchProductListItemLink}>
          <div className={styles.SearchProductListItemImages}>
            <Image src={product.image} alt="" width="28" height="28" />
          </div>
          <div className={styles.SearchProductListItemTitle}>
            {product.title}
          </div>
          <div className={styles.SearchProductListItemPrice}>
            {numberWithSpaces(parseInt(product.price))} ₽
          </div>
        </a>
      </Link>
    </li>
  );
};
