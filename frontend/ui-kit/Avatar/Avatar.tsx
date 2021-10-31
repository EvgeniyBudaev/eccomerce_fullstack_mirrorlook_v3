import Image from "next/image";
import React from "react";
import classNames from "classnames";
import styles from "./Avatar.module.scss";

export interface IAvatarProps {
  className?: string;
  classNameSmallCircle?: string;
  image?: StaticImageData;
  size?: number;
  title?: string;
}

export const Avatar: React.FC<IAvatarProps> = ({
  className,
  classNameSmallCircle,
  image,
  size = 46,
  title,
}) => {
  const sizeBox = `${size - 4}px`;
  const sizeInner = `${size - 8}px`;
  const sizeTitle = `${size / 2}px`;
  const sizeWrapper = `${size}px`;

  return (
    <button
      className={classNames(styles.Avatar, className)}
      style={{ width: sizeInner, height: sizeInner }}
    >
      <div
        className={classNames(styles.AvatarInner, classNameSmallCircle)}
        style={{
          width: sizeInner,
          height: sizeInner,
        }}
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
        {title && (
          <div className={styles.AvatarFace} style={{ fontSize: sizeTitle }}>
            {title}
          </div>
        )}
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
