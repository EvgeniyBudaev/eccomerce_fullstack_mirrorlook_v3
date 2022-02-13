import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { ActionTypes } from "ducks/cart";
import { ICartItem } from "types/cart";
import { IconButton } from "ui-kit";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { changeToBackendBaseUrl } from "utils/url";
import styles from "./CartItem.module.scss";

interface ICartItemProps {
  cartItem: ICartItem;
}

export const CartItem: React.FC<ICartItemProps> = ({ cartItem }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    const cartItemImageUrl = cartItem.product.image;
    const newImageUrl = changeToBackendBaseUrl(cartItemImageUrl);
    setImageUrl(newImageUrl);
  }, [cartItem]);

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

  const handleBlurQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionTypes.FETCH_CART_ITEM_CHANGE,
      payload: {
        id: cartItem.id,
        quantity: Number(event.target.value),
      },
    });
  };

  const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const handleKeyPressQuantity = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      dispatch({
        type: ActionTypes.FETCH_CART_ITEM_CHANGE,
        payload: {
          id: cartItem.id,
          quantity: quantity,
        },
      });
    }
  };

  return (
    <div className={styles.CartItem}>
      <div className={styles.Product}>
        <div className={styles.ProductImage}>
          <Link
            href={`/${cartItem.product.catalog_slug}/${cartItem.product.product_slug}`}
          >
            <a>
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt=""
                  width="100"
                  height="100"
                  priority
                />
              )}
            </a>
          </Link>
        </div>
        <div className={styles.ProductContent}>
          <div className={styles.ProductHeader}>
            <div className={styles.ProductTitle}>
              <Link
                href={`/${cartItem.product.catalog_slug}/${cartItem.product.product_slug}`}
              >
                <a>{cartItem.product.title}</a>
              </Link>
            </div>
            <div className={styles.ProductActions}>
              <div className={styles.ProductCounter}>
                <button
                  className={classNames(styles.ProductCounterMinus, {
                    [styles.ProductCounter__disabled]: cartItem.quantity <= 1,
                  })}
                  onClick={handleDecrementItemToCart}
                >
                  -
                </button>
                <input
                  className={styles.ProductCounterCount}
                  type="text"
                  value={quantity}
                  onBlur={handleBlurQuantity}
                  onChange={handleChangeQuantity}
                  onKeyPress={handleKeyPressQuantity}
                />
                <button
                  className={classNames(styles.ProductCounterPlus)}
                  onClick={handleIncrementItemToCart}
                >
                  +
                </button>
              </div>
              <div className={styles.ProductItemPrice}>
                {numberWithSpaces(parseInt(cartItem.product.price))} ₽/шт
              </div>
            </div>
            <div className={styles.ProductItemTotalPrice}>
              {numberWithSpaces(
                cartItem.quantity * parseInt(cartItem.product.price)
              )}{" "}
              ₽
            </div>
          </div>
          <div className={styles.ProductBottom}>
            <IconButton
              className={styles.ProductDeleteMobile}
              typeIcon="Trash"
              onClick={handleDeleteItemToCart}
            />
            <div
              className={styles.ProductDelete}
              onClick={handleDeleteItemToCart}
            >
              Удалить
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
