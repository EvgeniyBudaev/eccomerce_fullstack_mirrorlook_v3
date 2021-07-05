import { GetServerSideProps } from "next";
import axios from "axios";
import { Layout, LayoutMirrors, MirrorsList } from "components";
import { IMirror, IMirrorsResponse } from "types/mirror";

interface IMirrorsProps {
  entities: IMirror[];
  pageNumber: number;
  pagesCount: number;
}

export default function Mirrors(mirrorsResponse: IMirrorsProps): JSX.Element {
  console.log("[mirrorsResponse]", mirrorsResponse);
  console.log("mirrorsServerData.entities", mirrorsResponse.entities);
  return (
    <Layout>
      <LayoutMirrors>
        <MirrorsList mirrors={mirrorsResponse.entities} />
      </LayoutMirrors>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<IMirrorsProps> =
  async () => {
    const { data: mirrorsResponse } = await axios.get<IMirrorsResponse>(
      `http://127.0.0.1:8000/api/catalog/mirrors/`
    );
    const { entities, pageNumber, pagesCount } = mirrorsResponse;

    return {
      props: {
        entities,
        pageNumber,
        pagesCount,
      },
    };
  };
