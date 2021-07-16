import { ParsedUrlQuery } from "querystring";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import { IMirror } from "types/mirror";
import { IFilter } from "types/filter";

export default function MirrorDetail(props): JSX.Element {
  console.log("[MirrorDetail][props]", props);
  return (
    <>
      <h1>MirrorDetail Page</h1>
      <h2>{props.title}</h2>
    </>
  );
}

export const getStaticProps: GetStaticProps<IMirror> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const productSlug = params.slug;

  const { data: mirrorResponse } = await axios.get<IMirror>(
    `http://localhost:8000/api/catalog/mirrors/${productSlug}`
  );

  if (!mirrorResponse) {
    return { notFound: true };
  }

  return {
    props: mirrorResponse,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: mirrorsResponse } = await axios.get<IFilter<IMirror>>(
    `http://localhost:8000/api/catalog/mirrors`
  );
  const { entities } = mirrorsResponse;
  const slugs = entities.map(product => product.product_slug);
  const pathWithParams = slugs.map(slug => ({ params: { slug: slug } }));

  return {
    paths: pathWithParams,
    fallback: "blocking",
  };
};
