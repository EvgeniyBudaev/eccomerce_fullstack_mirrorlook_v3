import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IMirror } from "types/mirror";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { Button, Spinner } from "ui-kit";
import { SliderAsNavFor } from "ui-kit/Slider/SliderAsNavFor";
import { ActionTypes } from "ducks/basket";
import { useTypedSelector } from "hooks/useTypedSelector";
import { setUnhandledClearError } from "ducks/unhandledError";
import styles from "./MirrorCard.module.scss";

export interface IMirrorCardProps {
  mirror: IMirror;
}

export const MirrorCard: React.FC<IMirrorCardProps> = ({ mirror }) => {
  const sliderImages = [
    mirror.product_photo1,
    mirror.product_photo2,
    mirror.product_photo3,
    mirror.product_photo4,
  ];
  const dispatch = useDispatch();
  const loading = useTypedSelector(state => state.loading);
  const unhandledError = useTypedSelector(state => state.unhandledError);
  const { isLoading } = loading;
  const { error } = unhandledError;

  const handleAddToBasket = () => {
    dispatch({
      type: ActionTypes.FETCH_BASKET_ADD_ITEM,
      payload: {
        product_slug: mirror.product_slug,
        catalog_slug: mirror.catalog_slug,
      },
    });
  };

  useEffect(() => {
    return () => {
      dispatch(setUnhandledClearError());
    };
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.MirrorCard}>
      <h1 className={styles.Title}>{mirror.title}</h1>
      <div className={styles.ProductMainInfo}>
        <div className={styles.ColMedia}>
          <div className={styles.ProductGallery}>
            <SliderAsNavFor
              images={sliderImages}
              heightNav="400"
              heightFor="60"
              widthNav="400"
              widthFor="60"
            />
          </div>
        </div>
        <div className={styles.ColSpecification}>
          <div className={styles.ProductSpecification}>
            <h2 className={styles.ProductSpecificationTitle}>Описание</h2>
            <ul className={styles.ProductSpecificationList}>
              <li>Материал зеркала: {mirror.attributes[0].mirror_material}</li>
              <li>Материал рамы: {mirror.attributes[0].frame_material}</li>
              <li>Цвет рамы: {mirror.attributes[0].frame_color}</li>
              <li>
                Размер внешний, с рамой:{" "}
                {mirror.attributes[0].height_with_frame} x{" "}
                {mirror.attributes[0].width_with_frame} см
              </li>
              <li>
                Размер зеркала без рамы:{" "}
                {mirror.attributes[0].height_without_frame} x{" "}
                {mirror.attributes[0].width_without_frame} см
              </li>
              <li>Вес: {mirror.attributes[0].weight} кг</li>
              <li>
                Наличие фацета: {mirror.attributes[0].is_faced ? "Да" : "Нет"}
              </li>
              <li>Форма: {mirror.attributes[0].form}</li>
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
