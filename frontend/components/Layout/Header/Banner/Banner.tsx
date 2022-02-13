import Image from "next/image";
import React from "react";
import classNames from "classnames";
import banner1 from "ui-kit/assets/images/banner-1.jpg";
import styles from "./Banner.module.scss";

export interface IBannerProps {
  className?: string;
}

export const Banner: React.FC<IBannerProps> = ({ className }) => {
  return (
    <div className={classNames(styles.Banner, className)}>
      <div className={styles.Container}>
        <div className={styles.Desktop}>
          <Image src={banner1} alt="" priority width="1200" height="60" />
        </div>
        <div className={styles.Mobile}>
          <Image src={banner1} alt="" priority width="300" height="20" />
        </div>
      </div>
    </div>
  );
};
