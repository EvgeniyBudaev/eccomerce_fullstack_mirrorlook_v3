import Image from "next/image";
import Link from "next/link";
import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";
import card1 from "ui-kit/assets/images/home-mirrors3.jpg";
import card2 from "ui-kit/assets/images/home-consoles.jpg";
import styles from "./CatalogDropDown.module.scss";

export interface ICatalogDropDownProps {
  className?: string;
  ref: ForwardedRef<HTMLDivElement>;
}

export const CatalogDropDown = forwardRef(
  (
    { className }: ICatalogDropDownProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={classNames(styles.CatalogDropDown, className)} ref={ref}>
        <div className={styles.CatalogDropDownContainer}>
          <div className={styles.CatalogDropDownImages}>
            <div className={styles.CatalogDropDownImage}>
              <Link href={`/mirrors/`}>
                <a>
                  <Image src={card1} alt="" width="200" height="200" />
                </a>
              </Link>
            </div>
            <div className={styles.CatalogDropDownImage}>
              <Link href={`/consoles/`}>
                <a>
                  <Image src={card2} alt="" width="200" height="200" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CatalogDropDown.displayName = "CatalogDropDown";
