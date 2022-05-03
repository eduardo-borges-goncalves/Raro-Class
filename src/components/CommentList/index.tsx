import { TComment } from "../../types/Comment";
import { Comment } from "../Comment";
import { Dispatch, SetStateAction } from "react";

type CommentsListProps = {
  commentsList: TComment[],
  setCommentsList: Dispatch<SetStateAction<TComment[] | undefined>>,
  getCommentsList: (videoId: string) => Promise<void>,
}

export const CommentList = ({
  commentsList, setCommentsList, getCommentsList
}: CommentsListProps) => {
 
  const updateCommentsList = (id: string, texto: string) => {
    setCommentsList(
      commentsList && commentsList.filter(comment => {
        if (comment.id === id) {
          comment.texto = texto
        }
        return comment
      })
    )
  }

  const deleteCommentsList = (id: string) => {
    setCommentsList(commentsList && commentsList.filter(comment => (comment.id !== id)))
  }

  return (
    <>
      {commentsList && commentsList.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          getCommentsList={getCommentsList}
          updateCommentsList={updateCommentsList}
          deleteCommentsList={deleteCommentsList}
        />)
      )}
    </>
  )
}