import { VideoList } from "../VideoList"
import apiClient from "../../services/api-client";
import { FC, useEffect, useState } from "react";
import { NextVideosContainer } from "./style";
import { TVideo } from '../../types/Video'
import LoadingSpinner from '../LoadingSpinner'
import { SpanCard } from "../SpanCard/style";

type NextVideoProps = {
    id: string;
}

export const NextVideos: FC<NextVideoProps> = ({ id }) => {
    const [ nextVideos, setNextVideos ] = useState <TVideo[]>();
    const [ erro, setErro ] = useState('')
    const [ loading, setLoading ] = useState(true)

    useEffect(() => { 
        const getVideos = async () => {
            try {
                const response = await apiClient.get(`/videos/${id}/recomendacoes`);
                setNextVideos(response.data)
            } catch(error:any) {
                setErro("Erro ao buscar próximos vídeos")
            }
            setLoading(false)
        }
        getVideos() 
    }, [id])

    return (
        loading? 
            <LoadingSpinner size={6} />
            :
            <>
            <NextVideosContainer>
                { nextVideos && <VideoList videos={nextVideos} />}   
            </NextVideosContainer>
                {erro && <SpanCard>{erro}</SpanCard> }   
            </>
    )
}