import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import apiClient from "../services/api-client";
import { TVideo } from "../types/Video";

type Authentication = {
  id: string,
  access_token: string,
  nome: string,
  foto: string
}

type AuthenticationProps = {
  authData: Authentication,
  updateAuthData: (authData:Authentication) => void, 
  isAuthenticated: boolean, 
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
}

export const AuthenticationContext = createContext<AuthenticationProps>({
  authData: { id: "", access_token: "", nome: "", foto:"" },
  updateAuthData: (_:Authentication) => {}, 
  isAuthenticated: false, 
  setIsAuthenticated: () => {}
})

export const AuthenticationProvider: React.FC = ({ children }) => {
  const [ authData, setAuthData ] = useState<Authentication>({
    id: "",
    access_token: "",
    nome: "",
    foto: ""
  })
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)

  const updateAuthData = (authData:Authentication) => {
    setAuthData(authData)
  }

  return (
    <AuthenticationContext.Provider
      value={{
        authData, 
        updateAuthData, 
        isAuthenticated,  
        setIsAuthenticated,
      }}
      >
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext)

  if(!context) {
    throw new Error("Você somente pode usar este hook debaixo de um <AuthenticationContextProvider")
  }
  return context
}

type FavoriteVideosProps = {
  favoriteVideos: TVideo[],
  setFavoriteVideos: (favoriteVideo: TVideo[]) => void,
  getFavoriteVideos: () => void,
  deleteFavoriteVideo: (id:string) => void, 
  erroFV: string, 
}

export const FavoriteVideosContext = createContext<FavoriteVideosProps>({
  favoriteVideos: [],
  setFavoriteVideos: (_: TVideo[]) => { },
  getFavoriteVideos: () => {},
  deleteFavoriteVideo: (_:string) => {}, 
  erroFV: ''
})

export const FavoriteVideosProvider: React.FC = ({ children }) => {
  const [ favoriteVideos, setFavoriteVideos ] = useState<TVideo[]>([])
  const [ erroFV,setErroFV ] = useState('')

  const getFavoriteVideos = async () => {
    try {
      const response = await apiClient.get("/videos/favoritos")
      setFavoriteVideos(response.data)
      setErroFV('')
    } catch (error:any) {
      setErroFV("Opa, ocorreu um erro. Por favor, tente novamente mais tarde.")
    }
  }

  const deleteFavoriteVideo = (id:string) => {
    setFavoriteVideos(favoriteVideos.filter(item => item.id !== id))
  }

  return (
    <FavoriteVideosContext.Provider
      value={{
        favoriteVideos, 
        setFavoriteVideos,
        getFavoriteVideos, 
        deleteFavoriteVideo,
        erroFV
      }}
    >
      {children}
    </FavoriteVideosContext.Provider>
  )
}

export const useFavoriteVideos = () => {
  const context = useContext(FavoriteVideosContext)

  if (!context) {
    throw new Error("Você somente pode usar este hook debaixo de um <FavoriteVideosContextProvider>")
  }
  return context
}