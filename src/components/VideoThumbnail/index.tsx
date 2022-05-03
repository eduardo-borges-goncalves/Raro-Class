import { useState } from "react"

import { Thumbnail } from "./style"
import { Star } from "../StarButton/style"

import starOff from '../../assets/images/StarButton/starOff.png'
import starOn from "../../assets/images/StarButton/starOn.png"
import ThumbPadrao from "../../assets/images/thumb-padrao/thumbnail-padrao.jpg"
import { TVideo } from "../../types/Video"
import { Link } from "react-router-dom"
import apiClient from "../../services/api-client"
import { useAuthentication, useFavoriteVideos } from "../../context"
import { Erro } from "../Erro"

export const VideoThumbnail = ({
  id,
  nome,
  duracao,
  thumbUrl,
  url,
  createdAt,
  descricao,
  dataPublicacao,
  topico,
  tags}: TVideo) => {
  const [erro, setErro] = useState('')
  const [favoriting, setFavoriting] = useState(false)
  const { authData } = useAuthentication()
  const { favoriteVideos, setFavoriteVideos, deleteFavoriteVideo } = useFavoriteVideos()

  const video = {
    id,
    nome,
    duracao,
    thumbUrl,
    url,
    topico
  }

  const isVideoFavorited = () => {
    return favoriteVideos.find(video => video.id === id)
  }

  const handleFavoriteVideo = async () => {
    setFavoriting(true)
    if (!isVideoFavorited()) {
      try {
        await apiClient.post(`/videos/${id}/favoritos`)
        setFavoriteVideos([...favoriteVideos, video])
      } catch (error: any) {
        setErro('Erro ao favoritar vídeo')
        throw new Error(error)
      }
    } else {
      try {
        await apiClient.delete(`/videos/${id}/favoritos`)
        deleteFavoriteVideo(id)
      } catch (error: any) {
        setErro('Erro ao favoritar vídeo')
        throw new Error(error)
      }
    }
    setFavoriting(false)
  }

  return (
    <Thumbnail>
      <Link className="thumbnail" to={`/video/${id}`}>
        <div className="shadow">
          <img
            src={thumbUrl ? thumbUrl : ThumbPadrao}
            alt={`thumbnail do vídeo ${nome}`}
            id="thumb-img" />
        </div>
        <div className="descricao">
          <span>
            {nome.length > 54 ? `${nome.substring(0, 54)}...` : nome}
          </span>
        </div>
      </Link>
      {erro && <Erro setErro={setErro}>{erro}</Erro>}
      <div id="thumb-infos"> 
        {
          authData.access_token &&
          <Star onClick={handleFavoriteVideo} disabled={favoriting} >
            <img
              src={isVideoFavorited() ? starOn : starOff}
              alt="botão de favoritar vídeo"
              onClick={handleFavoriteVideo} />
          </Star>
        }
        <span id="duracao">{duracao.replace(/m/g, ":00").replace(/h/, ":")}</span>
      </div>
    </Thumbnail>
  )
}
