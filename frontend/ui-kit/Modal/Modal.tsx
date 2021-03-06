import React, { useState, useEffect } from "react";
import { default as ReactModal } from "react-responsive-modal";
import classNames from "classnames";
import { Button, Icon } from "ui-kit";
import "react-responsive-modal/styles.css";
import classes from "./Modal.module.scss";

type IModalSize = "medium";

export interface IModalProps {
  className?: string;
  children?: React.ReactNode;
  size?: IModalSize;
  isCenter?: boolean;
  isOpen?: boolean;
  onCloseModal?: () => void;
}

export const Modal = ({
  className,
  children,
  size = "medium",
  isCenter = true,
  isOpen,
  onCloseModal,
}: IModalProps): JSX.Element => {
  const defaultClassNames = {
    modal: classNames(classes.ModalDefault, className, {
      [classes.ModalDefault__medium]: size === "medium",
    }),
    closeButton: classNames(classes.ModalDefaultCloseButton),
  };
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (isOpen && scrollbarWidth) {
      const _styles = {
        modal: { marginRight: `${scrollbarWidth + 16}px` },
      };
      setStyles(_styles);
      document.body.classList.add("Modal__open");
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      setStyles({});
      document.body.style.removeProperty("padding-right");
      document.body.classList.remove("Modal__open");
    };
  }, [isOpen]);

  return (
    <ReactModal
      classNames={defaultClassNames}
      center={isCenter}
      closeIcon={<Icon type="Close" />}
      styles={styles}
      open={isOpen}
      onClose={onCloseModal}
    >
      <div className={classes.Modal}>{children}</div>
    </ReactModal>
  );
};

interface IModalHeaderProps {
  className?: string;
  align?: "start" | "center" | "end";
  children?: React.ReactNode;
}

// eslint-disable-next-line react/display-name
Modal.Header = ({
  className,
  align,
  children,
}: IModalHeaderProps): JSX.Element => {
  return (
    <div
      className={classNames(classes.ModalHeader, className, {
        [classes.ModalHeader__start]: align === "start",
        [classes.ModalHeader__center]: align === "center",
        [classes.ModalHeader__end]: align === "end",
      })}
    >
      {children}
    </div>
  );
};

interface IModalContentProps {
  className?: string;
  children?: React.ReactNode;
}

// eslint-disable-next-line react/display-name
Modal.Content = ({ className, children }: IModalContentProps): JSX.Element => {
  return (
    <div className={classNames(classes.ModalContent, className)}>
      {children}
    </div>
  );
};

interface IModalFooterProps {
  className?: string;
  buttonSubmitText?: string;
  onSubmit?: () => void;
}

// eslint-disable-next-line react/display-name
Modal.Footer = ({
  className,
  buttonSubmitText = "??????????????",
  onSubmit,
}: IModalFooterProps): JSX.Element => {
  return (
    <div className={classNames(classes.ModalFooter, className)}>
      <Button onClick={onSubmit}>{buttonSubmitText}</Button>
    </div>
  );
};
