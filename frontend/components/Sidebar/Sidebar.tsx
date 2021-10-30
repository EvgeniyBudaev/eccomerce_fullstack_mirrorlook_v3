import Link from "next/link";
import Image from "next/image";
import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";
import styles from "./Sidebar.module.scss";

export interface ISidebarProps {
  className?: string;
  ref: ForwardedRef<HTMLDivElement>;
}

export const Sidebar = forwardRef(
  (
    { className }: ISidebarProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={classNames(styles.Sidebar, className)} ref={ref}>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";
