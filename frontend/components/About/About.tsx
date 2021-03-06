import React from "react";
import { Breadcrumbs } from "ui-kit";
import styles from "./About.module.scss";

export const About: React.FC = () => {
  return (
    <div className={styles.About}>
      <Breadcrumbs getDefaultTextGenerator={() => "О нас"} />
      <h1 className={styles.AboutTitle}>Информация о магазине</h1>
      <p className={styles.AboutParagraph}>
        <strong>Компания «Mirror Look»</strong> основана в 2021 году. Мы создали
        наш бренд, чтобы чтобы поставлять на Российский рынок зеркала и
        зеркальный декор, разработанный лучшими дизайнерами, соответствующий
        актуальным тенденциям и направлениям, высокого качества и по доступным
        ценам.
      </p>
      <p className={styles.AboutParagraph}>
        Наши изделия изготовлены из высококачественных материалов по современным
        технологиям на фабриках ведущих производителей отрасли. Мы сами
        формируем коллекции и ассортимент, учитывая опыт специалистов, известных
        в мире дизайна интерьера.
      </p>
      <p className={styles.AboutParagraph}>
        Мы контролируем качество товара с начала его производства до момента
        отгрузки покупателю.
      </p>
    </div>
  );
};
