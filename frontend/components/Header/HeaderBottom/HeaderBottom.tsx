import React from "react";
import HeaderBottomMenu from "./HeaderBottomMenu";
import styles from "./HeaderBottom.module.scss";

export const HeaderBottom: React.FC = () => {
  return (
    <div className={styles.HeaderBottom}>
      <div>Каталог-кнопка</div>
      <HeaderBottomMenu />
    </div>
  );
};
