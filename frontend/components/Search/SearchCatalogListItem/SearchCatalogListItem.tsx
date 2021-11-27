import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { changeToBackendBaseUrl } from "utils/url";
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
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const cartItemImageUrl = image;
    const newImageUrl = changeToBackendBaseUrl(cartItemImageUrl);
    setImageUrl(newImageUrl);
  }, [image]);

  return (
    <li className={styles.SearchProductListItem}>
      <Link href={`/${slug}`}>
        <a className={styles.SearchProductListItemLink}>
          <div className={styles.SearchProductListItemImages}>
            {imageUrl && (
              <Image src={imageUrl} alt="" width="28" height="28" priority />
            )}
          </div>
          <div className={styles.SearchProductListItemTitle}>{title}</div>
        </a>
      </Link>
    </li>
  );
};
