import React, { DOMAttributes } from "react";
import classNames from "classnames";
import ArrowDown from "ui-kit/assets/icons/ArrowDown.svg";
import ArrowLeft from "ui-kit/assets/icons/ArrowLeft.svg";
import ArrowRight from "ui-kit/assets/icons/ArrowRight.svg";
import Cart from "ui-kit/assets/icons/Cart.svg";
import Checkbox from "ui-kit/assets/icons/Checkbox.svg";
import DisplayGrid from "ui-kit/assets/icons/DisplayGrid.svg";
import DisplayLine from "ui-kit/assets/icons/DisplayLine.svg";
import Enter from "ui-kit/assets/icons/Enter.svg";
import Filter from "ui-kit/assets/icons/Filter.svg";
import Spinner from "ui-kit/assets/icons/Spinner.svg";
import User from "ui-kit/assets/icons/User.svg";
import Visibility from "ui-kit/assets/icons/Visibility.svg";
import VisibilityOff from "ui-kit/assets/icons/VisibilityOff.svg";
import styles from "./Icon.module.scss";

export type IconType =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Cart"
  | "Checkbox"
  | "DisplayGrid"
  | "DisplayLine"
  | "Enter"
  | "Filter"
  | "Spinner"
  | "User"
  | "Visibility"
  | "VisibilityOff";

const iconTypes = new Map([
  ["ArrowDown", <ArrowDown key={Date.now()} />],
  ["ArrowLeft", <ArrowLeft key={Date.now()} />],
  ["ArrowRight", <ArrowRight key={Date.now()} />],
  ["Cart", <Cart key={Date.now()} />],
  ["Checkbox", <Checkbox key={Date.now()} />],
  ["DisplayGrid", <DisplayGrid key={Date.now()} />],
  ["DisplayLine", <DisplayLine key={Date.now()} />],
  ["Enter", <Enter key={Date.now()} />],
  ["Filter", <Filter key={Date.now()} />],
  ["Spinner", <Spinner key={Date.now()} />],
  ["User", <User key={Date.now()} />],
  ["Visibility", <Visibility key={Date.now()} />],
  ["VisibilityOff", <VisibilityOff key={Date.now()} />],
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
