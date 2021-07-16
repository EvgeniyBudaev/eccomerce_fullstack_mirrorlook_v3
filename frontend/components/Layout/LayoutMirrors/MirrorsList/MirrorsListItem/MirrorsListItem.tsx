import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IMirror } from "types/mirror";
import { IconButton } from "../../../../UI";
import styles from "./MirrorsListItem.module.scss";

export interface IMirrorsListItemProps {
  mirror: IMirror;
}

export const MirrorsListItem: React.FC<IMirrorsListItemProps> = ({
  mirror,
}) => {
  return (
    <li className={styles.MirrorsListItem}>
      <div className={styles.Wrapper}>
        <div className={styles.Content}>
          <div className={styles.ContentImg}>
            <Link href={`/mirrors/${mirror.product_slug}`}>
              <a>
                <Image
                  src="https://vmk-mebel.ru/wp-content/uploads/2019/03/restavratsiya-zerkala-e1553860985233.jpg"
                  alt=""
                  width="202"
                  height="216"
                />
              </a>
            </Link>
          </div>
          <div className={styles.ContentDescription}>
            <p className={styles.ContentTitle}>{mirror.title}</p>
          </div>
        </div>
        <div className={styles.Footer}>
          <div className={styles.FooterTop}>
            <div className={styles.FooterBottomLabel}>Цена:</div>
            <IconButton className={styles.FooterTopBasket} type={"Basket"} />
          </div>
          <div className={styles.FooterBottom}>
            <div className={styles.FooterBottomNum}>{mirror.price} ₽</div>
            <div className={styles.FooterBottomStatus}>В наличии</div>
          </div>
        </div>
      </div>
    </li>
  );
};
