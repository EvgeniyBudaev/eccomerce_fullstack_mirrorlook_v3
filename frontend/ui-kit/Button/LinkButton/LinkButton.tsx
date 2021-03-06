import Link from "next/link";
import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./LinkButton.module.scss";

export interface ILinkButtonProps {
  children?: ReactNode;
  className?: string;
  href: string;
}

export const LinkButton: React.FC<ILinkButtonProps> = ({
  className,
  children,
  href,
}) => {
  return (
    <Link href={href}>
      <a className={classNames(styles.LinkButton, className)}>
        <span>{children}</span>
      </a>
    </Link>
  );
};
