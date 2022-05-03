import { Dispatch, SetStateAction } from "react"
import { ErroWrapper } from "./style"

type ErroProps = {
  setErro: Dispatch<SetStateAction<string>>, 
  children: string
}

export const Erro = ({setErro, children}:ErroProps) => (
  <ErroWrapper >
    <button onClick={() => setErro('')}>x</button>
    <span >{children}</span>
  </ErroWrapper>
)