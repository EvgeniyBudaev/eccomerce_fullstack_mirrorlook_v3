import React from "react";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import styles from "./Thanks.module.scss";

export const Thanks: React.FC = () => {
  const { hasMounted } = useMounted();
  const order = useTypedSelector(state => state.order);
  const orderInfo = hasMounted && order.order;

  return (
    <section className={styles.Thanks}>
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
    </section>
  );
};
