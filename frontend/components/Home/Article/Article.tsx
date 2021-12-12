import React from "react";
import styles from "./Article.module.scss";

interface IArticleProps {
  subTitle: string;
  text?: string;
  title?: string;
}

export const Article: React.FC<IArticleProps> = ({ subTitle, text, title }) => {
  return (
    <article className={styles.Article}>
      <div className={styles.ArticleWrapperTitle}>
        <h1>{title}</h1>
        <span>{subTitle}</span>
      </div>
      <p>{text}</p>
    </article>
  );
};
