import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios from "axios";
import { IFilterResponse } from "api/types";
import { IReview, IReviewsResponse } from "types/review";
import { Layout, Reviews } from "components";
import { backendBase } from "constants/paths";
import { AlertError } from "utils/alert";

export default function MirrorReviewsPage(
  props: IReviewsResponse
): JSX.Element {
  const { entities, error } = props;

  if (error) {
    console.error(
      "Ошибка! (frontend/pages/mirrors/slug/reviews/index.tsx): ",
      error
    );
  }

  useEffect(() => {
    if (error) {
      AlertError("Не удалось получить отзывы!", error);
    }
  }, [error]);

  return (
    <Layout>
      <AlertContainer />
      {entities && <Reviews reviewResponse={props} />}
    </Layout>
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
  } catch (error) {
    return {
      props: {
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
