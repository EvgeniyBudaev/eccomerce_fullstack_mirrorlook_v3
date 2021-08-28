import React from "react";
import { useTypedSelector } from "hooks/useTypedSelector";
import { CartItem } from "./CartItem/CartItem";
import styles from "./Cart.module.scss";

export const Cart: React.FC = () => {
  const cart = useTypedSelector(state => state.cart);

  return (
    <section className={styles.Cart}>
      <h1 className={styles.Title}>Моя корзина</h1>
      <ul className={styles.List}>
        {cart.entities.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
    </section>
  );
};
