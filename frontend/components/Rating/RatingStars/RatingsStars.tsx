import React from "react";
import classNames from "classnames";
import { Star } from "ui-kit";
import styles from "./RatingsStars.module.scss";

export interface IRatingsStarsProps {
  className?: string;
  value: number;
  onChange: (event: number) => void;
}

export const RatingsStars: React.FC<IRatingsStarsProps> = ({
  className,
  value,
  onChange,
}) => {
  return (
    <div className={classNames(styles.RatingsStars, className)}>
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
