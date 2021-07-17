import React from "react";
import { IMirror } from "types/mirror";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { Button } from "ui-kit";
import styles from "./MirrorCard.module.scss";

export interface IMirrorCardProps {
  mirror: IMirror;
}

export const MirrorCard: React.FC<IMirrorCardProps> = ({ mirror }) => {
  return (
    <div className={styles.MirrorCard}>
      <h1 className={styles.Title}>{mirror.title}</h1>
      <div className={styles.ProductMainInfo}>
        <div className={styles.ColMedia}>
          <div className={styles.ProductGallery}></div>
          <div className={styles.ProductSpecification}></div>
        </div>
        <div className={styles.ColPrice}>
          <div className={styles.ProductPrice}>
            {numberWithSpaces(parseInt(mirror.price))} ₽
          </div>
          <div className={styles.ProductPay}>
            Картой онлайн/курьеру, наличными
          </div>
          <Button className={styles.ProductAddToBasket}>
            Добавить в корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
