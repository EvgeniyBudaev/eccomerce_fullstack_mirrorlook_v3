import React from "react";
import classNames from "classnames";
import { IComment } from "types/comment";
import { Avatar } from "ui-kit";
import { formatCreatedDate } from "utils/date";
import styles from "./Comment.module.scss";

export interface ICommentProps {
  className?: string;
  comment: IComment;
}

export const Comment: React.FC<ICommentProps> = ({ className, comment }) => {
  return (
    <div className={classNames(styles.Comment, className)}>
      <Avatar size={24} />
      <div className={styles.CommentBlock}>
        <div className={styles.CommentAuthor}>
          {comment.author.first_name}&nbsp;{comment.author.last_name}&nbsp;
          <div className={styles.CommentDate}>
            {formatCreatedDate(comment.date_created)}
          </div>
        </div>
        <div>{comment.commentary}</div>
      </div>
    </div>
  );
};
