import Link from "next/link";
import React from "react";
import classNames from "classnames";
import { Search } from "components";
import styles from "./HeaderBottom.module.scss";

export interface IHeaderBottomProps {
  className?: string;
  isCatalogOpen?: boolean;
}

export const HeaderBottom: React.FC<IHeaderBottomProps> = ({
  className,
  isCatalogOpen,
}) => {
  return (
    <div
      className={classNames(styles.HeaderBottom, className, {
        [styles.HeaderBottom__catalogOpen]: isCatalogOpen,
      })}
    >
      <div className={styles.Desktop}>
        <Link href={`/mirrors`}>
          <a className={styles.Link}>Зеркала</a>
        </Link>
      </div>
      <Search className={styles.SearchControlsMobile} />
    </div>
  );
};
