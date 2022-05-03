import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom"
import { useAuthentication, useFavoriteVideos } from "../../context"
import useVideos from "../../hooks/useVideos"
import { Nav } from "../Header/style"

export const Navigation = () => {

  const navigate = useNavigate()

  const { authData, updateAuthData, setIsAuthenticated } = useAuthentication()
  const { setVideos } = useVideos()
  const { setFavoriteVideos } = useFavoriteVideos()
  const access_token = authData.access_token

  const logout = () => {
    Cookies.remove('access_token')
    Cookies.remove('id')
    Cookies.remove('nome')
    Cookies.remove('foto')
    const authData = {
      access_token: "", 
      id: "",
      nome: "", 
      foto: ""
    }
    updateAuthData(authData)
    setIsAuthenticated(false)
    setVideos([])
    setFavoriteVideos([])
    navigate("/")
  }

  return (
    <Nav>
      {window.location.pathname !== "/" &&
        <Link to={"/"} > Home </Link>
      }

      { access_token ?
          <Link to={"/"} onClick={logout}> Sair </Link>
        :
        <Link to={"/login"} > Login </Link> 
      }
    </Nav>
  )
}