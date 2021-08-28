import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { ICartItem } from "types/cart";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { ActionTypes } from "ducks/cart";
import styles from "./CartItem.module.scss";

interface ICartItemProps {
  cartItem: ICartItem;
}

export const CartItem: React.FC<ICartItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleDecrementItemToCart = () => {
    if (cartItem.quantity <= 1) return;
    dispatch({
      type: ActionTypes.FETCH_CART_ITEM_DECREMENT,
      payload: {
        id: cartItem.id,
        quantity: cartItem.quantity - 1,
      },
    });
  };

  const handleIncrementItemToCart = () => {
    dispatch({
      type: ActionTypes.FETCH_CART_ITEM_INCREMENT,
      payload: {
        id: cartItem.id,
        quantity: cartItem.quantity + 1,
      },
    });
  };

  const handleDeleteItemToCart = () => {
    dispatch({
      type: ActionTypes.FETCH_CART_ITEM_DELETE,
      payload: {
        id: cartItem.id,
      },
    });
  };

  const handleChange = () => {};

  return (
    <li className={styles.CartItem}>
      <div className={styles.Product}>
        <div className={styles.ProductImage}>
          <Link
            href={`/${cartItem.product.catalog_slug}/${cartItem.product.product_slug}`}
          >
            <a>
              <Image
                src={cartItem.product.product_photo1}
                alt=""
                width="100"
                height="100"
              />
            </a>
          </Link>
        </div>
        <div className={styles.ProductContent}>
          <div className={styles.ProductHeader}>
            <div className={styles.ProductTitle}>{cartItem.product.title}</div>
            <div className={styles.ProductPrice}>
              {numberWithSpaces(parseInt(cartItem.product.price))} ₽
            </div>
          </div>
          <div className={styles.ProductActions}>
            <div
              className={styles.ProductDelete}
              onClick={handleDeleteItemToCart}
            >
              Удалить
            </div>
            <div className={styles.ProductCounter}>
              <button
                className={styles.ProductCounterMinus}
                onClick={handleDecrementItemToCart}
              >
                -
              </button>
              <input
                type="text"
                value={cartItem.quantity}
                onChange={handleChange}
              />
              <button
                className={styles.ProductCounterMinus}
                onClick={handleIncrementItemToCart}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
