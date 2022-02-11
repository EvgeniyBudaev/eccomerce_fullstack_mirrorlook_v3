// https://dev.to/dan_starner/building-dynamic-breadcrumbs-in-nextjs-17oa статья про хлебные крошки
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import classNames from "classnames";
import Crumb from "./Crumb";
import styles from "./Breadcrumbs.module.scss";

const _defaultGetTextGenerator = (
  param?: string,
  query?: ParsedUrlQuery
): null => null;
const _defaultGetDefaultTextGenerator = (
  path?: string,
  href?: string
): string => path;

const generatePathParts = pathStr => {
  const pathWithoutQuery = pathStr.split("?")[0];
  return pathWithoutQuery.split("/").filter(v => v.length > 0);
};

export interface IBreadcrumbsProps {
  className?: string;
  getTextGenerator?: (param?: string, query?: ParsedUrlQuery) => null;
  getDefaultTextGenerator?: (path?: string, href?: string) => string;
}

export const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({
  className,
  getTextGenerator = _defaultGetTextGenerator,
  getDefaultTextGenerator = _defaultGetDefaultTextGenerator,
}) => {
  const router = useRouter();

  const breadcrumbs = useMemo(
    function generateBreadcrumbs() {
      const asPathNestedRoutes = generatePathParts(router.asPath);
      const pathnameNestedRoutes = generatePathParts(router.pathname);

      const crumbList = asPathNestedRoutes.map((subpath, idx) => {
        const param = pathnameNestedRoutes[idx]
          .replace("[", "")
          .replace("]", "");

        const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
        return {
          href,
          textGenerator: getTextGenerator(param, router.query),
          title: getDefaultTextGenerator(subpath, href),
        };
      });

      return [{ href: "/", title: "Home" }, ...crumbList];
    },
    [
      router.asPath,
      router.pathname,
      router.query,
      getTextGenerator,
      getDefaultTextGenerator,
    ]
  );

  return (
    <nav className={classNames(styles.Breadcrumbs, className)}>
      {breadcrumbs.map((crumb, idx) => (
        <Crumb
          {...crumb}
          key={idx}
          isLastCrumb={idx === breadcrumbs.length - 1}
        />
      ))}
    </nav>
  );
};
