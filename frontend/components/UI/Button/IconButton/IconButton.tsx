import React from "react";
import classNames from "classnames";
import { Button, Icon, IconType } from "components/UI";
import { IButtonProps } from "../Button";
import styles from "./IconButton.module.scss";

export interface IIconButtonProps extends IButtonProps {
  className?: string;
  type: IconType;
  onClick?: (e?: React.MouseEvent) => void;
}

export const IconButton: React.FC<IIconButtonProps> = ({
  className,
  type,
  onClick,
  ...rest
}) => {
  return (
    <Button
      className={classNames(styles.IconButton, className)}
      onClick={onClick}
      {...rest}
    >
      <Icon type={type} />
    </Button>
  );
};
