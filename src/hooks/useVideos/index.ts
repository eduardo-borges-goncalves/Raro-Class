import { useEffect, useState } from "react"
import { useAuthentication } from "../../context"
import apiClient from "../../services/api-client"
import { TVideo } from '../../types/Video'

const useVideos = () => {
  const { authData } = useAuthentication()
  const [videos, setVideos] = useState<TVideo[]>([])
  const [erro, setErro] = useState<string>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await apiClient.get("/videos")
        setVideos(response.data)
      } catch (error: any) {
        setErro("Opa, ocorreu um erro. Por favor, tente novamente mais tarde.")
      } finally {
        setLoading(false)
      }
    }
    getVideos()
  }, [authData])

  return { videos, setVideos, erro, loading }
}

export default useVideos;