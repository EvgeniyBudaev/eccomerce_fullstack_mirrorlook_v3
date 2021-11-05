import Image from "next/image";
import Link from "next/link";
import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";
import categories1 from "ui-kit/assets/images/categories-1.jpg";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
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
    const { hasMounted } = useMounted();
    const scroll = useTypedSelector(state => state.scroll);
    const { isScroll } = hasMounted && scroll;

    return (
      <div
        className={classNames(styles.CatalogDropDown, className, {
          [styles.CatalogDropDown__isScroll]: isScroll,
        })}
        ref={ref}
      >
        <div className={styles.CatalogDropDownContainer}>
          <div className={styles.CatalogDropDownList}>
            <div className={styles.CatalogDropDownListItem}>
              <Link href={`/mirrors`}>
                <a>
                  <Image
                    className={styles.CatalogDropDownListItemImage}
                    alt=""
                    priority
                    src={categories1}
                    width="157"
                    height="85"
                  />
                  <div className={styles.CatalogDropDownListItemTitle}>
                    Зеркала
                  </div>
                </a>
              </Link>
            </div>
            <div className={styles.CatalogDropDownListItem}>
              <Link href={`/consoles`}>
                <a>
                  <Image
                    className={styles.CatalogDropDownListItemImage}
                    alt=""
                    priority
                    src={categories1}
                    width="157"
                    height="85"
                  />
                  <div className={styles.CatalogDropDownListItemTitle}>
                    Консоли
                  </div>
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
