import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { SearchProductType } from "api/types/search";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { changeToBackendBaseUrl } from "utils/url";
import { IProductsByCatalog } from "../SearchProductList/SearchProductList";
import styles from "./SearchListItem.module.scss";

interface ISearchListItemProps {
  index: number;
  item: SearchProductType | IProductsByCatalog;
  isActive: boolean;
  onMouseOver: (event: React.MouseEvent<HTMLLIElement>, index: number) => void;
}

export const SearchListItem: React.FC<ISearchListItemProps> = ({
  index,
  item,
  isActive,
  onMouseOver,
}) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if ("entities" in item) {
      const cartItemImageUrl = item.entities[0].image;
      const newImageUrl = changeToBackendBaseUrl(cartItemImageUrl);
      setImageUrl(newImageUrl);
    }
    if ("product_slug" in item) {
      const cartItemImageUrl = item.image;
      const newImageUrl = changeToBackendBaseUrl(cartItemImageUrl);
      setImageUrl(newImageUrl);
    }
  }, [item]);

  const handleMouseOver = (event: React.MouseEvent<HTMLLIElement>) => {
    onMouseOver(event, index);
  };

  return (
    <>
      {"entities" in item && (
        <li
          className={classNames(
            styles.SearchListItem,
            styles.SearchListItemByCatalog
          )}
          onMouseOver={handleMouseOver}
        >
          <Link href={`/${item.entities[0].catalog_slug}`}>
            <a
              className={classNames(styles.SearchListItemLink, {
                [styles.SearchListItemLink__active]: isActive,
              })}
            >
              <div className={styles.SearchListItemImages}>
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt=""
                    width="28"
                    height="28"
                    priority
                  />
                )}
              </div>
              <div className={styles.SearchListItemTitle}>{item.catalog}</div>
            </a>
          </Link>
        </li>
      )}
      {"product_slug" in item && (
        <li className={styles.SearchListItem} onMouseOver={handleMouseOver}>
          <Link href={`/${item.catalog_slug}/${item.product_slug}`}>
            <a
              className={classNames(styles.SearchListItemLink, {
                [styles.SearchListItemLink__active]: isActive,
              })}
            >
              <div className={styles.SearchListItemImages}>
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={item.title}
                    width="28"
                    height="28"
                    priority
                  />
                )}
              </div>
              <div className={styles.SearchListItemTitle}>{item.title}</div>
              <div className={styles.SearchListItemPrice}>
                {numberWithSpaces(parseInt(item.price))} ₽
              </div>
            </a>
          </Link>
        </li>
      )}
    </>
  );
};
