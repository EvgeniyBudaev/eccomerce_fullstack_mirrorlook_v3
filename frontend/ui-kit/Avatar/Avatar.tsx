import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { getInitial, setAtToStringAndPx } from "utils/string";
import styles from "./Avatar.module.scss";

export interface IAvatarProps {
  className?: string;
  altImage?: string;
  backgroundColor?: string;
  color?: string;
  image?: string;
  size?: number;
  user?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Avatar: React.FC<IAvatarProps> = ({
  className,
  altImage = "",
  backgroundColor = "#E9E9ED",
  color = "#0A0A0B",
  image = "",
  size = 24,
  user = "",
  onClick,
}) => {
  const [imageAvatar, setImageAvatar] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const sizeInner = `${size}px`;
  const avatarRef = useRef(null);

  useEffect(() => {
    setImageAvatar(image);
    setUserAvatar(user);
  }, [image, user]);

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

  const renderContent = (user: string, image: string) => {
    if (user && !image) {
      return getInitial(user);
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
    <div
      className={classnames(styles.Avatar, className)}
      ref={avatarRef}
      onClick={onClick}
    >
      <div className={classnames(styles.Inner)}>
        {renderContent(userAvatar, imageAvatar)}
      </div>
    </div>
  );
};
