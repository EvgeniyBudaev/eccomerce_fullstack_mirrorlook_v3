import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import { Layout, LayoutMirrors } from "components";
import { IMirror } from "types/mirror";
import { IFilter, IPaging } from "types/filter";

interface IMirrorsProps {
  entities: IMirror[];
  paging: IPaging;
}

export default function Mirrors(mirrorsResponse: IMirrorsProps): JSX.Element {
  return (
    <Layout>
      <LayoutMirrors mirrorsResponse={mirrorsResponse} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<IFilter<IMirror>> = async ({
  query: { value = "", page = 1 },
}) => {
  const { data: mirrorsResponse } = await axios.get<IFilter<IMirror>>(
    `http://localhost:8000/api/catalog/mirrors?value=${value}&page=${page}`
  );
  const { entities, paging } = mirrorsResponse;

  return {
    props: {
      entities,
      paging,
    },
  };
};
