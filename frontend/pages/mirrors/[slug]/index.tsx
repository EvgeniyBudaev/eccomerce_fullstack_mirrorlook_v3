import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios, { AxiosError } from "axios";
import { IFilterResponse } from "api/types";
import { HeadApplication, Layout } from "components";
import { MirrorCard } from "components/Catalog/Mirrors/MirrorCard";
import { backendBase } from "constants/paths";
import { IError } from "types/error";
import { IMirror } from "types/mirror";
import { IReview } from "types/review";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";

interface IMirrorDetailProps {
  error?: IError;
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
      AlertError(error.error.body);
    }
  }, [error]);

  return (
    <>
      <HeadApplication
        content={mirrorResponse.title + " | Интернет-магазин зеркал MirrorLook"}
        title={mirrorResponse.title + " | MirrorLook"}
      />
      <Layout>
        <AlertContainer />
        <MirrorCard mirror={mirrorResponse} reviewsCount={reviewsCount} />
      </Layout>
    </>
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
  } catch (e) {
    const error = e as AxiosError;
    const errorByStatus = getErrorByStatus(error);
    return {
      props: {
        error: errorByStatus,
      },
    };
  }
};
