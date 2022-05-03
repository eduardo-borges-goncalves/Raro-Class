import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecoverPassword } from "../../components/RecoverPassword";
import apiClient from "../../services/api-client";

export const RecoverPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const navigate = useNavigate()

  const sendCode = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await apiClient.post('/auth/solicitar-codigo', { email });
      response.status === 201 && window.alert("Código enviado com sucesso!")
    } catch (error) {
      setErrorCode('Erro ao enviar código.');
    }
  }

  const handleDataValidation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorPassword('');
    if (password.length < 6) setErrorPassword("A senha deve possuir no mínimo 6 caracteres");
    else if (password !== confirmPassword) setErrorPassword('As senhas não são iguais');
    else {
      recoveryPassword()
      alert('Senha alterada com sucesso!')
      navigate('/login')
    };
  }

  const recoveryPassword = async () => {
    try {
      const response = await apiClient.patch('/auth/recuperar-senha', {
        codigo: code, novaSenha: password
      });
    } catch (error) {
      setErrorPassword('Erro ao recuperar a senha');
    }
  }
  return (<>
    { false ?
    <div>
    </div>
    :
    <RecoverPassword 
      setCode={setCode}
      sendCode={sendCode} 
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      setErrorCode={setErrorCode}
      setErrorPassword={setErrorPassword}
      errorCode={errorCode} 
      errorPassword={errorPassword}
      handleDataValidation={handleDataValidation} />
  }  
  </>)
}