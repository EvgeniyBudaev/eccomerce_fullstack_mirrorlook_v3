import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios from "axios";
import { IFilterResponse } from "api/types";
import { Layout } from "components";
import { Products } from "components/Catalog";
import { CatalogNames } from "constants/names";
import { backendBase } from "constants/paths";
import { IFilter, IPaging } from "types/filter";
import { IMirror } from "types/mirror";
import { AlertError } from "utils/alert";

interface IMirrorsProps {
  catalogName: string;
  entities: IMirror[];
  error?: string;
  paging: IPaging;
}

export default function MirrorsPage(props: IMirrorsProps): JSX.Element {
  const { error } = props;
  if (error) {
    console.error("Ошибка! (frontend/pages/mirrors/index.tsx): ", error);
  }

  useEffect(() => {
    if (error) {
      AlertError("Ошибка на странице зеркал!", error);
    }
  }, [error]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Каталог зеркал | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Каталог зеркал | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Каталог зеркал | Интернет-магазин зеркал MirrorLook"
        />
        <title>Каталог зеркал | MirrorLook</title>
      </Head>
      <Layout>
        <AlertContainer />
        <Products productsResponse={props} />
      </Layout>
    </>
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
    `${backendBase}api/v1/products/?catalog_slug=mirrors&category=${category}&form=${form}&frame_color=${frame_color}&ordering=${ordering}&page=${page}`
  );
  try {
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
  } catch (error) {
    return {
      props: {
        catalogName: CatalogNames.MIRRORS,
        entities: [],
        error: error.message,
        paging: {
          pageItemsCount: 0,
          pageNumber: 1,
          pagesCount: 1,
          totalItemsCount: 0,
        },
      },
    };
  }
};
