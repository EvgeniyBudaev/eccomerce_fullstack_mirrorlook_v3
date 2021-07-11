import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Layout, LayoutMirrors, MirrorsList } from "components";
import { IMirror } from "types/mirror";
import { IFilter, IPaging } from "types/filter";
import { fetchMirrors } from "ducks/products/mirrors";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Paginator from "../components/UI/Paginator";

interface IMirrorsProps {
  entities: IMirror[];
  paging: IPaging;
}

export default function Mirrors(mirrorsResponse: IMirrorsProps): JSX.Element {
  const { pageNumber, pagesCount } = mirrorsResponse.paging;
  const [mirrors, setMirrors] = useState(mirrorsResponse.entities);
  const [currentPage, setCurrentPage] = React.useState(pageNumber);
  const state = useTypedSelector(state => state);
  const dispatch = useDispatch();
  const router = useRouter();
  //console.log("[router]", router);
  console.log("[mirrorsResponse]", mirrorsResponse);

  useEffect(() => {
    setCurrentPage(mirrorsResponse.paging.pageNumber);
    dispatch(fetchMirrors(mirrorsResponse.entities));
  }, [mirrorsResponse, dispatch]);

  const handlePageGoBack = () => {
    setCurrentPage(pageNumber => pageNumber - 1);
  };

  const handlePageGoForward = () => {
    setCurrentPage(pageNumber => pageNumber + 1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    router.push({
      href: "/mirrors",
      search: `?page=${pageNumber}`,
    });
  };

  const handlePageSet = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <LayoutMirrors>
        <MirrorsList mirrors={state.mirrors.mirrors} />
        {/*<Pagination*/}
        {/*  currentPage={pageNumber}*/}
        {/*  pageSize={1}*/}
        {/*  totalItemsCount={pagesCount}*/}
        {/*  onChange={handlePageChange}*/}
        {/*  onGoBack={handlePageGoBack}*/}
        {/*  onGoForward={handlePageGoForward}*/}
        {/*/>*/}
        <Paginator
          pageNumber={currentPage}
          pagesCount={pagesCount}
          searchValue=""
          path="mirrors"
          onPageSet={handlePageSet}
        />
      </LayoutMirrors>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<IFilter<IMirror>> = async ({
  query: { value = "", page = 1 },
}) => {
  const { data: mirrorsResponse } = await axios.get<IFilter<IMirror>>(
    `http://localhost:8000/api/catalog/mirrors?value=${value}&page=${page}`
  );
  const { entities, paging } = mirrorsResponse;

  return {
    props: {
      entities,
      paging,
    },
  };
};
