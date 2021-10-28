import React from "react";
import { newGuid } from "utils/guid";
import ArrowBack from "ui-kit/assets/icons/ArrowBack.svg";
import ArrowDown from "ui-kit/assets/icons/ArrowDown.svg";
import ArrowLeft from "ui-kit/assets/icons/ArrowLeft.svg";
import ArrowRight from "ui-kit/assets/icons/ArrowRight.svg";
import Attention from "ui-kit/assets/icons/Attention.svg";
import Card from "ui-kit/assets/icons/Card.svg";
import Cart from "ui-kit/assets/icons/Cart.svg";
import Cash from "ui-kit/assets/icons/Cash.svg";
import Checkbox from "ui-kit/assets/icons/Checkbox.svg";
import Close from "ui-kit/assets/icons/Close.svg";
import Defence from "ui-kit/assets/icons/Defence.svg";
import DisplayGrid from "ui-kit/assets/icons/DisplayGrid.svg";
import DisplayLine from "ui-kit/assets/icons/DisplayLine.svg";
import Enter from "ui-kit/assets/icons/Enter.svg";
import Filter from "ui-kit/assets/icons/Filter.svg";
import House from "ui-kit/assets/icons/House.svg";
import LogoShort from "ui-kit/assets/icons/LogoShort.svg";
import Search from "ui-kit/assets/icons/Search.svg";
import Spinner from "ui-kit/assets/icons/Spinner.svg";
import Trash from "ui-kit/assets/icons/Trash.svg";
import User from "ui-kit/assets/icons/User.svg";
import User2 from "ui-kit/assets/icons/User2.svg";
import Visibility from "ui-kit/assets/icons/Visibility.svg";
import VisibilityOff from "ui-kit/assets/icons/VisibilityOff.svg";

export type IconType =
  | "ArrowBack"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Attention"
  | "Card"
  | "Cart"
  | "Cash"
  | "Checkbox"
  | "Close"
  | "Defence"
  | "DisplayGrid"
  | "DisplayLine"
  | "Enter"
  | "Filter"
  | "House"
  | "LogoShort"
  | "Search"
  | "Spinner"
  | "Trash"
  | "User"
  | "User2"
  | "Visibility"
  | "VisibilityOff";

export const iconTypes = new Map([
  ["ArrowBack", <ArrowBack key={newGuid()} />],
  ["ArrowDown", <ArrowDown key={newGuid()} />],
  ["ArrowLeft", <ArrowLeft key={newGuid()} />],
  ["ArrowRight", <ArrowRight key={newGuid()} />],
  ["Attention", <Attention key={newGuid()} />],
  ["Card", <Card key={newGuid()} />],
  ["Cart", <Cart key={newGuid()} />],
  ["Cash", <Cash key={newGuid()} />],
  ["Checkbox", <Checkbox key={newGuid()} />],
  ["Close", <Close key={newGuid()} />],
  ["Defence", <Defence key={newGuid()} />],
  ["DisplayGrid", <DisplayGrid key={newGuid()} />],
  ["DisplayLine", <DisplayLine key={newGuid()} />],
  ["Enter", <Enter key={newGuid()} />],
  ["Filter", <Filter key={newGuid()} />],
  ["House", <House key={newGuid()} />],
  ["LogoShort", <LogoShort key={newGuid()} />],
  ["Search", <Search key={newGuid()} />],
  ["Spinner", <Spinner key={newGuid()} />],
  ["Trash", <Trash key={newGuid()} />],
  ["User", <User key={newGuid()} />],
  ["User2", <User2 key={newGuid()} />],
  ["Visibility", <Visibility key={newGuid()} />],
  ["VisibilityOff", <VisibilityOff key={newGuid()} />],
]);
