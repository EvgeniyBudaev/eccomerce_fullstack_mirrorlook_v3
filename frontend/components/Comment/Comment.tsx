import React from "react";
import classNames from "classnames";
import { IReview } from "types/review";
import styles from "./Comment.module.scss";

export interface ICommentProps {
  className?: string;
  comment: IReview;
}

export const Comment: React.FC<ICommentProps> = ({ className, comment }) => {
  console.log("comment: ", comment);
  return (
    <div className={classNames(styles.Comment, className)}>
      <div className={styles.CommentAuthor}>
        <div className={styles.CommentAuthorName}>
          {comment.author.first_name}&nbsp;{comment.author.last_name}
        </div>
      </div>
    </div>
  );
};
