import { styled } from "@mui/system"
import { Button as ButtonUI } from "@mui/material"
import  styled_components from "styled-components"

export const PinkButton = styled(ButtonUI)`
  background-color: var(--rosa);
  color: white;
  border: none;
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  transition: all ease-in-out 0.2s;
  opacity: 0.8;
  
  :hover {
    background-color: var(--rosa);
    opacity: 1;
    box-shadow: 2px 2px 15px 5px rgb(245, 72, 127, 0.2);
  }
`

export const OceanoButton = styled(ButtonUI)`
  background-color: var(--azul-oceano);
  color: white;
  border: none;
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  transition: all ease-in-out 0.2s;
  opacity: 1;
 
  :hover {
    background-color: var(--azul-oceano);
    filter: brightness(0.9);
  }
`

export const SendComment = styled(ButtonUI)`
  background-color: var(--rosa);
  color: white;
  border: none;
  width: 6rem;

  height: 2.5rem;
  font-size: 0.9rem;
  padding: 0 1rem;
  cursor: pointer;
  &:hover{
    background-color: #de2460;
  }
`

export const CancelButton = styled(ButtonUI)`
  background-color: #cfcfcf;
  color: white;
  border: none;
  width: 6rem;
  font-size: 0.9rem;
  padding: 0 1rem;
  margin-left: 0.625rem;
  height: 2.5rem;
  cursor: pointer;

  &:hover{
    background-color: #9e9e9e;
  }
`

export const NextButton = styled_components.button`
  border-radius: 50%;
  border: none;
  background-color: transparent;
  margin: 3rem 0 0  0;
  opacity: 0.7;
  transition: all ease-in-out .2s;
  img {
    width: 1.2rem; 
    transition: all ease-in-out .2s;
  }
  &:hover{
  opacity: 1;
    img{
      width: 1.4rem;
    }
  }
  &:disabled{
    display:none;
  }
` 