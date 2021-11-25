import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IPayloadCartItem } from "ducks/cart";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { changeToBackendBaseUrl } from "utils/url";
import styles from "./OrderProductsItem.module.scss";

export interface IOrderProductsItemProps {
  item: IPayloadCartItem;
}

export const OrderProductsItem: React.FC<IOrderProductsItemProps> = ({
  item,
}) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const cartItemImageUrl = item.product.product_photo1;
    const newImageUrl = changeToBackendBaseUrl(cartItemImageUrl);
    setImageUrl(newImageUrl);
  }, [item]);

  return (
    <div className={styles.OrderProductsItem} key={item.id}>
      <div className={styles.OrderProductsItemInfo}>
        <Link
          href={`/${item.product.catalog_slug}/${item.product.product_slug}`}
        >
          <a>
            {imageUrl && (
              <Image src={imageUrl} alt="" width="50" height="50" priority />
            )}
          </a>
        </Link>
        <span className={styles.OrderProductsItemTitle}>
          {item.product.title}
        </span>
      </div>
      <div className={styles.OrderProductsItemPrice}>
        {item.quantity} x{" "}
        {numberWithSpaces(Number(item.product.price).toFixed())} ={" "}
        {numberWithSpaces(item.quantity * Number(item.product.price))} ₽
      </div>
    </div>
  );
};
