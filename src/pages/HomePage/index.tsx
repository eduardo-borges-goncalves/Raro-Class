import { useEffect, useState } from "react"
import { Banner } from "../../components/Banner"
import LoadingSpinner from "../../components/LoadingSpinner"
import { HomeContainer } from "./style"
import { useAuthentication, useFavoriteVideos } from "../../context/index"
import useVideos from '../../hooks/useVideos'
import { HomeFavorites } from "../../components/HomeFavorites"
import { HomeSection } from "../../components/HomeSection"
import { HomePublicSection } from "../../components/HomePublicSection"
import { SpanCard } from "../../components/SpanCard/style"

export const HomePage = () => {
  const [topicos, setTopicos] = useState<string[]>([])
  const { isAuthenticated } = useAuthentication() 
  const { favoriteVideos, getFavoriteVideos } = useFavoriteVideos()
  const { videos, erro, loading } = useVideos()

  const filteredVideos = (topico: string) => {
    return videos.filter(video => video.topico === topico)
  }

  useEffect(() => {
    if (isAuthenticated) favoriteVideos.length <= 0 && getFavoriteVideos()
  }, [isAuthenticated])

  useEffect(() => {
    const createTopicosList = () => {
      videos.forEach(video => {
        if(!topicos.includes(video.topico)) setTopicos([...topicos, video.topico])
      })      
    }
    createTopicosList()
  }, [videos, topicos, isAuthenticated])

  return (
    <HomeContainer>
      <Banner />
      { isAuthenticated ? 
      <>
        <HomeFavorites favoriteVideos={favoriteVideos}/> 
      {
        loading ?
          <LoadingSpinner size={5} />
          :
          topicos.sort().map((topico, index) => (
              <HomeSection  
                key={index}
                topico={topico}
                videos={filteredVideos(topico)} />
          ))    
      }
      </>
      :
      <HomePublicSection videos={videos}/>
      }
      {erro && <SpanCard>{erro}</SpanCard>}  
    </HomeContainer>
  )
}