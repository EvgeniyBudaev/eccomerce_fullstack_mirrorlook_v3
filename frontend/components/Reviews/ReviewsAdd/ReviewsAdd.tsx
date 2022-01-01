import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { ToastContainer as AlertContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { fetchReviewCreate } from "api/review";
import { setLoading, unsetLoading } from "ducks/loading";
import { useTypedSelector } from "hooks/useTypedSelector";
import { IMirror } from "types/mirror";
import { Button, Spinner } from "ui-kit";
import { AlertError } from "utils/alert";
import styles from "./ReviewsAdd.module.scss";

export interface IReviewsAddProps {
  className?: string;
  product: IMirror;
}

interface IStateForm {
  author: number;
  product: number;
  rating: number;
  text: string;
  title: string;
}

export const ReviewsAdd: React.FC<IReviewsAddProps> = ({
  className,
  product,
}) => {
  const [error, setError] = useState("");
  const [stateForm, setStateForm] = useState<IStateForm>({
    author: null,
    product: product.id,
    rating: 0,
    text: "",
    title: product.title,
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const path = router.asPath;
  const pathReview = path.replace(/add/g, "");
  const loading = useTypedSelector(state => state.loading);
  const { isLoading } = loading;
  const account = useTypedSelector(state => state.account);
  const { access, user } = account;
  const userId = user && user.id;

  useEffect(() => {
    if (error) {
      AlertError("Нельзя создать больше одного отзыва к товару!", error);
    }
  }, [error]);

  const handleRatingChanged = (newRating: number) => {
    setStateForm({ ...stateForm, rating: newRating });
  };

  const handleChange = event => {
    setStateForm({ ...stateForm, [event.target.name]: event.target.value });
  };

  const handleCreateReview = async (stateForm: IStateForm) => {
    setError("");
    dispatch(setLoading());
    try {
      const payload = {
        ...stateForm,
        author: userId,
      };
      await fetchReviewCreate(access, payload);
      router.push(pathReview);
    } catch (error) {
      console.log(error);
      setError(error.message);
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
    <section className={classNames(styles.ReviewsAdd, className)}>
      <AlertContainer />
      <h1 className={styles.Title}>Отзыв о товаре {product.title}</h1>
      <form onSubmit={handleSubmitForm}>
        <div className={styles.Row}>
          <div className={styles.RowTitle}>Общая оценка</div>
          <ReactStars
            activeColor="#f0ad4e"
            count={5}
            size={45}
            onChange={handleRatingChanged}
          />
        </div>
        <div className={styles.Row}>
          <div className={styles.RowTitle}>Расскажите подробнее</div>
          <div className={styles.Comment}>
            <h4 className={styles.CommentTitle}>Комментарии</h4>
            <textarea
              className={styles.CommentTextarea}
              name="text"
              rows={4}
              placeholder="Другие впечатления"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.Row}>
          <div className={styles.RowTitle} />
          <Button className={styles.Button} type="submit" onClick={() => {}}>
            Отправить отзыв
          </Button>
        </div>
      </form>
    </section>
  );
};
