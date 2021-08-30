import React from "react";
import { isEmpty } from "lodash";
import { useTypedSelector } from "hooks/useTypedSelector";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { getDeclination } from "utils/declinations";
import { CartItem } from "./CartItem/CartItem";
import styles from "./Cart.module.scss";

export const Cart: React.FC = () => {
  const cart = useTypedSelector(state => state.cart);
  const countTotal = cart.entities.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const priceSubTotal = cart.entities.reduce(
    (acc, item) => acc + Number(item.product.price) * item.quantity,
    0
  );
  const priceWithDiscount = priceSubTotal;

  return (
    <section className={styles.Cart}>
      <h1 className={styles.Title}>Моя корзина</h1>
      <div className={styles.Inner}>
        <div className={styles.List}>
          {!isEmpty(cart.entities) ? (
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
                  В корзине {countTotal.toString()} {getDeclination(countTotal)}
                </div>
                <div className={styles.CostLinePrice}>
                  <div className={styles.CostLineSubTotalPrice}>
                    {numberWithSpaces(parseInt(priceSubTotal.toString()))}
                  </div>
                  <div className={styles.CostLinePriceWithDiscount}>
                    {numberWithSpaces(parseInt(priceWithDiscount.toString()))} ₽
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
