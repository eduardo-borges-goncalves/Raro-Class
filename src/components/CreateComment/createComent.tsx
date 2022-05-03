import { CancelButton, SendComment } from "../Button/style";
import { UserInfo, CommentColumn, DivRow } from "../Comments/style";
import TextField from '@mui/material/TextField';
import { Dispatch, SetStateAction, useState } from "react";
import apiClient from "../../services/api-client";
import { useParams } from "react-router-dom";
import { Alert, Collapse } from "@mui/material";
import { useAuthentication } from "../../context";
import { CommentCard } from "../Cards/style";
import { TComment } from "../../types/Comment";

type CreateCommentProps ={
    commentsList: TComment[],
    setCommentsList: Dispatch<SetStateAction<TComment[] | undefined>>,
}

export const CreateComment = ({
    commentsList,setCommentsList,
}:CreateCommentProps) => {
    const [ comment, setComment ] = useState('');
    const [ erro, setErro ] = useState('');
    const { id } = useParams();
    const { authData } = useAuthentication();

    const sendComment = async () => {
        setErro('')
        try {
            const response = await apiClient.post(`/videos/${id}/comentarios`, { texto: comment});
            setCommentsList([{...response.data, },...commentsList, ])
            setComment('')
        } catch(error) {
            setErro('Erro ao enviar comentário');
        }
    }

  return (
    <CommentCard>
        {
          erro &&
            <Collapse in={!!erro}>
                <Alert onClose={ () => {setErro('')} } severity="error">
                    {erro}
                </Alert>
            </Collapse>
        }
        <UserInfo>
            <img src={authData.foto} alt="Perfil Usuário"/>
        </UserInfo>
        <CommentColumn>   
            <TextField
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                value={comment}
                style={{width: "100%"}}
                onChange={(e) => setComment(e.target.value)}
            />
        </CommentColumn>
        <DivRow>
            <SendComment onClick={sendComment}>Enviar</SendComment>
            <CancelButton onClick={() => {setComment('')}}>Cancelar</CancelButton>
        </DivRow>
    </CommentCard>
  )
}