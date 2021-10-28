import Image from "next/image";
import React from "react";
import banner1 from "./banner1.png";
import styles from "./HeaderBanner.module.scss";

export const HeaderBanner: React.FC = () => {
  return (
    <div className={styles.HeaderBanner}>
      <div className={styles.Container}>
        <div className={styles.Desktop}>
          <Image src={banner1} alt="" width="1200" height="56" />
        </div>
        <div className={styles.Mobile}>
          <Image src={banner1} alt="" width="300" height="20" />
        </div>
      </div>
    </div>
  );
};
