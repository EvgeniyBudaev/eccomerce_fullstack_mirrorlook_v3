import Link from "next/link";
import React from "react";
import classNames from "classnames";
import isNil from "lodash/isNil";
import { ROUTES } from "constants/routes";
import { IReviewsResponse } from "types/review";
import { Icon } from "ui-kit";
import { AboutProduct } from "./AboutProduct";
import Review from "./Review";
import { ReviewsPanel } from "./ReviewsPanel";
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
        {!isNil(entities[0]) && (
          <Link
            href={{
              pathname: `${ROUTES.MIRRORS}${entities[0].product.product_slug}`,
            }}
          >
            <a className={styles.GoBackLink}>
              <Icon type="ArrowBack" />
              <div className={styles.GoBackText}>К описанию товара</div>
            </a>
          </Link>
        )}
      </div>
      {!isNil(entities[0]) && (
        <AboutProduct
          product={entities[0].product}
          reviewsCount={reviewsCount}
        />
      )}
      <div className={styles.ReviewsInner}>
        <div className={styles.ReviewsBlock}>
          <h2 className={styles.ReviewsTitle}>Отзывы</h2>
          <div className={styles.Comments}>
            {entities &&
              entities.map(item => <Review key={item.id} review={item} />)}
          </div>
        </div>
        <ReviewsPanel entities={entities} />
      </div>
    </div>
  );
};
