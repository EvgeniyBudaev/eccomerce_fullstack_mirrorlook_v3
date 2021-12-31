import Link from "next/link";
import React from "react";
import classNames from "classnames";
import { Comment } from "components";
import { ROUTES } from "constants/routes";
import { IReviewsResponse } from "types/review";
import { Icon } from "ui-kit";
import { AboutProduct } from "./AboutProduct";
import styles from "./Reviews.module.scss";

export interface IReviewsProps {
  className?: string;
  reviewResponse: IReviewsResponse;
}

export const Reviews: React.FC<IReviewsProps> = ({
  className,
  reviewResponse,
}) => {
  const { entities } = reviewResponse;
  const reviewsCount = entities.length;

  return (
    <div className={classNames(styles.Reviews, className)}>
      <div className={styles.GoBack}>
        <Link
          href={{
            pathname: `${ROUTES.MIRRORS}`,
          }}
        >
          <a className={styles.GoBackLink}>
            <Icon type="ArrowBack" />
            <div className={styles.GoBackText}>К описанию товара</div>
          </a>
        </Link>
      </div>
      <AboutProduct product={entities[0].product} reviewsCount={reviewsCount} />
      <h2 className={styles.ReviewsTitle}>Отзывы</h2>
      <div className={styles.Comments}>
        {entities &&
          entities.map(item => <Comment key={item.id} comment={item} />)}
      </div>
    </div>
  );
};
