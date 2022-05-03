import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "../../components/Comments";
import { NextVideos } from "../../components/NextVideos";
import { VideoNavigation } from "../../components/VideoNavigation";
import { useFavoriteVideos } from "../../context";
import apiClient from "../../services/api-client";
import { TVideo } from '../../types/Video';
import ReactPlayer from "react-player";
import { DataContainer, Fav, MiddleSection, Tag, Text, Title, VideoContainer, VideoDetails, VideoPlayerSection, VideoWrapper } from "./style"
import { useAuthentication } from "../../context";

import { Star } from "../../components/StarButton/style";
import starOn from "../../assets/images/StarButton/starOn.png"
import croppedStar from "../../assets/images/StarButton/croppedStar.png"

export const VideoPage = () => {
  const { authData } = useAuthentication()
  const [showSection, setShowSection] = useState<string>('comentarios')
  const [video, setVideo] = useState<TVideo>()

  const { id } = useParams();

  const { favoriteVideos, setFavoriteVideos, deleteFavoriteVideo } = useFavoriteVideos()
  const isFavorited = () => {
    if (favoriteVideos.find(video => video.id === id)) {
      return true
    }
    return false
  }

  const [favoriting, setFavoriting] = useState(false)

  const handleFavoriteVideo = async () => {
    setFavoriting(true)
    if (!isFavorited()) {
      await apiClient.post(`/videos/${id}/favoritos`)
      video && setFavoriteVideos([...favoriteVideos, video])
    } else {
      await apiClient.delete(`/videos/${id}/favoritos`)
      id && deleteFavoriteVideo(id)

    }
    setFavoriting(false)
  }

  const handleChangeVisible = (visible: string) => {
    setShowSection(visible)
  }

  useEffect(() => {
    const getVideo = async () => {
      const response = await apiClient.get(`/videos/${id}`)
      setVideo(response.data)
    }
    getVideo()
  }, [id])

  return (
    <main>
      <VideoContainer>
        <VideoWrapper>
          <VideoPlayerSection>
            <ReactPlayer width={'100%'} height={'100%'} url={video?.url} controls={true} playing={true} />
          </VideoPlayerSection>
          <VideoDetails>
            <MiddleSection>
              <Title>{video?.nome}</Title>
              <Fav>
                {authData.access_token &&
                  <Star onClick={handleFavoriteVideo} disabled={favoriting}>
                    <img
                      src={isFavorited() ? starOn : croppedStar}
                      style={{ width: '2.2rem', height: '2.2rem', opacity: '0.8' }}
                      alt="botão de favoritar vídeo"
                      onClick={handleFavoriteVideo}
                    />
                  </Star>}
              </Fav>
            </MiddleSection>
            <Text>{video?.descricao}</Text>
            <Text>{video?.tags && video.tags.map((tag: string, index: number) => <Tag key={index}>{tag}</Tag>)}</Text>
          </VideoDetails>
        </VideoWrapper>
      </VideoContainer>
      <VideoNavigation handleChangeVisible={handleChangeVisible} showSection={showSection} />
      {authData.access_token &&
        <DataContainer>
          {showSection === 'comentarios' && id &&
            <Comments />
          }
          {showSection === 'proximos' && id && <NextVideos id={id} />}
        </DataContainer>
      }
    </main>
  )
}
