import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import { Layout } from "components";
import { Products } from "components/Catalog";
import { IMirror } from "types/mirror";
import { IFilter, IPaging } from "types/filter";
import { IFilterResponse } from "api/types";
import { CatalogNames } from "constants/names";

interface IMirrorsProps {
  catalogName: string;
  entities: IMirror[];
  paging: IPaging;
}

export default function MirrorsPage(
  mirrorsResponse: IMirrorsProps
): JSX.Element {
  return (
    <Layout>
      <Products productsResponse={mirrorsResponse} />
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
      catalogName: entities[0] ? entities[0].catalog : CatalogNames.MIRRORS,
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
