import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "ducks/order";
import { useTypedSelector } from "hooks/useTypedSelector";
import styles from "./Shipping.module.scss";

export const Shipping: React.FC = () => {
  const order = useTypedSelector(state => state.order);
  const { shippingAddress } = order;
  const [address, setAddress] = useState(
    shippingAddress ? shippingAddress : ""
  );
  const dispatch = useDispatch();

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: ActionTypes.FETCH_ORDER_SHIPPING_ADDRESS_SAVE,
      payload: {
        address: address,
      },
    });
  };

  return (
    <div className={styles.Shipping}>
      <h2>Где Вы хотите получить заказ?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Адрес</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address ? address : ""}
          onChange={e => setAddress(e.target.value)}
        />
        <button type="submit">Продолжить</button>
      </form>
    </div>
  );
};
