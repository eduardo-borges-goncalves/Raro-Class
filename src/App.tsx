import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecoverPasswordPage } from './pages/RecoverPasswordPage';
import { RegisterPage } from './pages/RegisterPage';
import { VideoPage } from './pages/VideoPage';
import { FavoriteVideosProvider, useAuthentication } from './context/index';
import { GlobalStyle } from './styles/global';
import useVideos from './hooks/useVideos'

function App() {
  
  const { updateAuthData, setIsAuthenticated } = useAuthentication()
  const { setVideos } = useVideos()
  
  useEffect(()=> {
    const access_token = Cookies.get("access_token")
    const id = Cookies.get('id')
    const nome = Cookies.get('nome')
    const foto = Cookies.get('foto')    
    
    if (access_token && id && nome && foto){
      setIsAuthenticated(true)
      updateAuthData( {access_token, id, nome, foto} )
      setVideos([]) 
    } 
  }, [])

  return (
    <>
      <FavoriteVideosProvider>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route path='/' element={<Layout />}>         
            <Route index element={<HomePage />} />
            <Route path='video/:id' element={<VideoPage />} />
            <Route path='/recover-password' element={<RecoverPasswordPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </FavoriteVideosProvider>        
      <GlobalStyle/>
    </>
  );
}

export default App;
