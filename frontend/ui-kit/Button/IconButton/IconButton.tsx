import React from "react";
import classNames from "classnames";
import { Button, Icon, IconType } from "ui-kit";
import { IButtonProps } from "../Button";
import styles from "./IconButton.module.scss";

export interface IIconButtonProps extends IButtonProps {
  className?: string;
  type: IconType;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
}

export const IconButton: React.FC<IIconButtonProps> = ({
  className,
  type,
  disabled = false,
  onClick,
  ...rest
}) => {
  return (
    <Button
      className={classNames(styles.IconButton, className)}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <Icon type={type} />
    </Button>
  );
};
