import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Button, Pagination } from "ui-kit";
import { useTypedSelector } from "hooks/useTypedSelector";
import { fetchMirrors } from "ducks/products/mirrors";
import { IMirror } from "types/mirror";
import { IPaging } from "types/filter";
import { MirrorsList } from "./MirrorsList";
import { LayoutMirrorsAside } from "./LayoutMirrorsAside/LayoutMirrorsAside";
import styles from "./LayoutMirrors.module.scss";

interface ILayoutMirrors {
  entities: IMirror[];
  paging: IPaging;
}

interface ILayoutMirrorsProps {
  mirrorsResponse: ILayoutMirrors;
}

export const LayoutMirrors: React.FC<ILayoutMirrorsProps> = ({
  mirrorsResponse,
}) => {
  const { pageNumber, pagesCount, displayItems } = mirrorsResponse.paging;
  const [currentPage, setCurrentPage] = React.useState(pageNumber);
  const state = useTypedSelector(state => state);
  const dispatch = useDispatch();
  const router = useRouter();
  // console.log("[router]", router);
  // console.log("[mirrorsResponse]", mirrorsResponse);

  useEffect(() => {
    dispatch(fetchMirrors(mirrorsResponse.entities));
  }, [mirrorsResponse, dispatch]);

  const handlePageGoBack = () => {
    setCurrentPage(pageNumber => pageNumber - 1);
    router.push({
      href: "/mirrors",
      search: `?page=${pageNumber - 1}`,
    });
  };

  const handlePageGoForward = () => {
    setCurrentPage(pageNumber => pageNumber + 1);
    router.push({
      href: "/mirrors",
      search: `?page=${pageNumber + 1}`,
    });
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    router.push({
      href: "/mirrors",
      search: pageNumber === 1 ? "" : `?page=${pageNumber}`,
    });
  };

  const handleClick = () => {
    console.log("click!!!");
  };

  return (
    <section className={styles.LayoutMirrors}>
      <div className={styles.Row}>
        <h1 className={styles.Title}>Зеркала</h1>
        <span>1-13 из 600 товаров</span>
      </div>
      <div className={styles.Inner}>
        <LayoutMirrorsAside />
        <div className={styles.Wrapper}>
          <MirrorsList mirrors={state.mirrors.mirrors} />
          <Pagination
            currentPage={currentPage}
            displayItems={displayItems}
            pageSize={1}
            totalItemsCount={pagesCount}
            onChange={handlePageChange}
            onGoBack={handlePageGoBack}
            onGoForward={handlePageGoForward}
          />
        </div>
      </div>
    </section>
  );
};
