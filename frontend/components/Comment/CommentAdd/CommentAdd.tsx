import React, { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { fetchCommentCreate } from "api/comment";
import { setLoading, unsetLoading } from "ducks/loading";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Avatar, Button, Spinner } from "ui-kit";
import { AlertError } from "utils/alert";
import styles from "./CommentAdd.module.scss";

interface IStateForm {
  author: number;
  commentary: string;
  review: number;
}

export interface ICommentAddProps {
  className?: string;
  access: string;
  firstName?: string;
  lastName?: string;
  reviewId: number;
  userId: number;
}

export const CommentAdd = forwardRef(
  (
    {
      className,
      access,
      firstName,
      lastName,
      reviewId,
      userId,
    }: ICommentAddProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const [error, setError] = useState("");
    const [commentary, setCommentary] = useState("");
    const loading = useTypedSelector(state => state.loading);
    const { isLoading } = loading;
    const dispatch = useDispatch();

    useEffect(() => {
      if (error) {
        AlertError("Не удалось добавить комментарий!", error);
      }
    }, [error]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCommentary(event.target.value);
    };

    const handleCreateComment = async (stateForm: IStateForm) => {
      setError("");
      dispatch(setLoading());
      try {
        const payload = {
          ...stateForm,
          author: userId,
        };
        await fetchCommentCreate(access, payload);
      } catch (error) {
        setError(error.message);
      } finally {
        dispatch(unsetLoading());
      }
    };

    const handleSubmitForm = event => {
      event.preventDefault();
      const payload = {
        author: userId,
        review: reviewId,
        commentary,
      };
      void handleCreateComment(payload);
    };

    if (isLoading) return <Spinner />;

    return (
      <div className={classNames(styles.CommentAdd, className)}>
        <AlertContainer />
        <Avatar size={24} />
        <div className={styles.CommentAddBlock}>
          <div className={styles.CommentAddAuthor}>
            {firstName}&nbsp;{lastName}
          </div>
          <form onSubmit={handleSubmitForm}>
            <textarea
              className={styles.CommentAddTextarea}
              name="commentary"
              ref={ref}
              rows={1}
              placeholder="Добавьте ответ"
              onChange={handleChange}
            />
            {commentary.length > 0 && (
              <div className={styles.CommentAddControl}>
                <Button type="submit" onClick={() => {}}>
                  Отправить отзыв
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
);

CommentAdd.displayName = "CommentAdd";
