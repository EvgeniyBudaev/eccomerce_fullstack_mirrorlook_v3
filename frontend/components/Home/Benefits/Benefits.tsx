import React from "react";
import { Icon } from "ui-kit";
import styles from "./Benefits.module.scss";

export const Benefits: React.FC = () => {
  return (
    <section className={styles.Benefits}>
      <div className={styles.BenefitsInner}>
        <div className={styles.BenefitsUnit}>
          <div className={styles.BenefitsUnitCircleWrapper}>
            <div className={styles.BenefitsUnitCircle}>
              <Icon className={styles.BenefitsUnitIcon} type="Visa" />
            </div>
          </div>
          <div className={styles.BenefitsUnitTitle}>
            Наличный и безналичный расчет
          </div>
          <p className={styles.BenefitsUnitDescription}>
            оплата наличными или банковской картой
          </p>
        </div>
        <div className={styles.BenefitsUnit}>
          <div className={styles.BenefitsUnitCircleWrapper}>
            <div className={styles.BenefitsUnitCircle}>
              <Icon className={styles.BenefitsUnitIcon} type="Shipping" />
            </div>
          </div>
          <div className={styles.BenefitsUnitTitle}>Оперативная доставка</div>
          <p className={styles.BenefitsUnitDescription}>
            по Москве и Московской области
          </p>
        </div>
        <div className={styles.BenefitsUnit}>
          <div className={styles.BenefitsUnitCircleWrapper}>
            <div className={styles.BenefitsUnitCircle}>
              <Icon className={styles.BenefitsUnitIcon} type="Factory" />
            </div>
          </div>
          <div className={styles.BenefitsUnitTitle}>
            Собственное производство
          </div>
          <p className={styles.BenefitsUnitDescription}>
            авторская мастерская про изготовлению зеркал
          </p>
        </div>
        <div className={styles.BenefitsUnit}>
          <div className={styles.BenefitsUnitCircleWrapper}>
            <div className={styles.BenefitsUnitCircle}>
              <Icon className={styles.BenefitsUnitIcon} type="Star" />
            </div>
          </div>
          <div className={styles.BenefitsUnitTitle}>Индивидуальный подход</div>
          <p className={styles.BenefitsUnitDescription}>
            изготовим изделие под Ваш дизайн
          </p>
        </div>
      </div>
    </section>
  );
};
