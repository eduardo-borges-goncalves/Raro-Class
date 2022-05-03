import { styled } from "@mui/system";
import { Input as InputUI } from "@mui/material";

export const Input = styled(InputUI)`
  width: 100%;
  & input {
    margin-top: 30px;
  }
  & + button {
    margin-top: 5rem;
  }
`

export const InputReg = styled(InputUI)`
  width: 80%;
  margin-bottom: 30px;
`

export const InputLight = styled(Input)`
  color: white;
`
