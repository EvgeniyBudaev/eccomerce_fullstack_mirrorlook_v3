import React from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

export const Header: React.FC = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};
