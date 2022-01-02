import { useRouter } from "next/router";
import React, { useMemo } from "react";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import { RatingStars } from "components";
import { useTypedSelector } from "hooks/useTypedSelector";
import { IReview } from "types/review";
import { Button } from "ui-kit";
import { getDeclination, reviewDeclinations } from "utils/declinations";
import styles from "./ReviewsPanel.module.scss";

export interface IReviewsPanelProps {
  className?: string;
  entities?: IReview[];
}

export const ReviewsPanel: React.FC<IReviewsPanelProps> = ({
  className,
  entities,
}) => {
  const reviewsRatingOfFive = useMemo(() => {
    return entities && entities.filter(entity => entity.rating === 5);
  }, [entities]);
  const countRatingOfFive = reviewsRatingOfFive.length;
  const reviewsRatingOfFour = useMemo(() => {
    return entities && entities.filter(entity => entity.rating === 4);
  }, [entities]);
  const countRatingOfFour = reviewsRatingOfFour.length;
  const reviewsRatingOfThree = useMemo(() => {
    return entities && entities.filter(entity => entity.rating === 3);
  }, [entities]);
  const countRatingOfThree = reviewsRatingOfThree.length;
  const reviewsRatingOfTwo = useMemo(() => {
    return entities && entities.filter(entity => entity.rating === 2);
  }, [entities]);
  const countRatingOfTwo = reviewsRatingOfTwo.length;
  const reviewsRatingOfOne = useMemo(() => {
    return entities && entities.filter(entity => entity.rating === 2);
  }, [entities]);
  const countRatingOfOne = reviewsRatingOfOne.length;
  const account = useTypedSelector(state => state.account);
  const { user } = account;
  const userId = user && user.id;
  const wasSendReview = useMemo(() => {
    if (entities && entities[0]) {
      const productTitle = entities[0].product.title;
      const isReview = entities.filter(
        item => item.product.title === productTitle && item.author.id === userId
      );
      return !isEmpty(isReview);
    }
  }, [entities, userId]);
  const router = useRouter();
  const path = router.asPath;

  const handleAddReview = () => {
    router.push(`${path}/add`);
  };

  return (
    <div className={classNames(styles.ReviewsPanel, className)}>
      <Button
        className={styles.ReviewsPanelButton}
        isDisabled={wasSendReview}
        onClick={handleAddReview}
      >
        Оставить отзыв
      </Button>
      <div className={styles.ReviewsPanelRating}>
        <div className={styles.ReviewsPanelRatingTitle}>Отзывы с оценкой</div>
        <div className={styles.ReviewsPanelRow}>
          <RatingStars className={styles.ReviewsPanelRatingStars} value={5} />
          <div>
            {countRatingOfFive}
            &nbsp;
            {getDeclination(Number(countRatingOfFive), reviewDeclinations)}
          </div>
        </div>
        <div className={styles.ReviewsPanelRow}>
          <RatingStars className={styles.ReviewsPanelRatingStars} value={4} />
          <div>
            {countRatingOfFour}
            &nbsp;
            {getDeclination(Number(countRatingOfFour), reviewDeclinations)}
          </div>
        </div>
        <div className={styles.ReviewsPanelRow}>
          <RatingStars className={styles.ReviewsPanelRatingStars} value={3} />
          <div>
            {countRatingOfThree}
            &nbsp;
            {getDeclination(Number(countRatingOfThree), reviewDeclinations)}
          </div>
        </div>
        <div className={styles.ReviewsPanelRow}>
          <RatingStars className={styles.ReviewsPanelRatingStars} value={2} />
          <div>
            {countRatingOfTwo}
            &nbsp;
            {getDeclination(Number(countRatingOfTwo), reviewDeclinations)}
          </div>
        </div>
        <div className={styles.ReviewsPanelRow}>
          <RatingStars className={styles.ReviewsPanelRatingStars} value={1} />
          <div>
            {countRatingOfOne}
            &nbsp;
            {getDeclination(Number(countRatingOfOne), reviewDeclinations)}
          </div>
        </div>
      </div>
    </div>
  );
};
