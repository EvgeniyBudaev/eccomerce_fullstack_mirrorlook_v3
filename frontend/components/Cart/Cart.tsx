import Link from "next/link";
import { useRouter } from "next/router";
import React, {useCallback, useEffect} from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import isEmpty from "lodash/isEmpty";
import { DISCOUNT_FOR_AUTHORIZATION } from "constants/cart";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Breadcrumbs, Button, Icon, Spinner } from "ui-kit";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";
import { getDeclination } from "utils/declinations";
import { numberWithSpaces } from "utils/numberWithSpaces";
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

  useEffect(() => {
    if (error) {
      const errorByStatus = getErrorByStatus(error);
      AlertError(errorByStatus.error.body);
    }
  }, [error]);

  const handleBackToShopping = () => {
    router.back();
  };

  const handleProceedToCheckout = () => {
    router.push("/shipping");
  };

  const getDefaultTextCrumbGenerator = useCallback((subpath: string) => {
    return (
      {
        cart: "Корзина",
      }[subpath] || subpath
    );
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <section className={styles.Cart}>
      <AlertContainer />
      <Breadcrumbs getDefaultTextGenerator={getDefaultTextCrumbGenerator} />
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
                isDisabled={isEmpty(cart.entities)}
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
