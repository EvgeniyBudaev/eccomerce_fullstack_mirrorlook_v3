import Link from "next/link";
import React from "react";
import classNames from "classnames";
import { Icon } from "ui-kit";
import styles from "./Crumb.module.scss";

export interface ICrumbProps {
  className?: string;
  href?: string;
  textGenerator?: any;
  title?: string;
  isLastCrumb?: boolean;
}

export const Crumb: React.FC<ICrumbProps> = ({
  className,
  href,
  textGenerator,
  title: defaultText,
  isLastCrumb,
}) => {
  const [title, setTitle] = React.useState(defaultText);

  // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/ban-ts-comment
  // @ts-ignore
  React.useEffect(async () => {
    if (!textGenerator) {
      return;
    }
    const finalText = await textGenerator();
    setTitle(finalText);
  }, [textGenerator]);

  const renderTitle = () => {
    if (title === "Home") {
      return (
        <a className={styles.Crumb_Link}>
          <Icon className={styles.Crumb_Icon__home} type="Home" />
        </a>
      );
    } else {
      return <a className={styles.Crumb_Link}>{title}</a>;
    }
  };

  return (
    <span className={classNames(styles.Crumb, className)}>
      {isLastCrumb ? (
        <span>{title}</span>
      ) : (
        <>
          <Link href={href}>{renderTitle()}</Link>
          <Icon className={styles.Crumb_Icon__arrow} type="ArrowRight" />
        </>
      )}
    </span>
  );
};
