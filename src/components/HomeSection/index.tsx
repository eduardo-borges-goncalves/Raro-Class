import { useEffect } from "react"
import useVideos from "../../hooks/useVideos"
import { TVideo } from "../../types/Video"
import { capitalize } from "../../utils/capitalize"
import { CardRow } from "../Cards/style"
import { SpanCard } from "../SpanCard/style"
import { VideoCarousel } from "../VideoCarousel"
import { VideoList } from "../VideoList"

type HSProps = {
  topico: string, 
  videos: TVideo[],
}

export const HomeSection = ({ topico, videos}:HSProps) => {
  return (
    <section >
      <CardRow>
        <h1> {capitalize(topico)} </h1>
      </CardRow>
      {
        videos.length > 3 ?
          <VideoCarousel videos={videos} />
          :
          <VideoList videos={videos} />
      }
    </section>
  )
}