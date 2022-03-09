import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
  onClose?: () => void;
}

export const CatalogDropDown = forwardRef(
  (
    { className, onClose }: ICatalogDropDownProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const router = useRouter();
    const { hasMounted } = useMounted();
    const scroll = useSelector(scrollSelector);
    const { isScroll } = hasMounted && scroll;

    const handleRouteTo = () => {
      if (router.pathname === "/mirrors") {
        onClose();
      } else {
        router.push(ROUTES.MIRRORS);
      }
    };

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
              <div onClick={handleRouteTo}>
                <>
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
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CatalogDropDown.displayName = "CatalogDropDown";
