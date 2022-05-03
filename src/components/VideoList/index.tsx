import { TVideo } from "../../types/Video"
import { VideoThumbnail } from "../VideoThumbnail"
import { VideoContainer } from "./style"

type VideosProps = {
  videos: TVideo[], 
}

export const VideoList = ({videos}:VideosProps) => {
  return (
    <VideoContainer>
      {
        videos && videos.map((video) => <VideoThumbnail key={video.id} {...video} />)
      }
    </VideoContainer>
  )
}