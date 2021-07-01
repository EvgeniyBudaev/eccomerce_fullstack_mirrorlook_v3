import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

export default function Header(): JSX.Element {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}
