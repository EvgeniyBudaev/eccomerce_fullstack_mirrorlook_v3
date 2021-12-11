import Image from "next/image";
import React from "react";
import styles from "./Advantages.module.scss";

const slide1 = "/images/collection-1.png";

export const Advantages: React.FC = () => {
  return (
    <section className={styles.Advantages}>
      <div className={styles.AdvantagesUnit}>
        <div className={styles.AdvantagesUnitImage}>
          <Image
            src={slide1}
            alt={""}
            //layout="responsive"
            height="657"
            width="492"
          />
        </div>
        <p className={styles.AdvantagesUnitText1}>Качественные материалы</p>
      </div>
    </section>
  );
};
