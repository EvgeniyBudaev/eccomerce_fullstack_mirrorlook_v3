import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import { fetchCommentsByReview } from "api/comment";
import { Comment, CommentAdd, RatingStars } from "components";
import { ROUTES } from "constants/routes";
import { setLoading, unsetLoading } from "ducks/loading";
import { useTypedSelector } from "hooks/useTypedSelector";
import { IComment } from "types/comment";
import { IReview } from "types/review";
import { Avatar, Spinner } from "ui-kit";
import { AlertError } from "utils/alert";
import { commentDeclinations, getDeclination } from "utils/declinations";
import styles from "./Review.module.scss";

export interface IReviewProps {
  className?: string;
  review: IReview;
}

export const Review: React.FC<IReviewProps> = ({ className, review }) => {
  const [canAddComment, setCanAddComment] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);
  const [error, setError] = useState("");
  const [needRequestIndicator, setNeedRequestIndicator] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const loading = useTypedSelector(state => state.loading);
  const { isLoading } = loading;
  const account = useTypedSelector(state => state.account);
  const { access, isAuthenticated, user } = account;
  const commentsCount = comments.length;
  const userId = user && user.id;
  const reviewId = review && review.id;
  const textAreaRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      AlertError("Не удалось получить список комментариев к отзыву!", error);
    }
  }, [error]);

  useEffect(() => {
    const getCommentsByReview = () => {
      setError("");
      dispatch(setLoading());
      fetchCommentsByReview(reviewId)
        .then(response => {
          setComments(response.entities);
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
          dispatch(unsetLoading());
        });
    };
    void getCommentsByReview();
  }, [dispatch, needRequestIndicator, reviewId]);

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
    } else {
      setShowLogin(true);
    }
  };

  const handleToggleListComments = () => {
    setShowComments(prevState => !prevState);
  };

  const requestCommentSend = useCallback(() => {
    setNeedRequestIndicator(needRequestIndicator + 1);
  }, [setNeedRequestIndicator, needRequestIndicator]);

  if (isLoading) return <Spinner />;

  return (
    <div className={classNames(styles.Review, className)}>
      <AlertContainer />
      <Avatar
        user={isAuthenticated ? review.author.first_name : null}
        size={36}
      />
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
            onClick={handleToggleListComments}
          >
            {!showComments ? (
              <>
                {commentsCount}
                &nbsp;
                {getDeclination(commentsCount, commentDeclinations)}
              </>
            ) : (
              "Скрыть комментарии"
            )}
          </div>
          <div
            className={styles.CommentsBlockAddComment}
            onClick={handleClickCommentOn}
          >
            Комментировать
          </div>
        </div>
        {showLogin && (
          <div className={styles.Login}>
            <Link href={ROUTES.LOGIN}>
              <a className={styles.LoginLink}>Войдите,</a>
            </Link>
            &nbsp;
            <div className={styles.LoginText}>чтобы оставить комментарий</div>
          </div>
        )}
        {!isEmpty(comments) &&
          showComments &&
          comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        {canAddComment && reviewId && userId && isAuthenticated && (
          <div className={styles.CommentBlock}>
            <CommentAdd
              access={access}
              firstName={user.first_name}
              lastName={user.last_name}
              ref={textAreaRef}
              reviewId={reviewId}
              userId={userId}
              onRequestCommentSend={requestCommentSend}
            />
          </div>
        )}
      </div>
    </div>
  );
};
