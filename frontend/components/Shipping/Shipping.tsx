import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "ducks/order";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import styles from "./Shipping.module.scss";

export const Shipping: React.FC = () => {
  const order = useTypedSelector(state => state.order);
  const { hasMounted } = useMounted();
  const { shippingAddress } = hasMounted && order;
  const [address, setAddress] = useState(
    shippingAddress ? shippingAddress : ""
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: ActionTypes.FETCH_ORDER_SHIPPING_ADDRESS_SAVE,
      payload: {
        address: address,
      },
    });
    router.push("/order");
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setAddress(event.target.value);
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
          onChange={handleAddressChange}
        />
        <button type="submit">Продолжить</button>
      </form>
    </div>
  );
};
