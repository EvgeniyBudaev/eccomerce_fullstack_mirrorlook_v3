import React, { DOMAttributes } from "react";
import classNames from "classnames";
import { newGuid } from "utils/guid";
import ArrowBack from "ui-kit/assets/icons/ArrowBack.svg";
import ArrowDown from "ui-kit/assets/icons/ArrowDown.svg";
import ArrowLeft from "ui-kit/assets/icons/ArrowLeft.svg";
import ArrowRight from "ui-kit/assets/icons/ArrowRight.svg";
import Attention from "ui-kit/assets/icons/Attention.svg";
import Cart from "ui-kit/assets/icons/Cart.svg";
import Checkbox from "ui-kit/assets/icons/Checkbox.svg";
import DisplayGrid from "ui-kit/assets/icons/DisplayGrid.svg";
import DisplayLine from "ui-kit/assets/icons/DisplayLine.svg";
import Enter from "ui-kit/assets/icons/Enter.svg";
import Filter from "ui-kit/assets/icons/Filter.svg";
import LogoShort from "ui-kit/assets/icons/LogoShort.svg";
import Spinner from "ui-kit/assets/icons/Spinner.svg";
import User from "ui-kit/assets/icons/User.svg";
import Visibility from "ui-kit/assets/icons/Visibility.svg";
import VisibilityOff from "ui-kit/assets/icons/VisibilityOff.svg";
import styles from "./Icon.module.scss";

export type IconType =
  | "ArrowBack"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Attention"
  | "Cart"
  | "Checkbox"
  | "DisplayGrid"
  | "DisplayLine"
  | "Enter"
  | "Filter"
  | "LogoShort"
  | "Spinner"
  | "User"
  | "Visibility"
  | "VisibilityOff";

const iconTypes = new Map([
  ["ArrowBack", <ArrowBack key={newGuid()} />],
  ["ArrowDown", <ArrowDown key={newGuid()} />],
  ["ArrowLeft", <ArrowLeft key={newGuid()} />],
  ["ArrowRight", <ArrowRight key={newGuid()} />],
  ["Attention", <Attention key={newGuid()} />],
  ["Cart", <Cart key={newGuid()} />],
  ["Checkbox", <Checkbox key={newGuid()} />],
  ["DisplayGrid", <DisplayGrid key={newGuid()} />],
  ["DisplayLine", <DisplayLine key={newGuid()} />],
  ["Enter", <Enter key={newGuid()} />],
  ["Filter", <Filter key={newGuid()} />],
  ["LogoShort", <LogoShort key={newGuid()} />],
  ["Spinner", <Spinner key={newGuid()} />],
  ["User", <User key={newGuid()} />],
  ["Visibility", <Visibility key={newGuid()} />],
  ["VisibilityOff", <VisibilityOff key={newGuid()} />],
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
