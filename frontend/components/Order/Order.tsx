import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "ducks/order";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import { DISCOUNT_FOR_AUTHORIZATION } from "constants/cart";
import styles from "./Order.module.scss";

export const Order: React.FC = () => {
  const order = useTypedSelector(state => state.order);
  const cart = useTypedSelector(state => state.cart);
  const account = useTypedSelector(state => state.account);
  const dispatch = useDispatch();
  const { hasMounted } = useMounted();
  const router = useRouter();
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
  const shippingPrice = Number(
    (priceWithDiscountTotal > 100000 ? 0 : 500).toFixed(2)
  );
  const priceTotal = Number(
    (priceWithDiscountTotal + shippingPrice).toFixed(2)
  );

  const handleSubmit = () => {
    dispatch({
      type: ActionTypes.FETCH_ORDER_CREATE,
      payload: {
        orderItems: cart.entities,
        shippingAddress: order.shippingAddress,
        paymentMethod: null,
        itemsPrice: priceWithDiscountTotal,
        shippingPrice: shippingPrice,
        taxPrice: 0,
        totalPrice: priceTotal,
      },
    });
  };

  return (
    <div className={styles.Order}>
      <h2>Order</h2>
      <div>
        <h3>Адрес доставки:</h3>
        <div>{order.shippingAddress && order.shippingAddress.address}</div>
      </div>
      <hr />
      <div>
        <h2>Order Items:</h2>
        {hasMounted && cart.entities.length === 0 ? (
          <p>Ваша корзина пуста.</p>
        ) : (
          <div>
            {hasMounted &&
              cart.entities.map(item => (
                <div key={item.id}>
                  <span>{item.product.title}</span>
                  <> </>
                  <span>
                    {item.quantity} x {item.product.price} ={" "}
                    {item.quantity * Number(item.product.price)}
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
      <hr />
      <div>
        <h2>Order Summary:</h2>
        <div>Item:</div>
        <div>{priceWithDiscountTotal}</div>
        <div>Стоимость доставки:</div>
        <div>{shippingPrice}</div>
        <div>Итого к оплате:</div>
        <div>{priceTotal}</div>
      </div>
      <button onClick={handleSubmit}>Подтвердить заказ</button>
    </div>
  );
};
