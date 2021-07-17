import Link from "next/link";
import React from "react";
import styles from "./HeaderBottom.module.scss";

export const HeaderBottom: React.FC = () => {
  return (
    <div className={styles.HeaderBottom}>
      <div className={styles.Container}>
        <Link href={`/mirrors/`}>
          <a className={styles.Link}>Зеркала</a>
        </Link>
        <Link href={`/consoles/`}>
          <a className={styles.Link}>Консоли</a>
        </Link>
      </div>
    </div>
  );
};
