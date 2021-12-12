import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "ui-kit";
import styles from "./Collection.module.scss";

const slide1 = "/images/collection-1.png";
const slide2 = "/images/collection-2.jpg";
const slide3 = "/images/collection-3.jpg";
const slide4 = "/images/collection-4.jpg";

export const Collection: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = event => {
    event.preventDefault();
    router.push("/mirrors");
  };

  return (
    <section className={styles.Collection}>
      <div className={styles.CollectionInner}>
        <div className={styles.CollectionUnit}>
          <Image
            src={slide1}
            alt={""}
            layout="responsive"
            height={"624"}
            width={"960"}
          />
        </div>
        <div className={styles.CollectionUnit}>
          <Image
            src={slide2}
            alt={""}
            layout="responsive"
            height={"624"}
            width={"960"}
          />
        </div>
        <div className={styles.CollectionUnit}>
          <Image
            src={slide3}
            alt={""}
            layout="responsive"
            height={"624"}
            width={"960"}
          />
        </div>
        <div className={styles.CollectionUnit}>
          <Image
            src={slide4}
            alt={""}
            layout="responsive"
            height={"624"}
            width={"960"}
          />
        </div>
      </div>
      <div className={styles.CollectionControl}>
        <Button onClick={handleButtonClick}>Посмотреть все коллекции</Button>
      </div>
    </section>
  );
};
