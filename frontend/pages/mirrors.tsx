import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Layout, LayoutMirrors, MirrorsList } from "components";
import { IFilter, IMirror, IMirrors } from "types/mirror";
import { IPaging } from "types/filter";
import { fetchProducts } from "ducks/products/actionCreator";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface IMirrorsProps {
  entities: IMirror[];
  paging: IPaging;
}

export default function Mirrors(mirrorsResponse: IMirrorsProps): JSX.Element {
  const dispatch = useDispatch();
  const state = useTypedSelector(state => state);
  const [mirrors, setMirrors] = useState(mirrorsResponse.entities);
  console.log("[mirrorsResponse]", mirrorsResponse);

  useEffect(() => {
    dispatch(fetchProducts(mirrors));
  }, [mirrorsResponse, dispatch]);

  return (
    <Layout>
      <LayoutMirrors>
        <MirrorsList mirrors={state.products.mirrors} />
      </LayoutMirrors>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<IFilter<IMirrors>> =
  async () => {
    const { data: mirrorsResponse } = await axios.get<IFilter<IMirrors>>(
      `http://localhost:8000/api/catalog/mirrors/`
    );
    const { entities, paging } = mirrorsResponse;

    return {
      props: {
        entities,
        paging,
      },
    };
  };
