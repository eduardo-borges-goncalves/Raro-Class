import { Erro } from "../Erro";
import { CreateComment } from "../CreateComment/createComent";
import { CommentList } from "../CommentList";
import { TComment } from "../../types/Comment";
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import LoadingSpinner from "../LoadingSpinner";
import downArrow from "../../assets/images/botoes/seta-para-baixo.png"
import { NextButton } from "../Button/style";
import { ContainerVerticalAuto } from "../Containers/style";

export const Comments = () => {
    const initialItens = 20
    const [commentsList, setCommentsList] = useState<TComment[]>()
    const [erro, setErro] = useState('')
    const [itens, setItens] = useState(initialItens)
    const [lookingComments, setLookingComments] = useState(false)
    const [loading, setLoading] = useState(true)

    let buttonDisabled = lookingComments || commentsList && commentsList.length < initialItens
    const autorId = Cookies.get('id')
    const { id } = useParams();

    const getCommentsList = async (videoId: string) => {
        setLookingComments(true)
        try {
            const response = await apiClient.get(
                `/videos/${videoId}/comentarios?pagina=1&itensPorPagina=${itens}`
            )
            let aux = [...response.data]
            let autorCommentIndex = -1
            autorCommentIndex = response.data.findIndex((comment: TComment) => comment.aluno.id === autorId)
            let autorComment = response.data[autorCommentIndex]
            if (autorCommentIndex >= 0) {
                aux.splice(autorCommentIndex, 1)
                aux.splice(0, 0, autorComment)
            }
            setCommentsList(aux)

            commentsList && response.data.length - commentsList.length !== initialItens ?
                setLookingComments(true) :
                setLookingComments(false);
        } catch (error: any) {
            setErro("Opa, ocorreu um erro. Por favor, tente novamente mais tarde.")
        }
        setLoading(false)
    }

    useEffect(() => {
        id && getCommentsList(id)
    }, [itens])

    return (
        loading ?
            <LoadingSpinner size={6} />
            :
            <ContainerVerticalAuto>
                {commentsList &&
                    <>
                        <CreateComment
                            commentsList={commentsList}
                            setCommentsList={setCommentsList} />
                        <CommentList
                            commentsList={commentsList}
                            setCommentsList={setCommentsList}
                            getCommentsList={getCommentsList} />
                    </>
                }
                {erro && <Erro children={erro} setErro={setErro} />}
                <NextButton
                    onClick={() => setItens(itens + initialItens)} disabled={buttonDisabled}>
                    <img src={downArrow} alt="botão para carregar mais comentários" />
                </NextButton>
            </ContainerVerticalAuto>
    )
}