import React from "react";
import classNames from "classnames";
import { RatingStars } from "components";
import { IReview } from "types/review";
import { Avatar } from "ui-kit";
import styles from "./Comment.module.scss";

export interface ICommentProps {
  className?: string;
  comment: IReview;
}

export const Comment: React.FC<ICommentProps> = ({ className, comment }) => {
  console.log("comment: ", comment);
  return (
    <div className={classNames(styles.Comment, className)}>
      <Avatar size={36} />
      <div className={styles.CommentInner}>
        <div className={styles.CommentAuthor}>
          <div className={styles.CommentAuthorName}>
            {comment.author.first_name}&nbsp;{comment.author.last_name}
          </div>
          <RatingStars value={comment.rating} />
        </div>
        <div className={styles.CommentBlock}>
          <div className={styles.CommentBlockTitle}>Комментарий:</div>
          <div>{comment.text}</div>
        </div>
      </div>
    </div>
  );
};
