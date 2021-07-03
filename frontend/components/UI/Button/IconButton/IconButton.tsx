import React, { ReactNode } from "react";
import classNames from "classnames";
import { Button, Icon, IconType } from "components/UI";
import "./IconButton.module.scss";

export interface IIconButtonProps {
  className?: string;
  type?: IconType;
  children?: ReactNode;
  onClick?: (e?: React.MouseEvent) => void;
}

export const IconButton: React.FC<IIconButtonProps> = ({
  className,
  type,
  children,
  onClick,
  ...rest
}) => {
  return (
    <Button
      className={classNames("IconButton", className)}
      onClick={onClick}
      {...rest}
    >
      <Icon type={type} />
      {children}
    </Button>
  );
};
