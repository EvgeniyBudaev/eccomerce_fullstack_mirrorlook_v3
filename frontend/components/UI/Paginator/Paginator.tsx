import React from "react";
import { useRouter } from "next/router";
import { Pagination } from "antd";
import "./Paginator.module.scss";

interface IPaginatorProps {
  pageNumber: number;
  pagesCount: number;
  searchValue: string;
  path: string;
  onPageSet: (value: number) => void;
}

export const Paginator: React.FC<IPaginatorProps> = ({
  pageNumber,
  pagesCount,
  searchValue,
  path,
  onPageSet,
}) => {
  const PAGE_SIZE = 1;
  const router = useRouter();

  const handleChange = (value: number) => {
    if (searchValue) {
      searchValue = searchValue.split("?value=")[1].split("&")[0];

      onPageSet(value);
      router.push({
        pathname: path,
        query: `value=${searchValue}&page=${value}`,
      });
    }
    onPageSet(value);
    router.push({
      pathname: path,
      query: `value=${searchValue}&page=${value}`,
    });
  };

  return (
    <div className="Paginator">
      <Pagination
        pageSize={PAGE_SIZE}
        current={pageNumber}
        total={pagesCount}
        onChange={handleChange}
      />
    </div>
  );
};
