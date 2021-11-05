import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LayoutSorting } from "components/Layout/LayoutSorting/LayoutSorting";
import { Pagination } from "ui-kit";
import { IMirror } from "types/mirror";
import { IPaging } from "types/filter";
import { MirrorsList } from "./MirrorsList";
import { MirrorsAside } from "./MirrorsAside/MirrorsAside";
import styles from "./Mirrors.module.scss";

export interface IProductRange {
  startProduct: number;
  endProduct: number;
}

interface IMirrors {
  entities: IMirror[];
  paging: IPaging;
}

interface IMirrorsProps {
  mirrorsResponse: IMirrors;
}

export const Mirrors: React.FC<IMirrorsProps> = ({ mirrorsResponse }) => {
  const [productRange, setProductRange] = useState<IProductRange>({
    startProduct: 0,
    endProduct: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isClickedDisplayLine, setIsClickedDisplayLine] = useState(false);
  const { pagesCount, pageItemsCount, totalItemsCount } =
    mirrorsResponse.paging;
  const router = useRouter();
  const path = router.asPath;

  const handleFilter = (currentButton: number) => {
    const obj = {};
    const entries = Object.entries(router.query);
    entries.forEach(([key, value]) => {
      obj[key] = value;
    });

    if (currentButton === 1) {
      delete obj["page"];
      return { ...obj };
    } else {
      return { ...obj, page: currentButton };
    }
  };

  const handlePageChange = currentButton => {
    if (
      currentButton === -100 ||
      currentButton === -99 ||
      currentButton === -101
    ) {
      return;
    }
    setCurrentPage(currentButton);
    router.push({
      href: path,
      query: handleFilter(currentButton),
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

  const handleChangeOnFirstPage = () => {
    setIsFirstPage(prev => !prev);
  };

  const handleDisplayLine = () => {
    setIsClickedDisplayLine(prev => !prev);
  };

  return (
    <section className={styles.Mirrors}>
      <div className={styles.Row}>
        <h1 className={styles.Title}>Зеркала</h1>
        <span>
          {productRange.endProduct} из {totalItemsCount} товаров
        </span>
      </div>
      <div className={styles.Inner}>
        <MirrorsAside onFirstPage={handleChangeOnFirstPage} />
        <div className={styles.Wrapper}>
          <LayoutSorting
            isClickedDisplayLine={isClickedDisplayLine}
            onDisplayLine={handleDisplayLine}
            onFirstPage={handleChangeOnFirstPage}
          />
          <MirrorsList
            mirrors={mirrorsResponse.entities}
            isClickedDisplayLine={isClickedDisplayLine}
          />
          <Pagination
            pages={pagesCount}
            isFirstPage={isFirstPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};
