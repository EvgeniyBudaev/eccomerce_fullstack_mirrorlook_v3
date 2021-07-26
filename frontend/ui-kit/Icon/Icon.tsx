import React, { DOMAttributes } from "react";
import classNames from "classnames";
import ArrowDown from "ui-kit/assets/icons/ArrowDown.svg";
import ArrowLeft from "ui-kit/assets/icons/ArrowLeft.svg";
import ArrowRight from "ui-kit/assets/icons/ArrowRight.svg";
import Basket from "ui-kit/assets/icons/Basket.svg";
import Checkbox from "ui-kit/assets/icons/Checkbox.svg";
import DisplayGrid from "ui-kit/assets/icons/DisplayGrid.svg";
import DisplayLine from "ui-kit/assets/icons/DisplayLine.svg";
import Filter from "ui-kit/assets/icons/Filter.svg";
import styles from "./Icon.module.scss";

export type IconType =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Basket"
  | "Checkbox"
  | "DisplayGrid"
  | "DisplayLine"
  | "Filter";

const iconTypes = new Map([
  ["ArrowDown", <ArrowDown key={Date.now()} />],
  ["ArrowLeft", <ArrowLeft key={Date.now()} />],
  ["ArrowRight", <ArrowRight key={Date.now()} />],
  ["Basket", <Basket key={Date.now()} />],
  ["Checkbox", <Checkbox key={Date.now()} />],
  ["DisplayGrid", <DisplayGrid key={Date.now()} />],
  ["DisplayLine", <DisplayLine key={Date.now()} />],
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
