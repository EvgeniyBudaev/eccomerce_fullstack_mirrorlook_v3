import Link from "next/link";
import LogoIcon from "./Logo.svg";

export default function Logo():JSX.Element {
  return (
    <Link href={"/"}>
      <a>
        <LogoIcon />
      </a>
    </Link>
  );
}
