import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./SearchCatalogListItem.module.scss";

interface ISearchCatalogListItemProps {
  image: string;
  slug: string;
  title: string;
}

export const SearchCatalogListItem: React.FC<ISearchCatalogListItemProps> = ({
  image,
  slug,
  title,
}) => {
  return (
    <li className={styles.SearchProductListItem}>
      <Link href={`/${slug}`}>
        <a className={styles.SearchProductListItemLink}>
          <div className={styles.SearchProductListItemImages}>
            <Image src={image} alt="" width="28" height="28" />
          </div>
          <div className={styles.SearchProductListItemTitle}>{title}</div>
        </a>
      </Link>
    </li>
  );
};
