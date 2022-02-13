import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import isNull from "lodash/isNull";
import { IMirror } from "types/mirror";
import { Button } from "ui-kit";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { useTypedSelector } from "hooks/useTypedSelector";
import { ActionTypes, ICartState } from "ducks/cart";
import { setUnhandledClearError } from "ducks/unhandledError";
import styles from "./MirrorsListItem.module.scss";

export interface IMirrorsListItemProps {
  mirror: IMirror;
  isClickedDisplayLine: boolean;
}

export const MirrorsListItem: React.FC<IMirrorsListItemProps> = ({
  mirror,
  isClickedDisplayLine,
}) => {
  const [currentCart, setCurrentCart] = useState<ICartState>(null);
  const dispatch = useDispatch();
  const cart = useTypedSelector(state => state.cart);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 500px)" });

  const getCart = (cart: ICartState) => {
    return cart;
  };

  useEffect(() => {
    async function fetchCart(cart) {
      const response = await getCart(cart);
      setCurrentCart(response);
    }
    fetchCart(cart);
  }, [cart]);

  const handleAddToCart = () => {
    dispatch({
      type: ActionTypes.FETCH_CART_ADD_ITEM,
      payload: {
        cart: cart.id,
        product: mirror.id,
        quantity: 1,
      },
    });
  };

  const renderButton = (mirror: IMirror) => {
    const isProductAtCart =
      !isNull(currentCart) &&
      currentCart.entities.some(item => item.product.id === mirror.id);

    return isProductAtCart ? (
      !isNull(currentCart.id) && (
        <Link
          href={{
            pathname: `/cart/${currentCart.id}`,
          }}
        >
          <a className={styles.ButtonGoAtCart}>В корзине</a>
        </Link>
      )
    ) : (
      <Button
        className={styles.ButtonAddToCart}
        isDisabled={mirror.count_in_stock <= 0}
        onClick={handleAddToCart}
      >
        В корзину
      </Button>
    );
  };

  useEffect(() => {
    return () => {
      dispatch(setUnhandledClearError());
    };
  }, [dispatch]);

  const imageResponsiveSizeWidth = () => {
    if (isMobileScreen) {
      return "100px";
    } else {
      return "164px";
    }
  };

  const imageResponsiveSizeHeight = () => {
    if (isMobileScreen) {
      return "140px";
    } else {
      return "216px";
    }
  };

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
                  className={styles.ContentImage}
                  alt=""
                  priority
                  src={mirror.product_photo1}
                  width={imageResponsiveSizeWidth()}
                  height={imageResponsiveSizeHeight()}
                />
              </a>
            </Link>
          </div>
          <div className={styles.ContentDescription}>
            <Link href={`/mirrors/${mirror.product_slug}`}>
              <a className={styles.ContentTitle}>{mirror.title}</a>
            </Link>
          </div>
          <ul className={styles.ContentDescriptionLine}>
            <li className={styles.ContentDescriptionLinePrice}>
              {numberWithSpaces(parseInt(mirror.price))} ₽
            </li>
            <li className={styles.ContentTitleLine}>
              <Link href={`/mirrors/${mirror.product_slug}`}>
                <a className={styles.ContentTitle}>{mirror.title}</a>
              </Link>
            </li>
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
              <div className={styles.LabelLine}>Производитель:</div>
              <div className={styles.ValueLine}>{mirror.brand}</div>
            </li>
            <li className={styles.ContentDescriptionLineStatus}>
              {mirror.count_in_stock > 0 ? "В наличии" : "Товар отсутствует"}
            </li>
            <li className={styles.ContentDescriptionLineAddToCartLine}>
              {renderButton(mirror)}
            </li>
          </ul>
        </div>
        <div className={styles.Footer}>
          <div className={styles.FooterPrice}>
            {numberWithSpaces(parseInt(mirror.price))} ₽
          </div>
          <div className={styles.FooterStatus}>
            {mirror.count_in_stock > 0 ? "В наличии" : "Товар отсутствует"}
          </div>
          <div className={styles.FooterAddToCartGrid}>
            {renderButton(mirror)}
          </div>
          <div className={styles.FooterAddToCartLine}>
            {renderButton(mirror)}
          </div>
        </div>
      </div>
    </li>
  );
};
