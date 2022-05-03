import { useState } from "react"
import { PinkButton } from "../../components/Button/style"
import apiClient from "../../services/api-client"
import { ContainerDegrade } from "../Containers/style"
import { InputReg } from "../Input/style"
import { SpanCard } from "../SpanCard/style"
import { Form } from "./style"
import useLogin from "../../hooks/useLogin"
import { IconButton, InputAdornment } from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

export const RegisterPassword = () => {
  const [ nome, setNome ] = useState('')
  const [ email, setEmail ] = useState("")
  const [ senha, setSenha ] = useState("")
  const [ confirmarSenha, setConfirmarSenha ] = useState("")
  const [ codigoAcesso, setCodigoAcesso ] = useState("")

  const [ cadastrando, setCadastrando ] = useState(false)
  const [ cadastrado, setCadastrado ] = useState(false)
  const [ erro, setErro ] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const login = useLogin(setErro)

  const handleDataValidation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErro('')
    if (nome.length < 3) setErro('O nome deve ter pelo menos 3 caracteres')
    else if (senha.length < 6) setErro("A senha deve possuir no mínimo 6 caracteres")
    else if (senha !== confirmarSenha) setErro('As senhas não são iguais')
    else {
      registerUser()
    }
  }

  const registerUser = async () => {
    setErro('')
    setCadastrando(true)
    setCadastrado(false)
    try {
      const response = await apiClient.post('/auth/cadastrar', { nome, email, senha, codigoAcesso })
      const { id } = response.data
      if (id){
        setCadastrado(true)
        login.login(email, senha)
      }  
    } catch (error:any) {
      setCadastrando(false)
      setErro("Erro ao registrar usuário(a)")
    }
    setCadastrando(false)
  }

  return (
    <ContainerDegrade>
      <Form action="#" onSubmit={ handleDataValidation }>
        <InputReg
          required
          type='text'
          placeholder="Nome"
          onFocus={()=> setErro('')}
          onChange={(e) => setNome(e.target.value)}/>
        <InputReg
          required
          type='email'
          placeholder="Email"
          onFocus={()=> setErro('')}
          onChange={(e) => setEmail(e.target.value)}/>
        <InputReg
          required
          type={showPassword ? "text" : "password"}
          placeholder="Senha"
          onFocus={()=> setErro('')}
          onChange={(e) => setSenha(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          />
        <InputReg
          required
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirmar Senha"
          onFocus={()=> setErro('')}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          />
        <InputReg
          required
          type='text'
          placeholder="Código de Acesso"
          onFocus={()=> setErro('')}
          onChange={(e) => setCodigoAcesso(e.target.value)}/>
        <SpanCard >
          { erro && <span > {erro}</span> }
        </SpanCard>
        {
          cadastrado? 
          <PinkButton>Cadastrado!</PinkButton>
          :
          <PinkButton 
            disabled={cadastrando}
            type="submit"
            style={{width: "14rem"}} >
            {cadastrando ? "Cadastrando...":"Cadastrar"}
          </PinkButton>
        }
      </Form>
    </ContainerDegrade>
  )
}