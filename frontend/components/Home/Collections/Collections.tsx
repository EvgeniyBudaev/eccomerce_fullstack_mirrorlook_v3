import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "ui-kit";
import styles from "./Collections.module.scss";

const slide1 = "/images/collection-1.png";
const slide2 = "/images/collection-2.jpg";
const slide3 = "/images/collection-3.jpg";
const slide4 = "/images/collection-4.jpg";

export const Collections: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = event => {
    event.preventDefault();
    router.push("/mirrors");
  };

  return (
    <section className={styles.Collections}>
      <div className={styles.CollectionsInner}>
        <div className={styles.CollectionsUnit}>
          <Image
            src={slide1}
            alt={""}
            layout="responsive"
            height={"624"}
            width={"960"}
          />
        </div>
        <div className={styles.CollectionsUnit}>
          <Image
            src={slide2}
            alt={""}
            layout="responsive"
            height={"624"}
            width={"960"}
          />
        </div>
        <div className={styles.CollectionsUnit}>
          <Image
            src={slide3}
            alt={""}
            layout="responsive"
            height={"624"}
            width={"960"}
          />
        </div>
        <div className={styles.CollectionsUnit}>
          <Image
            src={slide4}
            alt={""}
            layout="responsive"
            height={"624"}
            width={"960"}
          />
        </div>
      </div>
      <div className={styles.CollectionsControl}>
        <Button onClick={handleButtonClick}>Посмотреть все коллекции</Button>
      </div>
    </section>
  );
};
