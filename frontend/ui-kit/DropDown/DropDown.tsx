import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { TRANSITION } from "constants/transition";
import styles from "./DropDown.module.scss";

export interface IDropDownProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
}

export const DropDown: React.FC<IDropDownProps> = ({
  className,
  children,
  isOpen,
}: IDropDownProps) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      className={className}
      in={isOpen}
      nodeRef={nodeRef}
      timeout={TRANSITION}
      unmountOnExit
    >
      <div ref={nodeRef}>
        <div className={classNames(styles.DropDown)}>{children}</div>
      </div>
    </CSSTransition>
  );
};
