import React from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderCenter from "./HeaderCenter";
import HeaderTop from "./HeaderTop";

export const Header: React.FC = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
    </header>
  );
};
