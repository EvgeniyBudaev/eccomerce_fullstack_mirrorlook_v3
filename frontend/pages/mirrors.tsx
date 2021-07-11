import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Layout, LayoutMirrors, MirrorsList } from "components";
import { IMirror, IMirrors } from "types/mirror";
import { IFilter, IPaging } from "types/filter";
import { fetchMirrors } from "ducks/mirrors/actionCreator";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface IMirrorsProps {
  entities: IMirror[];
  paging: IPaging;
}

export default function Mirrors(mirrorsResponse: IMirrorsProps): JSX.Element {
  const [mirrors, setMirrors] = useState(mirrorsResponse.entities);
  const state = useTypedSelector(state => state);
  const dispatch = useDispatch();
  console.log("[mirrorsResponse]", mirrorsResponse);

  useEffect(() => {
    dispatch(fetchMirrors(mirrors));
  }, [mirrorsResponse, dispatch]);

  return (
    <Layout>
      <LayoutMirrors>
        <MirrorsList mirrors={state.mirrors.mirrors} />
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
