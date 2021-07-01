import Link from "next/link";
import LogoIcon from "./Logo.svg";
import styles from "./Logo.module.scss";

export default function Logo():JSX.Element {
  return (
    <Link href={"/"}>
      <a className={styles.Logo}>
        <LogoIcon />
      </a>
    </Link>
  );
}
