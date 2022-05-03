import useVideos from "../../hooks/useVideos"
import { TVideo } from "../../types/Video"
import { SpanCard } from "../SpanCard/style"
import { VideoList } from "../VideoList"

type HPSProps = {
  videos: TVideo[]
}

export const HomePublicSection = ({ videos }: HPSProps) => (
    <section>
      <h1> Vídeos Públicos </h1>
      <VideoList videos={videos} />
    </section>
)
