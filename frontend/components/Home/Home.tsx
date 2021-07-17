import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SliderSimple } from "ui-kit";

import card1 from "ui-kit/assets/images/home-mirrors3.jpg";
import card2 from "ui-kit/assets/images/home-consoles.jpg";
import styles from "./Home.module.scss";

export const Home: React.FC = () => {
  return (
    <div className={styles.Home}>
      <section>
        <SliderSimple />
      </section>
      <section className={styles.Catalog}>
        <div className={styles.CatalogImg}>
          <Link href={`/mirrors/`}>
            <a>
              <Image src={card1} alt="" width="585" height="380" />
            </a>
          </Link>
        </div>
        <div className={styles.CatalogImg}>
          <Link href={`/consoles/`}>
            <a>
              <Image src={card2} alt="" width="585" height="380" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};
