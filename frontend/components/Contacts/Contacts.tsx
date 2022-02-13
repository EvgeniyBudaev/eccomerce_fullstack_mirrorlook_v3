import React from "react";
import styles from "./Contacts.module.scss";

export const Contacts: React.FC = () => {
  return (
    <section className={styles.Contacts}>
      <h1 className={styles.ContactsTitle}>Контакты</h1>
      <h2 className={styles.ContactsSubTitle}>Реквизиты:</h2>
      <div>
        <p className={styles.ContactsParagraph}>
          ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ЛЫСКИН ВЛАДИМИР ВАЛЕРЬЕВИЧ
        </p>
        <p className={styles.ContactsParagraph}>
          <strong>Юридический адрес организации: </strong>143409, Россия,
          Московская область, г. Красногорск, ул. Успенская, д. 24
        </p>
        <p className={styles.ContactsParagraph}>
          <strong>ИНН: </strong>583518887053
        </p>
        <p className={styles.ContactsParagraph}>
          <strong>ОГРН: </strong>319508100027037
        </p>
        <p className={styles.ContactsParagraph}>
          <strong>Расчетный счет: </strong>40802810800002386718
        </p>
        <p className={styles.ContactsParagraph}>
          <strong>Банк: </strong>АО «ТИНЬКОФФ БАНК»
        </p>
        <p className={styles.ContactsParagraph}>
          <strong>ИНН банка: </strong>7710140679
        </p>
        <p className={styles.ContactsParagraph}>
          <strong>БИК банка: </strong>044525974
        </p>
        <p className={styles.ContactsParagraph}>
          <strong>Юридический адрес банка: </strong>Москва, 127287, ул.Хуторская
          2-я, д. 38А, стр. 26
        </p>
      </div>
    </section>
  );
};
