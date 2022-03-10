import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SearchProductType } from "api/types/search";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { changeToBackendBaseUrl } from "utils/url";
import styles from "./SearchProductListItem.module.scss";

interface ISearchProductListItemProps {
  product: SearchProductType;
  style: any;
  onKeyPress: (e) => void;
}

export const SearchProductListItem: React.FC<ISearchProductListItemProps> = ({
  product,
  style,
  onKeyPress,
}) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const cartItemImageUrl = product.image;
    const newImageUrl = changeToBackendBaseUrl(cartItemImageUrl);
    setImageUrl(newImageUrl);
  }, [product]);

  return (
    <li className={styles.SearchProductListItem}>
      <Link href={`/${product.catalog_slug}/${product.product_slug}`}>
        <a className={styles.SearchProductListItemLink} onKeyPress={onKeyPress}>
          <div className={styles.SearchProductListItemImages}>
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={product.title}
                width="28"
                height="28"
                priority
              />
            )}
          </div>
          <div className={styles.SearchProductListItemTitle} style={style}>
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
