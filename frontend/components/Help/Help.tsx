import React from "react";
import { Breadcrumbs } from "ui-kit";
import styles from "./Help.module.scss";

export const Help: React.FC = () => {
  return (
    <section className={styles.Help}>
      <Breadcrumbs getDefaultTextGenerator={() => "Доставка и оплата"} />
      <h1 className={styles.HelpTitle}>Доставка и оплата</h1>
      <h2 className={styles.HelpSubTitle}>Как оформить заказ</h2>
      <p className={styles.HelpParagraph}>
        Оформить заказ на нашем сайте легко. Просто добавьте выбранные товары в
        корзину, а затем перейдите на страницу Корзина, проверьте правильность
        заказанных позиций и нажмите кнопку «Перейти к оформлению». Процесс
        оформления состоит из трёх шагов:
      </p>
      <h3 className={styles.HelpSubTitle}>Заполнение адреса</h3>
      <p className={styles.HelpParagraph}>
        Заполните обязательное поле адрес доставки или выберите адрес на карте.
        Дополнительно можете указать номер квартиры, этажа, подъезда, домофона и
        оставить комментарий для курьера.
      </p>
      <h3 className={styles.HelpSubTitle}>Получатель</h3>
      <p className={styles.HelpParagraph}>
        Введите данные получателя: имя, фамилия, номер телефона, адрес,
        электронной почты.
      </p>
      <h3 className={styles.HelpSubTitle}>Оформление заказа</h3>
      <p className={styles.HelpParagraph}>
        Проверьте правильность введенных данных: адрес доставки, заказанные
        позиции, данные о получателе. Выберите способ оплаты. После проверки
        проверки данных нажмите кнопку «Оформить заказ». Вам на указанную
        электронную почту и на почту магазина придет письмо с информацией о
        заказе. После оформления заказа с Вами свяжется менеджер магазина для
        уточнения деталей.
      </p>
      <p className={styles.HelpParagraph}>
        Наш сервис запоминает данные о пользователе, информацию о заказе и в
        следующий раз предложит вам повторить к вводу данные предыдущего заказа.
      </p>
    </section>
  );
};
