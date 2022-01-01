import React from "react";
import classNames from "classnames";
import { Star } from "ui-kit";
import styles from "./RatingStars.module.scss";

export interface IRatingStarsProps {
  className?: string;
  value?: number;
  onChange?: (event: number) => void;
}

export const RatingStars: React.FC<IRatingStarsProps> = ({
  className,
  value,
  onChange,
}) => {
  return (
    <div className={classNames(styles.RatingStars, className)}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          isChecked={index <= value - 1}
          onClick={() => onChange && onChange(index + 1)}
        />
      ))}
    </div>
  );
};
