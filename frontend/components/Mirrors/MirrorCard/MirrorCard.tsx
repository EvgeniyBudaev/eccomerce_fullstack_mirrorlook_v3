import React from "react";
import { IMirror } from "types/mirror";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { Button } from "ui-kit";
import { SliderAsNavFor } from "ui-kit/Slider/SliderAsNavFor";
import styles from "./MirrorCard.module.scss";

export interface IMirrorCardProps {
  mirror: IMirror;
}

export const MirrorCard: React.FC<IMirrorCardProps> = ({ mirror }) => {
  console.log("[card][mirror]", mirror);
  const handleAddToBasket = () => {
    console.log("Click");
  };

  return (
    <div className={styles.MirrorCard}>
      <h1 className={styles.Title}>{mirror.title}</h1>
      <div className={styles.ProductMainInfo}>
        <div className={styles.ColMedia}>
          <div className={styles.ProductGallery}>
            <SliderAsNavFor />
          </div>
        </div>
        <div className={styles.ColSpecification}>
          <div className={styles.ProductSpecification}>
            <h2 className={styles.ProductSpecificationTitle}>Описание</h2>
            <ul className={styles.ProductSpecificationList}>
              <li>Материал зеркала: {mirror.mirror_material}</li>
              <li>Материал рамы: {mirror.frame_material}</li>
              <li>Цвет рамы: {mirror.frame_color}</li>
              <li>
                Размер внешний, с рамой: {mirror.height_with_frame} x{" "}
                {mirror.width_with_frame} см
              </li>
              <li>
                Размер зеркала без рамы: {mirror.height_without_frame} x{" "}
                {mirror.width_without_frame} см
              </li>
              <li>Вес: {mirror.weight} кг</li>
              <li>Наличие фацета: {mirror.is_faced ? "Да" : "Нет"}</li>
              <li>Форма: {mirror.form}</li>
              <li>Произоводитель: {mirror.brand}</li>
            </ul>
            <div>{mirror.description}</div>
          </div>
        </div>
        <div className={styles.ColPrice}>
          <div className={styles.ProductPrice}>
            {numberWithSpaces(parseInt(mirror.price))} ₽
          </div>
          <div>
            <div className={styles.ColPriceTitle}>Товар:</div>{" "}
            <div className={styles.ProductStatus}>
              {mirror.count_in_stock > 0 ? "В наличии" : "Товар отсутствует"}
            </div>
          </div>
          <div className={styles.ProductPay}>
            Картой онлайн/курьеру, наличными
          </div>
          <Button
            className={styles.ProductAddToBasket}
            disabled={mirror.count_in_stock <= 0}
            onClick={handleAddToBasket}
          >
            Добавить в корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
