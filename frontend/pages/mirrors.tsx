import { GetServerSideProps } from "next";
import React from "react";
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
      `http://localhost:8000/api/catalog/mirrors/`
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
