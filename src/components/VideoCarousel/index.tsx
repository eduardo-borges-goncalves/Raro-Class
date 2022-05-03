import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css'
import { VideoThumbnail } from '../VideoThumbnail';
import { TVideo } from '../../types/Video'
import { VideoContainer } from '../VideoList/style'

type VideosProps = {
    videos: TVideo[], 
  }

export const VideoCarousel = ({videos} : VideosProps) => {


    const videosThumbsArray = () => 
        videos.map((video: TVideo) =>
            <VideoThumbnail key={video.id} {...video} />
        );

    return (
    <VideoContainer style={{ border: "none", padding: "0 0 0.5rem 0"}}>
        {videosThumbsArray().length === videos.length && 
            <AliceCarousel 
                mouseTracking
                disableButtonsControls 
                infinite
                responsive={{
                    550: {items: 1.80},
                    575: {items: 1.90},
                    600: {items: 2.00},
                    650: {items: 2.10},
                    700: {items: 2.15},
                    800: {items: 2.4},
                    900: {items: 2.75},
                    1000: {items: 3},
                    1100: {items: 3.35},
                    1200: {items: 3.70},
                    1300: {items: 4.},
                }} 
                items={videosThumbsArray()} 
            />
        }
    </VideoContainer>
    )
}