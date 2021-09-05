import React, { useState } from "react";
import styles from "./Shipping.module.scss";

export const Shipping = () => {
  const [address, setAddress] = useState("");

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("address", address);
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
      </form>
      <button type="submit">Продолжить</button>
    </div>
  );
};
