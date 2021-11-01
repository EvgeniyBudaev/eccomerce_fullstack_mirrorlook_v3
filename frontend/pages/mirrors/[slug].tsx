import { ParsedUrlQuery } from "querystring";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import { IMirror } from "types/mirror";
import { IFilter } from "types/filter";
import { IFilterResponse } from "api/types";
import { Layout } from "components";
import { MirrorCard } from "components/Catalog/Mirrors/MirrorCard";

export default function MirrorDetail(props: IMirror): JSX.Element {
  //console.log("[MirrorDetail][props]", props);
  return (
    <Layout>
      <MirrorCard mirror={props} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<IMirror> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const productSlug = params.slug;

  const { data: mirrorResponse } = await axios.get<IMirror>(
    `http://localhost:8000/api/v1/products/${productSlug}`
  );

  if (!mirrorResponse) {
    return { notFound: true };
  }

  return {
    props: mirrorResponse,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: mirrorsResponse } = await axios.get<IFilterResponse<IMirror>>(
    `http://localhost:8000/api/v1/products`
  );
  const { entities } = mirrorsResponse;
  const slugs = entities.map(product => product.product_slug);
  const pathWithParams = slugs.map(slug => ({ params: { slug: slug } }));

  return {
    paths: pathWithParams,
    fallback: "blocking",
  };
};
