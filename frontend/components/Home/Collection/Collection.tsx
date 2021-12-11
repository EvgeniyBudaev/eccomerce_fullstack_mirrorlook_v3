import Image from "next/image";
import React from "react";
import styles from "./Collection.module.scss";

const slide1 = "/images/collection-1.png";
const slide2 = "/images/collection-2.jpg";
const slide3 = "/images/collection-3.jpg";
const slide4 = "/images/collection-4.jpg";

export const Collection: React.FC = () => {
  return (
    <section className={styles.Collection}>
      <div className={styles.CollectionUnit}>
        <Image
          className={styles.CollectionUnitImage}
          src={slide1}
          alt={""}
          layout="responsive"
          height={"624"}
          width={"960"}
        />
      </div>
      <div className={styles.CollectionUnit}>
        <Image
          className={styles.CollectionUnitImage}
          src={slide2}
          alt={""}
          layout="responsive"
          height={"624"}
          width={"960"}
        />
      </div>
      <div className={styles.CollectionUnit}>
        <Image
          className={styles.CollectionUnitImage}
          src={slide3}
          alt={""}
          layout="responsive"
          height={"624"}
          width={"960"}
        />
      </div>
      <div className={styles.CollectionUnit}>
        <Image
          className={styles.CollectionUnitImage}
          src={slide4}
          alt={""}
          layout="responsive"
          height={"624"}
          width={"960"}
        />
      </div>
    </section>
  );
};
