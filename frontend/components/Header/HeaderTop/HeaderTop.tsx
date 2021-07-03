import { Logo } from "components";
import styles from "./HeaderTop.module.scss";

export default function HeaderTop(): JSX.Element {
  return (
    <div className={styles.HeaderTop}>
      <Logo />
    </div>
  );
}
