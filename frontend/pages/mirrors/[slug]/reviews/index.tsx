import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios, { AxiosError } from "axios";
import { IFilterResponse } from "api/types";
import { HeadApplication, Layout, Reviews } from "components";
import { backendBase } from "constants/paths";
import { IReview, IReviewsResponse } from "types/review";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";

export default function MirrorReviewsPage(
  props: IReviewsResponse
): JSX.Element {
  const { entities, error } = props;

  if (error) {
    console.error(
      "Ошибка! (frontend/pages/mirrors/slug/reviews/index.tsx): ",
      error.error.message
    );
  }

  useEffect(() => {
    if (error) {
      AlertError(error.error.body);
    }
  }, [error]);

  return (
    <>
      <HeadApplication
        content="Отзывы | Интернет-магазин зеркал MirrorLook"
        title="Отзывы | MirrorLook"
      />
      <Layout>
        <AlertContainer />
        {entities && <Reviews reviewResponse={props} />}
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const productSlug = params.slug;
  try {
    const url = encodeURI(
      `${backendBase}api/v1/reviews/?product_slug=${productSlug}`
    );
    const { data: response } = await axios.get<IFilterResponse<IReview>>(url);
    const { entities, pageItemsCount, totalItemsCount } = response;
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
  } catch (e) {
    const error = e as AxiosError;
    const errorByStatus = getErrorByStatus(error);

    return {
      props: {
        entities: [],
        error: errorByStatus,
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
