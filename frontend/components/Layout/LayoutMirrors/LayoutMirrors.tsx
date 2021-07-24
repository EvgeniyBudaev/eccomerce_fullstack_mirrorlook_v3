import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Pagination } from "ui-kit";
import { IMirror } from "types/mirror";
import { IPaging } from "types/filter";
import { MirrorsList } from "./MirrorsList";
import { LayoutMirrorsAside } from "./LayoutMirrorsAside/LayoutMirrorsAside";
import styles from "./LayoutMirrors.module.scss";

export interface IProductRange {
  startProduct: number;
  endProduct: number;
}

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
  const [productRange, setProductRange] = useState<IProductRange>({
    startProduct: 0,
    endProduct: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const { pageNumber, pagesCount, pageItemsCount, totalItemsCount } =
    mirrorsResponse.paging;
  const router = useRouter();
  const path = router.asPath;

  const handlePageChange = currentButton => {
    setCurrentPage(currentButton);
    router.push({
      href: path,
      query: { ...router.query, page: currentButton },
    });
  };

  const handlePageGoBack = currentButton => {
    router.push({
      href: path,
      query: { ...router.query, page: currentButton - 1 },
    });
  };

  const handlePageGoForward = currentButton => {
    router.push({
      href: path,
      query: { ...router.query, page: currentButton + 1 },
    });
  };

  useEffect(() => {
    const lastPage = Math.max(Math.ceil(totalItemsCount / pageItemsCount), 1);

    if (currentPage === lastPage) {
      setProductRange({
        startProduct: (currentPage - 1) * pageItemsCount + 1,
        endProduct: totalItemsCount,
      });
    } else {
      setProductRange({
        startProduct: (currentPage - 1) * pageItemsCount + 1,
        endProduct: currentPage * pageItemsCount,
      });
    }
  }, [currentPage, pageItemsCount, totalItemsCount]);

  return (
    <section className={styles.LayoutMirrors}>
      <div className={styles.Row}>
        <h1 className={styles.Title}>Зеркала</h1>
        <span>
          {productRange.startProduct}-{productRange.endProduct} из{" "}
          {totalItemsCount} товаров
        </span>
      </div>
      <div className={styles.Inner}>
        <LayoutMirrorsAside />
        <div className={styles.Wrapper}>
          {/*<MirrorsList mirrors={state.mirrors.mirrors} />*/}
          <MirrorsList mirrors={mirrorsResponse.entities} />
          <Pagination
            pages={pagesCount}
            onChange={handlePageChange}
            onGoBack={handlePageGoBack}
            onGoForward={handlePageGoForward}
          />
        </div>
      </div>
    </section>
  );
};
