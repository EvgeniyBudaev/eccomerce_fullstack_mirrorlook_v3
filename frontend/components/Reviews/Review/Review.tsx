import React, { useRef, useState } from "react";
import classNames from "classnames";
import { CommentAdd, RatingStars } from "components";
import { useTypedSelector } from "hooks/useTypedSelector";
import { IReview } from "types/review";
import { Avatar } from "ui-kit";
import styles from "./Review.module.scss";

export interface IReviewProps {
  className?: string;
  review: IReview;
}

export const Review: React.FC<IReviewProps> = ({ className, review }) => {
  const [canAddComment, setCanAddComment] = useState(false);
  const account = useTypedSelector(state => state.account);
  const { access, isAuthenticated, user } = account;
  const userId = user && user.id;
  const reviewId = review.id;
  const textAreaRef = useRef(null);

  const renderRatingText = (rating: number): string => {
    switch (rating) {
      case 5:
        return "Отличный товар";
      case 4:
        return "Хороший товар";
      case 3:
        return "Обычный товар";
      case 2:
        return "Плохой товар";
      case 1:
        return "Ужасный товар";
    }
  };

  const handleClickCommentOn = () => {
    if (isAuthenticated) {
      setCanAddComment(true);
      if (textAreaRef.current) {
        textAreaRef.current.focus();
      }
    }
  };

  return (
    <div className={classNames(styles.Review, className)}>
      <Avatar size={36} />
      <div className={styles.ReviewInner}>
        <div className={styles.ReviewAuthor}>
          <div className={styles.ReviewAuthorName}>
            {review.author.first_name}&nbsp;{review.author.last_name}
          </div>
          <div className={styles.ReviewRating}>
            <RatingStars value={review.rating} />
            <div className={styles.ReviewRatingText}>
              {renderRatingText(review.rating)}
            </div>
          </div>
        </div>
        <div className={styles.ReviewBlock}>
          <div className={styles.ReviewBlockTitle}>Достоинства:</div>
          <div>{review.advantage}</div>
        </div>
        <div className={styles.ReviewBlock}>
          <div className={styles.ReviewBlockTitle}>Недостатки:</div>
          <div>{review.disadvantage}</div>
        </div>
        <div className={styles.ReviewBlock}>
          <div className={styles.ReviewBlockTitle}>Комментарий:</div>
          <div>{review.commentary}</div>
        </div>
        <div className={styles.CommentsBlock}>
          <div
            className={styles.CommentsBlockAddComment}
            onClick={handleClickCommentOn}
          >
            Комментировать
          </div>
        </div>
        {canAddComment && reviewId && userId && (
          <div className={styles.CommentBlock}>
            <CommentAdd
              access={access}
              firstName={review.author.first_name}
              lastName={review.author.last_name}
              ref={textAreaRef}
              reviewId={reviewId}
              userId={userId}
            />
          </div>
        )}
      </div>
    </div>
  );
};
