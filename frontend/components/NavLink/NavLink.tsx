import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ReactElementLike } from "prop-types";

export interface INavLinkProps {
  activeClassName?: string;
  href: string;
  children?: ReactElementLike;
}

export const NavLink: React.FC<INavLinkProps> = ({
  activeClassName = "isActive",
  href,
  children,
}) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} ${activeClassName}`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
