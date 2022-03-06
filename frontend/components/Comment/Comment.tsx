import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import classNames from "classnames";
import { fetchCommentDelete } from "api/comment";
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
import { IComment } from "types/comment";
import { Avatar, Spinner } from "ui-kit";
import { AlertError, AlertSuccess } from "utils/alert";
import { getErrorByStatus } from "utils/error";
import { formatCreatedDate } from "utils/date";
import styles from "./Comment.module.scss";

export interface ICommentProps {
  className?: string;
  comment: IComment;
}

export const Comment: React.FC<ICommentProps> = ({ className, comment }) => {
  const account = useSelector(accountSelector);
  const { access, user } = account;
  const userId = user && user.id;
  const { isLoading } = useSelector(loadingSelector);
  const { error } = useSelector(unhandledErrorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      const errorByStatus = getErrorByStatus(error);
      AlertError(errorByStatus.error.body);
    }
  }, [error]);

  const handleDeleteComment = async () => {
    dispatch(setUnhandledClearError());
    dispatch(setLoading());
    try {
      await fetchCommentDelete(access, comment.id);
      AlertSuccess("Комментарий успешно удален.");
    } catch (error) {
      dispatch(setUnhandledError(error));
    } finally {
      dispatch(unsetLoading());
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className={classNames(styles.Comment, className)}>
      <AlertContainer />
      <Avatar size={24} />
      <div className={styles.CommentBlock}>
        <div className={styles.CommentAuthor}>
          {comment.author.first_name}&nbsp;{comment.author.last_name}&nbsp;
          <div className={styles.CommentDate}>
            {formatCreatedDate(comment.date_created)}
          </div>
        </div>
        <div>{comment.commentary}</div>
        {comment.author.id === userId && (
          <div className={styles.CommentControls}>
            <div
              className={styles.CommentControl}
              onClick={handleDeleteComment}
            >
              Удалить комментарий
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
