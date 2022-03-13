import Image from "next/image";
import React from "react";
import useInView from "react-cool-inview";
import { ROUTES } from "constants/routes";
import { LinkButton } from "ui-kit";
import styles from "./Collections.module.scss";

const slide1 = "/images/collection-1.png";
const slide2 = "/images/collection-2.jpg";
const slide3 = "/images/collection-3.jpg";
const slide4 = "/images/collection-4.jpg";

export const Collections: React.FC = () => {
  const { observe, inView } = useInView({ unobserveOnEnter: true });

  return (
    <div className={styles.CollectionsWrapper} ref={observe}>
      {inView && (
        <section className={styles.Collections}>
          <div className={styles.CollectionsInner}>
            <div className={styles.CollectionsUnit}>
              <Image
                src={slide1}
                alt={""}
                layout="responsive"
                priority
                height={"624"}
                width={"960"}
              />
            </div>
            <div className={styles.CollectionsUnit}>
              <Image
                src={slide2}
                alt={""}
                layout="responsive"
                priority
                height={"624"}
                width={"960"}
              />
            </div>
            <div className={styles.CollectionsUnit}>
              <Image
                src={slide3}
                alt={""}
                layout="responsive"
                priority
                height={"624"}
                width={"960"}
              />
            </div>
            <div className={styles.CollectionsUnit}>
              <Image
                src={slide4}
                alt={""}
                layout="responsive"
                priority
                height={"624"}
                width={"960"}
              />
            </div>
          </div>
          <div className={styles.CollectionsControl}>
            <LinkButton
              className={styles.ItemButton}
              href={ROUTES.MIRRORS_DEFAULT}
            >
              Посмотреть все коллекции
            </LinkButton>
          </div>
        </section>
      )}
    </div>
  );
};
