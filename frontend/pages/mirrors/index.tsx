import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import { Layout, LayoutMirrors } from "components";
import { IMirror } from "types/mirror";
import { IFilter, IPaging } from "types/filter";
import { IFilterResponse } from "api/types";

interface IMirrorsProps {
  entities: IMirror[];
  paging: IPaging;
}

export default function MirrorsPage(
  mirrorsResponse: IMirrorsProps
): JSX.Element {
  return (
    <Layout>
      <LayoutMirrors mirrorsResponse={mirrorsResponse} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<IFilter<IMirror>> = async ({
  query: {
    page = 1,
    category = "",
    form = "",
    frame_color = "",
    ordering = "",
  },
}) => {
  // console.log("[PAGE]", page);
  // console.log("[category]", category);
  // console.log("[form]", form);
  const url = encodeURI(
    `http://127.0.0.1:8000/api/v1/products/?catalog_slug=mirrors&category=${category}&form=${form}&frame_color=${frame_color}&ordering=${ordering}&page=${page}`
  );

  const { data: mirrorsResponse } = await axios.get<IFilterResponse<IMirror>>(
    url
  );

  const { entities, pageItemsCount, totalItemsCount } = mirrorsResponse;
  const pagesCount = Math.max(Math.ceil(totalItemsCount / pageItemsCount), 1);

  return {
    props: {
      entities: entities,
      paging: {
        pageItemsCount: pageItemsCount,
        pageNumber: 1,
        pagesCount: pagesCount,
        totalItemsCount: totalItemsCount,
      },
    },
  };
};
