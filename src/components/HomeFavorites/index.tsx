import { useFavoriteVideos } from "../../context"
import { TVideo } from "../../types/Video"
import { NoFavoritesSection } from "../NoFavoritesSection"
import { SpanCard } from "../SpanCard/style"
import { VideoCarousel } from "../VideoCarousel"
import { VideoList } from "../VideoList"

type HFProps = {
  favoriteVideos: TVideo[],
}

export const HomeFavorites = ({ favoriteVideos }: HFProps) => {
  const { erroFV } = useFavoriteVideos()

  return (
    <section>
      <h1> Seus Vídeos Favoritos </h1>
      {favoriteVideos.length !== 0 ? 
      <>  
      {
        favoriteVideos.length > 3 ?
          <VideoCarousel videos={favoriteVideos} />
          :
          <VideoList videos={favoriteVideos} />
      }
      </>
      :
      <NoFavoritesSection />
    }
      {erroFV && <SpanCard>{erroFV}</SpanCard>}
    </section>
  )
}