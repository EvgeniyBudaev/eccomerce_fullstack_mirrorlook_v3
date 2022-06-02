import Link from "next/link";
import React, { useEffect } from "react";
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

  useEffect(() => {
    const getFinalText = async () => {
      if (!textGenerator) {
        return false;
      }
      const finalText = await textGenerator();
      setTitle(finalText);
    };
    void getFinalText();
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
