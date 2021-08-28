import Image from "next/image";
import Link from "next/link";
import React from "react";
import classNames from "classnames";
import { IMirror } from "types/mirror";
import { Button, IconButton } from "ui-kit";
import { numberWithSpaces } from "utils/numberWithSpaces";
import styles from "./MirrorsListItem.module.scss";

export interface IMirrorsListItemProps {
  mirror: IMirror;
  isClickedDisplayLine: boolean;
}

export const MirrorsListItem: React.FC<IMirrorsListItemProps> = ({
  mirror,
  isClickedDisplayLine,
}) => {
  return (
    <li
      className={classNames(styles.MirrorsListItem, {
        [styles.MirrorsListItem__line]: isClickedDisplayLine,
      })}
    >
      <div className={styles.Wrapper}>
        <div className={styles.Content}>
          <div className={styles.ContentImg}>
            <Link href={`/mirrors/${mirror.product_slug}`}>
              <a>
                <Image
                  src={mirror.product_photo1}
                  alt=""
                  width="164"
                  height="216"
                />
              </a>
            </Link>
          </div>
          <div className={styles.ContentDescription}>
            <p className={styles.ContentTitle}>{mirror.title}</p>
          </div>
          <ul className={styles.ContentDescriptionLine}>
            <li className={styles.ContentTitleLine}>{mirror.title}</li>
            <li className={styles.RowLine}>
              <div className={styles.LabelLine}>Материал зеркала:</div>
              <div className={styles.ValueLine}>
                {mirror.attributes[0].mirror_material}
              </div>
            </li>
            <li className={styles.RowLine}>
              <div className={styles.LabelLine}>Материал рамы:</div>
              <div className={styles.ValueLine}>
                {mirror.attributes[0].frame_material}
              </div>
            </li>
            <li className={styles.RowLine}>
              <div className={styles.LabelLine}>Цвет рамы:</div>
              <div className={styles.ValueLine}>
                {mirror.attributes[0].frame_color}
              </div>
            </li>
            <li className={styles.RowLine}>
              <div className={styles.LabelLine}>Размер внешний, с рамой:</div>
              <div className={styles.ValueLine}>
                {mirror.attributes[0].height_with_frame} x{" "}
                {mirror.attributes[0].width_with_frame} см
              </div>
            </li>
            <li className={styles.RowLine}>
              <div className={styles.LabelLine}>Размер зеркала без рамы:</div>
              <div className={styles.ValueLine}>
                {mirror.attributes[0].height_without_frame} x{" "}
                {mirror.attributes[0].width_without_frame} см
              </div>
            </li>
            <li className={styles.RowLine}>
              <div className={styles.LabelLine}>Вес:</div>
              <div className={styles.ValueLine}>
                {mirror.attributes[0].weight} кг
              </div>
            </li>
            <li className={styles.RowLine}>
              <div className={styles.LabelLine}>Наличие фацета:</div>
              <div className={styles.ValueLine}>
                {mirror.attributes[0].is_faced ? "Да" : "Нет"}
              </div>
            </li>
            <li className={styles.RowLine}>
              <div className={styles.LabelLine}>Форма:</div>
              <div className={styles.ValueLine}>
                {mirror.attributes[0].form}
              </div>
            </li>
            <li className={styles.RowLine}>
              <div className={styles.LabelLine}>Произоводитель:</div>
              <div className={styles.ValueLine}>{mirror.brand}</div>
            </li>
          </ul>
        </div>
        <div className={styles.Footer}>
          <div className={styles.FooterTop}>
            <div className={styles.FooterBottomLabel}>Цена:</div>
            <IconButton className={styles.FooterTopBasket} type={"Basket"} />
          </div>
          <div className={styles.FooterBottom}>
            <div className={styles.FooterBottomNum}>
              {numberWithSpaces(parseInt(mirror.price))} ₽
            </div>
            <div className={styles.FooterBottomStatus}>
              {mirror.count_in_stock > 0 ? "В наличии" : "Товар отсутствует"}
            </div>
            <div className={styles.FooterAddToBasketLine}>
              <Button onClick={() => {}}>В корзину</Button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
