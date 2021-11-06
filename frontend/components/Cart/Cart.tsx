import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import isEmpty from "lodash/isEmpty";
import { useTypedSelector } from "hooks/useTypedSelector";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { getDeclination } from "utils/declinations";
import { Button, Icon, Spinner } from "ui-kit";
import { DISCOUNT_FOR_AUTHORIZATION } from "constants/cart";
import { useMounted } from "hooks/useMounted";
import { CartItem } from "./CartItem/CartItem";
import styles from "./Cart.module.scss";

export const Cart: React.FC = () => {
  const { hasMounted } = useMounted();
  const router = useRouter();
  const cart = useTypedSelector(state => state.cart);
  const account = useTypedSelector(state => state.account);
  const loading = useTypedSelector(state => state.loading);
  const unhandledError = useTypedSelector(state => state.unhandledError);
  const { isLoading } = loading;
  const { error } = unhandledError;
  const { isAuthenticated } = hasMounted && account;
  const cartItemsCountTotal =
    hasMounted && cart.entities.reduce((acc, item) => acc + item.quantity, 0);
  const priceSubTotal =
    hasMounted &&
    cart.entities.reduce(
      (acc, item) => acc + Number(item.product.price) * item.quantity,
      0
    );
  const priceWithDiscountTotal = isAuthenticated
    ? priceSubTotal * DISCOUNT_FOR_AUTHORIZATION
    : priceSubTotal;
  const priceDifference = priceSubTotal - priceWithDiscountTotal;

  const handleBackToShopping = () => {
    router.back();
  };

  const handleProceedToCheckout = () => {
    router.push("/shipping");
  };

  if (isLoading) return <Spinner />;

  return (
    <section className={styles.Cart}>
      <h1 className={styles.CartTitle}>Моя корзина</h1>
      <div className={styles.CartInner}>
        <div className={styles.CartList}>
          {hasMounted ? (
            !isEmpty(cart.entities) &&
            cart.entities.map(cartItem => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <div>В корзине нет товаров</div>
          )}
        </div>
        <div className={styles.CartCheckout}>
          <div className={styles.CartCheckoutInner}>
            <div className={styles.CartOrdersList}>
              <div className={styles.CartCostLine}>
                <div className={styles.CartCostLineText}>
                  В корзине {cartItemsCountTotal.toString()}
                  <> </>
                  {getDeclination(cartItemsCountTotal)}
                </div>
                <div className={styles.CartCostLinePrice}>
                  <div className={styles.CartCostLineSubTotalPrice}>
                    {isAuthenticated &&
                      numberWithSpaces(parseInt(priceSubTotal.toString()))}
                  </div>
                  <div className={styles.CartCostLinePriceWithDiscount}>
                    {numberWithSpaces(
                      parseInt(priceWithDiscountTotal.toString())
                    )}
                    <> </>₽
                  </div>
                </div>
              </div>
              <Button
                className={styles.CartButtonGoToOrder}
                onClick={handleProceedToCheckout}
              >
                Перейти к оформлению
              </Button>
            </div>
            {isAuthenticated ? (
              <div className={styles.CartOrdersList}>
                <div className={styles.CartInner}>
                  <Icon className={styles.CartIconLogoShort} type="LogoShort" />
                  <div>
                    <span>
                      - {numberWithSpaces(parseInt(priceDifference.toString()))}
                      <> </>
                    </span>
                    <span>рублей за заказ</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.CartOrdersList}>
                <div className={styles.CartInner}>
                  <Icon className={styles.CartIconEnter} type="Enter" />
                  <Link href={"/login"}>
                    <a className={styles.CartTextEnter}>
                      Авторизуйтесь/зарегистрируйтесь, чтобы получить 3% от
                      стоимости заказа
                    </a>
                  </Link>
                </div>
              </div>
            )}
            <div
              className={styles.CartBackToShopping}
              onClick={handleBackToShopping}
            >
              Вернуться к покупкам
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
