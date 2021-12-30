import React from "react";
import classNames from "classnames";
import styles from "./Reviews.module.scss";

export interface IReviewsProps {
  className?: string;
}

export const Reviews: React.FC<IReviewsProps> = ({ className }) => {
  return (
    <div className={classNames(styles.Reviews, className)}>
      <h2>Reviews</h2>
    </div>
  );
};
