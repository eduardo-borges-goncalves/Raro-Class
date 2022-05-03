import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { useAuthentication } from "../../context"
import apiClient from "../../services/api-client"
import useVideos from "../useVideos"

const useLogin = (setLoginErro: React.Dispatch<React.SetStateAction<string>>) => {

    const { updateAuthData, setIsAuthenticated } = useAuthentication()
    const { setVideos } = useVideos()
    const navigate = useNavigate()

    const login = async (email: string, senha: string ) => {
        try {
            const response = await apiClient.post("/auth/login", { email, senha })
            const { access_token, id, nome, foto } = response.data
            console.log(response.data);
            
            if (access_token) {
                updateAuthData({id, access_token, nome, foto})
                setIsAuthenticated(true)
                setVideos([])
                Cookies.set("access_token", access_token, { expires: 365 })
                Cookies.set("id", id, { expires: 365 })
                Cookies.set("nome", nome, { expires: 365 })
                Cookies.set("foto", foto, { expires: 365 })
                navigate("/");
            } 
            else setLoginErro('Usuário ou senha Inválidos') 

        } catch (error: any) {
            error.response.data.statusCode === 401 
            ?
            setLoginErro('Usuário ou senha Inválidos') 
            :
            setLoginErro('Erro ao autenticar usuário. Tente novamente mais tarde.');
        }
    }

    return { login }
}

export default useLogin;