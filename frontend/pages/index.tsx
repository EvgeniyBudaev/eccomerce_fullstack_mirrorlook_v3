import Link from "next/link";
import { Layout } from "components";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <section>Slider Component</section>
      <section>
        <h2>Каталог</h2>
        <Link href={`/mirrors/`}>
          <a>Зеркала</a>
        </Link>
        <div>
          <hr />
        </div>
        <Link href={`/consoles/`}>
          <a>Консоли</a>
        </Link>
      </section>
    </Layout>
  );
}
