import HeaderBottomMenu from "./HeaderBottomMenu";
import styles from "./HeaderBottom.module.scss";

export default function HeaderBottom(): JSX.Element {
  return (
    <div className={styles.HeaderBottom}>
      <div>Каталог-кнопка</div>
      <HeaderBottomMenu />
    </div>
  );
}
