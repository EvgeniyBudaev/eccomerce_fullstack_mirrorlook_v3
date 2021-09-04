import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { isNull } from "lodash";
import { IMirror } from "types/mirror";
import { Button, IconButton, Spinner } from "ui-kit";
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
  const [cartId, setCartId] = useState("");
  const dispatch = useDispatch();
  const cart = useTypedSelector(state => state.cart);
  const loading = useTypedSelector(state => state.loading);
  const unhandledError = useTypedSelector(state => state.unhandledError);
  const { isLoading } = loading;
  const { error } = unhandledError;

  const getCartId = (cart: ICartState) => {
    return String(cart.id);
  };

  useEffect(() => {
    async function fetchCartId(cart) {
      const response = await getCartId(cart);
      setCartId(response);
    }
    fetchCartId(cart);
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
    const isProductAtCart = cart.entities.some(
      item => item.product.id === mirror.id
    );

    return isProductAtCart ? (
      !isNull(cartId) && (
        <Link
          href={{
            pathname: `/cart/${cartId}`,
          }}
        >
          <a className={styles.FooterGoAtCart}>В корзине</a>
        </Link>
      )
    ) : (
      <Button disabled={mirror.count_in_stock <= 0} onClick={handleAddToCart}>
        В корзину
      </Button>
    );
  };

  useEffect(() => {
    return () => {
      dispatch(setUnhandledClearError());
    };
  }, [dispatch]);

  if (isLoading) return <Spinner />;

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
            <Link href={`/mirrors/${mirror.product_slug}`}>
              <a className={styles.ContentTitle}>{mirror.title}</a>
            </Link>
          </div>
          <ul className={styles.ContentDescriptionLine}>
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
              <div className={styles.LabelLine}>Произоводитель:</div>
              <div className={styles.ValueLine}>{mirror.brand}</div>
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
