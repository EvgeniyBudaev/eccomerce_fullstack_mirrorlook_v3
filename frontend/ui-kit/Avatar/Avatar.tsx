import Image from "next/image";
import React from "react";
import classNames from "classnames";
import styles from "./Avatar.module.scss";

export interface IAvatarProps {
  className?: string;
  image?: StaticImageData;
  size?: number;
  title?: string;
}

export const Avatar: React.FC<IAvatarProps> = ({
  className,
  image,
  size = 48,
  title,
}) => {
  const sizeBox = `${size - 4}px`;
  const sizeInner = `${size - 8}px`;
  const sizeWrapper = `${size}px`;

  return (
    <button
      className={classNames(styles.Avatar, className)}
      style={{ width: sizeInner, height: sizeInner }}
    >
      <div
        className={styles.AvatarInner}
        style={{ width: sizeInner, height: sizeInner }}
      >
        {image && (
          <Image
            className={styles.AvatarFace}
            src={image}
            alt=""
            width={sizeInner}
            height={sizeInner}
          />
        )}
        {title && <div className={styles.AvatarFace}>{title}</div>}
      </div>
      <div
        className={styles.AvatarBorder}
        style={{ width: sizeWrapper, height: sizeWrapper }}
      >
        <div
          className={styles.AvatarBorderBox}
          style={{ width: sizeBox, height: sizeBox }}
        />
      </div>
    </button>
  );
};
