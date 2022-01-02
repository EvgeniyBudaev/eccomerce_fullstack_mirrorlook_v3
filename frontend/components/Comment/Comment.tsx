import React from "react";
import classNames from "classnames";
import styles from "./Comment.module.scss";

export interface ICommentProps {
  className?: string;
}

export const Comment: React.FC<ICommentProps> = ({ className }) => {
  return (
    <div className={classNames(styles.Comment, className)}>
      <div>Comment</div>
    </div>
  );
};
