import React, { DOMAttributes } from "react";
import classNames from "classnames";
import Filter from "components/UI/assets/icons/Filter.svg";
import styles from "./Icon.module.scss";

export type IconType = "Filter";

const iconTypes = new Map([["Filter", <Filter key={Date.now()} />]]);

export interface IIconProps extends DOMAttributes<HTMLSpanElement> {
  className?: string;
  type: IconType;
}

const getIcon = (type: IconType): JSX.Element =>
  iconTypes.get(type) as JSX.Element;

export const Icon: React.FC<IIconProps> = ({ className, type, ...rest }) => {
  return (
    <div className={classNames(styles.Icon, className)} {...rest}>
      {getIcon(type)}
    </div>
  );
};
