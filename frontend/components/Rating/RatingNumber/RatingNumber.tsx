import React from "react";
import classNames from "classnames";
import styles from "./RatingNumber.module.scss";

export interface IRatingNumberProps {
  className?: string;
  rating?: string | number;
}

export const RatingNumber: React.FC<IRatingNumberProps> = ({
  className,
  rating,
}) => {
  const number = Number(rating);
  return (
    <div
      className={classNames(styles.RatingNumber, className, {
        [styles.RatingNumber__green]: number >= 4.5,
        [styles.RatingNumber__light_green]: number >= 4.0 && number < 4.5,
        [styles.RatingNumber__yellow_green]: number >= 3.0 && number < 4.0,
        [styles.RatingNumber__yellow]: number >= 2.0 && number < 2.9,
        [styles.RatingNumber__red]: number >= 1.0 && number < 1.9,
        [styles.RatingNumber__default]: number >= 0 && number < 0.9,
      })}
    >
      {number.toFixed(1)}
    </div>
  );
};
