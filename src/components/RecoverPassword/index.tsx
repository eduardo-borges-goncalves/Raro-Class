import React, { Dispatch, SetStateAction } from "react";
import { PinkButton, OceanoButton } from "../../components/Button/style";
import { Card } from "../../components/Cards/style";
import { InputLight, Input } from "../../components/Input/style";
import { SpanCard } from "../../components/SpanCard/style";
import { LeftPanel, RightPanel, Text, RecoverContainer, TextLight } from "./style"

type RecoverPasswordProps = {
  setCode: Dispatch<SetStateAction<string>>,
  sendCode: (event: React.FormEvent<HTMLFormElement>) => Promise<void>, 
  setEmail: Dispatch<SetStateAction<string>>, 
  setPassword: Dispatch<SetStateAction<string>>, 
  setConfirmPassword: Dispatch<SetStateAction<string>>, 
  setErrorCode: Dispatch<SetStateAction<string>>, 
  setErrorPassword: Dispatch<SetStateAction<string>>, 
  errorCode: string, 
  errorPassword: string, 
  handleDataValidation: (event: React.FormEvent<HTMLFormElement>) => void, 
}

export const RecoverPassword = ({
  setCode, 
  sendCode, 
  setEmail, 
  setPassword,
  setConfirmPassword, 
  setErrorCode, 
  setErrorPassword, 
  errorCode,
  errorPassword,
  handleDataValidation,
}:RecoverPasswordProps) => {
  return (
    <RecoverContainer>
      <LeftPanel>
        <Text>
          Solicite o código de recuperação de senha
        </Text>
        <Card>
          <form action="#" onSubmit={sendCode} >
            <Input
              required 
              type="email"
              placeholder="Email"
              onFocus={() => setErrorCode('')}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SpanCard>{errorCode}</SpanCard>
            <OceanoButton type="submit">Solicitar Código</OceanoButton>
          </form>
        </Card>
      </LeftPanel>

      <RightPanel>
        <TextLight>
          Já possui o código? Recupere sua Senha
        </TextLight>
        <Card>
          <form action="#" onSubmit={handleDataValidation} >
            <InputLight
              type="text"
              color="secondary"
              placeholder="Código"
              onFocus={() => setErrorPassword('')}
              onChange={(e) => setCode(e.target.value)}
            />
            <InputLight
              type="password"
              color="secondary"
              placeholder=" Nova Senha"
              onFocus={() => setErrorPassword('')}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputLight
              type="password"
              color="secondary"
              placeholder="Confirmação de Senha"
              onFocus={() => setErrorPassword('')}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <SpanCard>{errorPassword}</SpanCard>
            <PinkButton type="submit">Nova Senha</PinkButton>
          </form>
        </Card>
      </RightPanel>
    </RecoverContainer>
  )
}