import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { ToastContainer as AlertContainer } from "react-toastify";
import classNames from "classnames";
import { fetchReviewCreate } from "api/review";
import { ROUTES } from "constants/routes";
import { setLoading, unsetLoading } from "ducks/loading";
import {
  accountSelector,
  loadingSelector,
  unhandledErrorSelector,
} from "ducks/selectors";
import {
  setUnhandledClearError,
  setUnhandledError,
} from "ducks/unhandledError";
import { useDispatch, useSelector } from "hooks";
import { IMirror } from "types/mirror";
import { Button, Icon, Spinner } from "ui-kit";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";
import styles from "./ReviewsAdd.module.scss";

export interface IReviewsAddProps {
  className?: string;
  product: IMirror;
}

interface IStateForm {
  advantage: string;
  author: number;
  commentary: string;
  disadvantage: string;
  product: number;
  rating: number;
}

export const ReviewsAdd: React.FC<IReviewsAddProps> = ({
  className,
  product,
}) => {
  const [stateForm, setStateForm] = useState<IStateForm>({
    advantage: "",
    author: null,
    commentary: "",
    disadvantage: "",
    product: product.id,
    rating: 0,
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const path = router.asPath;
  const pathReview = path.replace(/add/g, "");
  const { isLoading } = useSelector(loadingSelector);
  const { error } = useSelector(unhandledErrorSelector);
  const account = useSelector(accountSelector);
  const { access, user } = account;
  const userId = user && user.id;

  useEffect(() => {
    if (error) {
      const errorByStatus = getErrorByStatus(error);
      AlertError(errorByStatus.error.body);
    }
  }, [error]);

  const handleRatingChanged = (newRating: number) => {
    setStateForm({ ...stateForm, rating: newRating });
  };

  const handleChange = event => {
    setStateForm({ ...stateForm, [event.target.name]: event.target.value });
  };

  const handleCreateReview = async (stateForm: IStateForm) => {
    dispatch(setUnhandledClearError());
    dispatch(setLoading());
    try {
      const payload = {
        ...stateForm,
        author: userId,
      };
      await fetchReviewCreate(access, payload);
      router.push(pathReview);
    } catch (error) {
      dispatch(setUnhandledError(error));
    } finally {
      dispatch(unsetLoading());
    }
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    void handleCreateReview(stateForm);
  };

  if (isLoading) return <Spinner />;

  return (
    <div className={classNames(styles.ReviewsAdd, className)}>
      <AlertContainer />
      <div className={styles.GoBack}>
        <Link
          href={{
            pathname: `${ROUTES.MIRRORS}${product.product_slug}${ROUTES.REVIEWS}`,
          }}
        >
          <a className={styles.GoBackLink}>
            <Icon type="ArrowBack" />
            <div className={styles.GoBackText}>К отзывам товара</div>
          </a>
        </Link>
      </div>
      <h1 className={styles.Title}>Отзыв о товаре {product.title}</h1>
      <form onSubmit={handleSubmitForm}>
        <div className={styles.Row}>
          <div className={classNames(styles.RowTitle, styles.RowTitleTotal)}>
            Общая оценка
            <span className={styles.Required}>&nbsp;*</span>
          </div>
          <ReactStars
            activeColor="#f0ad4e"
            count={5}
            size={45}
            onChange={handleRatingChanged}
          />
        </div>
        <div className={styles.RowStart}>
          <div className={styles.RowTitle}>Расскажите подробнее</div>
          <div className={styles.RowInner}>
            <div className={styles.Comment}>
              <h4 className={styles.CommentTitle}>Достоинства</h4>
              <textarea
                className={styles.CommentTextarea}
                name="advantage"
                rows={4}
                placeholder="Что вам понравилось"
                onChange={handleChange}
              />
            </div>
            <div className={styles.Comment}>
              <h4 className={styles.CommentTitle}>Недостатки</h4>
              <textarea
                className={styles.CommentTextarea}
                name="disadvantage"
                rows={4}
                placeholder="Что не понравилось"
                onChange={handleChange}
              />
            </div>
            <div className={styles.Comment}>
              <h4 className={styles.CommentTitle}>Комментарии</h4>
              <textarea
                className={styles.CommentTextarea}
                name="commentary"
                rows={4}
                placeholder="Другие впечатления"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.Row}>
          <div className={styles.RowTitle} />
          <Button
            className={styles.Button}
            type="submit"
            isDisabled={stateForm.rating === 0}
            onClick={() => {}}
          >
            Отправить отзыв
          </Button>
        </div>
      </form>
    </div>
  );
};
