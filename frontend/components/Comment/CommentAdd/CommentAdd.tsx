import React, { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { fetchCommentCreate } from "api/comment";
import { setLoading, unsetLoading } from "ducks/loading";
import {
  setUnhandledClearError,
  setUnhandledError,
} from "ducks/unhandledError";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Avatar, Button, Spinner } from "ui-kit";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";
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
  onRequestCommentSend?: () => void;
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
      onRequestCommentSend,
    }: ICommentAddProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const [commentary, setCommentary] = useState("");
    const loading = useTypedSelector(state => state.loading);
    const { isLoading } = loading;
    const unhandledError = useTypedSelector(state => state.unhandledError);
    const { error } = unhandledError;
    const dispatch = useDispatch();

    useEffect(() => {
      if (error) {
        const errorByStatus = getErrorByStatus(error);
        AlertError(errorByStatus.error.body);
      }
    }, [error]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCommentary(event.target.value);
    };

    const handleCreateComment = async (stateForm: IStateForm) => {
      dispatch(setUnhandledClearError());
      dispatch(setLoading());
      try {
        const payload = {
          ...stateForm,
          author: userId,
        };
        await fetchCommentCreate(access, payload);
        onRequestCommentSend();
      } catch (error) {
        dispatch(setUnhandledError(error));
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
