import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { isEmpty } from "lodash";
import { useTypedSelector } from "hooks/useTypedSelector";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { getDeclination } from "utils/declinations";
import { Button, Icon } from "ui-kit";
import { DISCOUNT_FOR_AUTHORIZATION } from "constants/cart";
import { useMounted } from "hooks/useMounted";
import { CartItem } from "./CartItem/CartItem";
import styles from "./Cart.module.scss";

export const Cart: React.FC = () => {
  const { hasMounted } = useMounted();
  const router = useRouter();
  const cart = useTypedSelector(state => state.cart);
  const account = useTypedSelector(state => state.account);
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

  return (
    <section className={styles.Cart}>
      <h1 className={styles.Title}>Моя корзина</h1>
      <div className={styles.Inner}>
        <div className={styles.List}>
          {hasMounted ? (
            !isEmpty(cart.entities) &&
            cart.entities.map(cartItem => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <div>В корзине нет товаров</div>
          )}
        </div>
        <div className={styles.Checkout}>
          <div className={styles.CheckoutInner}>
            <div className={styles.OrdersList}>
              <div className={styles.CostLine}>
                <div className={styles.CostLineText}>
                  В корзине {cartItemsCountTotal.toString()}
                  <> </>
                  {getDeclination(cartItemsCountTotal)}
                </div>
                <div className={styles.CostLinePrice}>
                  <div className={styles.CostLineSubTotalPrice}>
                    {numberWithSpaces(parseInt(priceSubTotal.toString()))}
                  </div>
                  <div className={styles.CostLinePriceWithDiscount}>
                    {numberWithSpaces(
                      parseInt(priceWithDiscountTotal.toString())
                    )}
                    <> </>₽
                  </div>
                </div>
              </div>
              <Button
                className={styles.ButtonGoToOrder}
                onClick={handleProceedToCheckout}
              >
                Перейти к оформлению
              </Button>
            </div>
            {isAuthenticated ? (
              <div className={styles.OrdersList}>
                <div className={styles.Inner}>
                  <Icon className={styles.IconLogoShort} type="LogoShort" />
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
              <div className={styles.OrdersList}>
                <div className={styles.Inner}>
                  <Icon className={styles.IconEnter} type="Enter" />
                  <Link href={"/login"}>
                    <a className={styles.TextEnter}>
                      Авторизуйтесь/зарегистрируйтесь, чтобы получить 3% от
                      стоимости заказа
                    </a>
                  </Link>
                </div>
              </div>
            )}
            <div
              className={styles.BackToShopping}
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
