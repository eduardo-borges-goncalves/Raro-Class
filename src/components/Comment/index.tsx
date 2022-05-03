import { CommentActions, UserInfo } from "../Comments/style";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import apiClient from "../../services/api-client";
import { TComment } from "../../types/Comment";
import { useParams } from "react-router-dom";
import { useAuthentication } from "../../context";
import { useEffect, useState } from "react";
import { CommentCard } from "../Cards/style";
import { CancelButton, SendComment } from "../Button/style";
import { CommentColumn } from "../CommentColumn";

type CommentProps = {
  comment: TComment,
  getCommentsList: (id: string) => Promise<void>,
  updateCommentsList: (id: string, texto: string) => void,
  deleteCommentsList: (id: string,) => void,
}

export const Comment = ({
  comment: {
    id,
    texto,
    aluno,
    upVotes,
    downVotes,
    meuVote
  }, getCommentsList, updateCommentsList, deleteCommentsList }: CommentProps) => {

  const [commentScreen, setCommentScreen] = useState(texto);
  const [upScreen, setUpScreen] = useState(false)
  const [downScreen, setDownScreen] = useState(false)
  const [editing, setEditing] = useState(false)
  const [visibleMenu, setVisibleMenu] = useState(false)
  const [upVotesScreen, setUpVotesScreen] = useState<number>(upVotes ? upVotes : 0)
  const [downVotesScreen, setDownVotesScreen] = useState<number>(downVotes ? downVotes : 0)

  const { authData } = useAuthentication()

  const params = useParams();
  const videoId = params.id

  const putVote = async (vote: string) => {
    if (vote === "up") {
      if (downScreen) setDownVotesScreen(downVotesScreen - 1)
      setUpVotesScreen(upVotesScreen + 1)
      setUpScreen(true)
      setDownScreen(false)
    } else {
      if (upScreen) setUpVotesScreen(upVotesScreen - 1)
      setDownVotesScreen(downVotesScreen + 1)
      setUpScreen(false)
      setDownScreen(true)
    }

    await apiClient.put(`/videos/${videoId}/comentarios/${id}/votes`, { vote });
    getCommentsList(videoId || "");
  }

  const deleteVote = async () => {
    if (upScreen) {
      setUpScreen(false)
      setUpVotesScreen(upVotesScreen - 1)
    }
    if (downScreen) {
      setDownScreen(false)
      setDownVotesScreen(downVotesScreen - 1)
    }

    await apiClient.delete(`/videos/${videoId}/comentarios/${id}/votes`);
    getCommentsList(videoId || "");
  }

  const handleUpdateComment = async () => {
    const response = await apiClient.patch(
      `/videos/${videoId}/comentarios/${id}`,
      { videoId, id, texto: commentScreen }
    )
    updateCommentsList(id, commentScreen)
    response && setEditing(false)
  }

  const handleDeleteComment = async () => {
    await apiClient.delete(`/videos/${videoId}/comentarios/${id}`)
    deleteCommentsList(id)
  }

  useEffect(() => {
    if (meuVote) {
      meuVote.vote === "up" ?
        setUpScreen(true) :
        setDownScreen(true)
    }
  }, [meuVote])

  return (
    <CommentCard
      onMouseEnter={() => setVisibleMenu(true)}
      onMouseLeave={() => setVisibleMenu(false)}>
      <UserInfo >
        <img src={aluno.foto} alt="Perfil Usuário" />
      </UserInfo>
      <CommentColumn
        editing={editing}
        alunoNome={aluno.nome}
        texto={texto}
        commentScreen={commentScreen}
        setCommentScreen={setCommentScreen}
        upScreen={upScreen}
        downScreen={downScreen}
        upVotes={upVotesScreen}
        downVotes={downVotesScreen}
        putVote={putVote}
        deleteVote={deleteVote}
      />
      <CommentActions>
        {aluno.nome === authData.nome && visibleMenu && !editing &&
          <>
            <AiOutlineEdit onClick={() => setEditing(true)} />
            <AiOutlineDelete onClick={handleDeleteComment} />
          </>
        }
        {editing &&
          <>
            <SendComment onClick={handleUpdateComment}>Enviar</SendComment>
            <CancelButton onClick={() => setEditing(false)}>Cancelar</CancelButton>
          </>
        }
      </CommentActions>
    </CommentCard>
  )
}