import Image from "next/image";
import React, { useEffect, useRef } from "react";
import classnames from "classnames";
import {getInitial, setAtToStringAndPx} from "utils/string";
import styles from "./Avatar.module.scss";

export interface IAvatarProps {
  className?: string;
  altImage?: string;
  backgroundColor?: string;
  color?: string;
  image?: string;
  size?: number;
  user?: string;
}

export const Avatar: React.FC<IAvatarProps> = ({
  className,
  altImage,
  backgroundColor = "#E9E9ED",
  color = "#0A0A0B",
  image,
  size = 24,
  user,
}) => {
  const sizeInner = `${size}px`;
  const avatarRef = useRef(null);

  useEffect(() => {
    if (avatarRef.current) {
      avatarRef.current.style.setProperty(
        "--avatar-backgroundColor",
        backgroundColor
      );
      avatarRef.current.style.setProperty("--avatar-color", color);
      avatarRef.current.style.setProperty(
        "--avatar-height",
        setAtToStringAndPx(size)
      );
      avatarRef.current.style.setProperty(
        "--avatar-width",
        setAtToStringAndPx(size)
      );
      if (!user) {
        avatarRef.current.style.setProperty(
          "--avatar-border",
          "3px solid #0A0A0B"
        );
      }
    }
  }, [backgroundColor, color, size, user]);

  const renderContent = () => {
    if (user && !image) {
      return <div>{getInitial(user)}</div>;
    } else if (!user && image) {
      return (
        <Image
          className={styles.Face}
          src={image}
          alt={altImage}
          height={sizeInner}
          width={sizeInner}
        />
      );
    } else {
      return (
        <Image
          src="/images/avatar.png"
          alt="аватар"
          height={sizeInner}
          width={sizeInner}
        />
      );
    }
  };

  return (
    <div className={classnames(styles.Avatar, className)} ref={avatarRef}>
      <div className={classnames(styles.Inner)}>{renderContent()}</div>
    </div>
  );
};
