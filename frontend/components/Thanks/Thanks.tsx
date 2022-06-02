import React from "react";
import { orderSelector } from "ducks/selectors";
import { useMounted } from "hooks/useMounted";
import { useSelector } from "hooks";
import styles from "./Thanks.module.scss";

export const Thanks: React.FC = () => {
  const { hasMounted } = useMounted();
  const order = useSelector(orderSelector);
  const orderInfo = hasMounted && order.order;

  return (
    <div className={styles.Thanks}>
      <div className={styles.Thanks_Info}>
        <div className={styles.Thanks_Content}>
          <h2 className={styles.Thanks_Title}>Благодарим за заказ!</h2>
          <p className={styles.Thanks_Text}>
            Заказ № {orderInfo.id} успешно оформлен. На Ваш email отправлено
            письмо подтверждение. Скоро с Вами свяжется наш менеджер для
            уточнения деталей.
          </p>
        </div>
      </div>
    </div>
  );
};
