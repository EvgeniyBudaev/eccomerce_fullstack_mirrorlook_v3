import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import isNull from "lodash/isNull";
import { RatingNumber } from "components";
import { ROUTES } from "constants/routes";
import { ActionTypes, ICartState } from "ducks/cart";
import { cartSelector } from "ducks/selectors";
import { useDispatch, useSelector } from "hooks";
import { IMirror } from "types/mirror";
import { Button } from "ui-kit";
import { getDeclination, reviewDeclinations } from "utils/declinations";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { changeToBackendBaseUrl } from "utils/url";
import styles from "./AboutProduct.module.scss";

export interface IAboutProductProps {
  className?: string;
  product: IMirror;
  reviewsCount: number;
}

export const AboutProduct: React.FC<IAboutProductProps> = ({
  className,
  product,
  reviewsCount,
}) => {
  const [currentCart, setCurrentCart] = useState<ICartState>(null);
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);

  useEffect(() => {
    const cartItemImageUrl = product.image;
    const newImageUrl = changeToBackendBaseUrl(cartItemImageUrl);
    setImageUrl(newImageUrl);
  }, [product]);

  const handleAddToCart = () => {
    dispatch({
      type: ActionTypes.FETCH_CART_ADD_ITEM,
      payload: {
        cart: cart.id,
        product: product.id,
        quantity: 1,
      },
    });
  };

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

  const renderButton = (product: IMirror) => {
    const isProductAtCart =
      !isNull(currentCart) &&
      currentCart.entities.some(item => item.product.id === product.id);

    return isProductAtCart ? (
      !isNull(currentCart.id) && (
        <Link
          href={{
            pathname: `${ROUTES.CART}${currentCart.id}`,
          }}
        >
          <a className={styles.ButtonAddToCart}>Перейти в корзину</a>
        </Link>
      )
    ) : (
      <Button
        className={styles.ProductAddToCart}
        isDisabled={product.count_in_stock <= 0}
        onClick={handleAddToCart}
      >
        Добавить в корзину
      </Button>
    );
  };

  return (
    <div className={classNames(styles.AboutProduct, className)}>
      <div className={styles.Inner}>
        <div className={styles.Info}>
          <div className={styles.InfoImg}>
            <Link href={`${ROUTES.MIRRORS}${product.product_slug}`}>
              <a>
                {imageUrl && (
                  <Image
                    className={styles.InfoImage}
                    alt={product.title}
                    priority
                    src={imageUrl}
                    height="70px"
                    width="50px"
                  />
                )}
              </a>
            </Link>
          </div>
          <div className={styles.InfoContent}>
            <Link href={`${ROUTES.MIRRORS}${product.product_slug}`}>
              <a>
                <h1 className={styles.InfoTitle}>{product.title}</h1>
              </a>
            </Link>
            <div className={styles.InfoNavigation}>
              {product.rating && <RatingNumber rating={product.rating} />}
              <div>
                {reviewsCount}
                &nbsp;
                {getDeclination(Number(reviewsCount), reviewDeclinations)}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Check}>
          <div className={styles.CheckPrice}>
            {numberWithSpaces(parseInt(product.price))} ₽
          </div>
          <div className={styles.CheckControl}>{renderButton(product)}</div>
        </div>
      </div>
    </div>
  );
};
