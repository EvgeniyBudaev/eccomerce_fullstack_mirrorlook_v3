import Image from "next/image";
import Link from "next/link";
import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";
import { ROUTES } from "constants/routes";
import { scrollSelector } from "ducks/selectors";
import { useMounted } from "hooks/useMounted";
import { useSelector } from "hooks";
import styles from "./CatalogDropDown.module.scss";

const categories1 = "/images/mirrors.png";

export interface ICatalogDropDownProps {
  className?: string;
  ref: ForwardedRef<HTMLDivElement>;
}

export const CatalogDropDown = forwardRef(
  (
    { className }: ICatalogDropDownProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const { hasMounted } = useMounted();
    const scroll = useSelector(scrollSelector);
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
              <Link href={ROUTES.MIRRORS}>
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
          </div>
        </div>
      </div>
    );
  }
);

CatalogDropDown.displayName = "CatalogDropDown";
