import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "../Input/style"
import { PinkButton } from "../Button/style"
import { Container } from "../Containers/style"
import { SpanCard } from "../SpanCard/style"
import { LeftPanel, RightPanel } from "./style"

import { IconButton, InputAdornment } from "@mui/material"
import { TiMediaRecord } from "react-icons/ti"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

import useLogin from "../../hooks/useLogin"
import { LogoVertical } from "../LogoVertical"
import { Card } from "../Cards/style"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [erro, setErro] = useState('')
  const login = useLogin(setErro)

  const handleAuthUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErro('')
    senha.length < 6 ?
      setErro('Usuário ou senha Inválidos') :
      login.login(email, senha)
  }

  return (
    <Container>
      <LeftPanel>
        <LogoVertical />
      </LeftPanel>

      <RightPanel>
        <Card>
          <form action="#" onSubmit={handleAuthUser}>
            <Input
              required
              id="email"
              type="email"
              placeholder="Email"
              onFocus={()=> setErro('')}
              onChange={(e) => setEmail(e.target.value)} />
            <Input
              required
              id="standard-adornment-password"
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
            <SpanCard>{erro}</SpanCard>
            <PinkButton type="submit">Entrar</PinkButton>
          </form>
          <footer>
            <Link to={"/recover-password"}>Esqueci a senha</Link>
            <TiMediaRecord />
            <Link to={"/register"}>Não tenho cadastro</Link>
          </footer>
        </Card>
      </RightPanel>
    </Container>
  )
}