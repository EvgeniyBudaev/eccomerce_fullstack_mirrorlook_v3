import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios from "axios";
import { IFilterResponse } from "api/types";
import { Layout } from "components";
import ReviewsAdd from "components/Reviews/ReviewsAdd";
import { backendBase } from "constants/paths";
import { IMirror } from "types/mirror";
import { IReview } from "types/review";
import { AlertError } from "utils/alert";

interface IMirrorReviewsAddPageProps {
  error?: string;
  product: IMirror;
}

export default function MirrorReviewsAddPage({
  error,
  product,
}: IMirrorReviewsAddPageProps): JSX.Element {
  useEffect(() => {
    if (error) {
      AlertError("Не удалось получить id продукта или автора!", error);
    }
  }, [error]);

  return (
    <Layout>
      <AlertContainer />
      {product && <ReviewsAdd product={product} />}
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
    const product = response.entities[0].product;

    return {
      props: {
        product: product,
      },
    };
  } catch (error) {
    return {
      props: {
        product: null,
        error: error.message,
      },
    };
  }
};
