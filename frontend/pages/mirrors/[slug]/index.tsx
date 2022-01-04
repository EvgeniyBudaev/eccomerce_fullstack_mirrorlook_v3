import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios from "axios";
import { IFilterResponse } from "api/types";
import { IMirror } from "types/mirror";
import { IReview } from "types/review";
import { Layout } from "components";
import { MirrorCard } from "components/Catalog/Mirrors/MirrorCard";
import { backendBase } from "constants/paths";
import { AlertError } from "utils/alert";

interface IMirrorDetailProps {
  error?: string;
  mirrorResponse: IMirror;
  reviewsCount: string | number;
}

export default function MirrorDetail(props: IMirrorDetailProps): JSX.Element {
  const { error, mirrorResponse, reviewsCount } = props;

  if (error) {
    console.error("Ошибка! (frontend/pages/mirrors/slug/index.tsx): ", error);
  }

  useEffect(() => {
    if (error) {
      AlertError("Ошибка в карточки зеркала!", error);
    }
  }, [error]);

  return (
    <Layout>
      <AlertContainer />
      <MirrorCard mirror={mirrorResponse} reviewsCount={reviewsCount} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const productSlug = params.slug;
  try {
    const { data: mirrorResponse } = await axios.get<IMirror>(
      `${backendBase}api/v1/products/${productSlug}`
    );
    const { data: reviewsResponse } = await axios.get<IFilterResponse<IReview>>(
      `${backendBase}api/v1/reviews/?product_slug=${productSlug}`
    );
    const reviewsCount = reviewsResponse.entities.length;

    return {
      props: { mirrorResponse, reviewsCount },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};