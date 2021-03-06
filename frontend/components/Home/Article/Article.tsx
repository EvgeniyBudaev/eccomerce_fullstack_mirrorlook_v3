import React, { ReactNode } from "react";
import styles from "./Article.module.scss";

interface IArticleProps {
  subTitle?: string;
  text?: ReactNode | string;
  title?: string;
}

export const Article: React.FC<IArticleProps> = ({ subTitle, text, title }) => {
  return (
    <article className={styles.Article}>
      <div className={styles.ArticleWrapperTitle}>
        <h1>{title}</h1>
        <span>{subTitle}</span>
      </div>
      <div className={styles.ArticleText}>{text}</div>
    </article>
  );
};
