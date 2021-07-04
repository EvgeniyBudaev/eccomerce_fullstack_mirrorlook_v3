import React, { DOMAttributes } from "react";
import classNames from "classnames";
import ArrowDown from "components/UI/assets/icons/ArrowDown.svg";
import Checkbox from "components/UI/assets/icons/Checkbox.svg";
import Filter from "components/UI/assets/icons/Filter.svg";
import styles from "./Icon.module.scss";

export type IconType = "ArrowDown" | "Checkbox" | "Filter";

const iconTypes = new Map([
  ["ArrowDown", <ArrowDown key={Date.now()} />],
  ["Checkbox", <Checkbox key={Date.now()} />],
  ["Filter", <Filter key={Date.now()} />],
]);

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
