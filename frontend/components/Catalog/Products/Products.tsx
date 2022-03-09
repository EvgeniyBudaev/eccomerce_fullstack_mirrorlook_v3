import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MirrorsAside } from "components/Catalog/Mirrors";
import { LayoutSorting } from "components/Layout/LayoutSorting/LayoutSorting";
import { CatalogNames } from "constants/names";
import { IConsole } from "types/console";
import { IPaging } from "types/filter";
import { IMirror } from "types/mirror";
import { Breadcrumbs, Pagination } from "ui-kit";
import { ProductsList } from "./ProductsList";
import styles from "./Products.module.scss";
import isEmpty from "lodash/isEmpty";
import {ICheckedMirrors} from "../Mirrors/MirrorsAside/MirrorsAside";

export interface IProductRange {
  startProduct: number;
  endProduct: number;
}

interface IProducts {
  catalogName: string;
  entities: IConsole[] | IMirror[];
  paging: IPaging;
}

interface IProductsProps {
  productsResponse: IProducts;
}

export const Products: React.FC<IProductsProps> = ({ productsResponse }) => {
  const router = useRouter();
  const path = router.asPath;
  const [productRange, setProductRange] = useState<IProductRange>({
    startProduct: 0,
    endProduct: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = !isNaN(Number(router.asPath.split("=")[1]))
    ? Number(router.asPath.split("=")[1])
    : 1;
  const [, setIsFirstPage] = useState(false);
  const [isClickedDisplayLine, setIsClickedDisplayLine] = useState(false);
  const { pagesCount, pageItemsCount, totalItemsCount } =
    productsResponse.paging;
  const { catalogName } = productsResponse;

  const handleFilter = (selected: number) => {
    if (!isEmpty(router.query)) {
      return { ...router.query, page: selected + 1 };
    } else {
      return { ...router.query, inStock: "В наличии", page: selected + 1 };
    }
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
    router.push({
      href: path,
      query: handleFilter(selected),
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
    <section className={styles.Products}>
      <Breadcrumbs
        getDefaultTextGenerator={() => productsResponse.catalogName}
      />
      <div className={styles.Row}>
        <h1 className={styles.Title}>{productsResponse.catalogName}</h1>
        <span>
          {productRange.endProduct} из {totalItemsCount} товаров
        </span>
      </div>
      <div className={styles.Inner}>
        {catalogName === CatalogNames.MIRRORS && (
          <MirrorsAside onFirstPage={handleChangeOnFirstPage} />
        )}
        <div className={styles.Wrapper}>
          <LayoutSorting
            isClickedDisplayLine={isClickedDisplayLine}
            onDisplayLine={handleDisplayLine}
            onFirstPage={handleChangeOnFirstPage}
          />
          <ProductsList
            catalogName={productsResponse.catalogName}
            products={productsResponse.entities}
            isClickedDisplayLine={isClickedDisplayLine}
          />
          <Pagination
            initialPage={pageNumber - 1}
            pagesCount={pagesCount}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};
