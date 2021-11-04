import React, { ForwardedRef, forwardRef, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { Overlay } from "ui-kit";

export interface ISidebarProps {
  className?: string;
  children?: ReactNode;
  ref: ForwardedRef<HTMLDivElement>;
  transition?: number;
  isActive?: boolean;
  onClose?: (event: React.MouseEvent) => void;
}

export const Sidebar = forwardRef(
  (
    {
      className,
      children,
      transition = 300,
      isActive = false,
      onClose,
    }: ISidebarProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <>
        <Overlay timeout={transition} onClick={onClose} isActive={isActive} />
        <CSSTransition
          className={classNames("Sidebar", className)}
          in={isActive}
          nodeRef={ref}
          timeout={transition}
          unmountOnExit
        >
          <div ref={ref}>{children}</div>
        </CSSTransition>
      </>
    );
  }
);

Sidebar.displayName = "Sidebar";
