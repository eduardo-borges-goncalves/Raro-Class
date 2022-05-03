import styled from "styled-components";

export const RecoverContainer = styled.section`
  display: flex;
  max-width: 100%;
  width: 800px;
  box-shadow: 1px 1px 5px 1px rgb(0,0,0, 0.1);
  margin: auto;
  margin-top: 3%;
`


export const LeftPanel = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 34rem;
  height: 80vh;
  max-height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white; 
`

export const RightPanel = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--azul-cobalto);
  width: 50%;
  height: 34rem;
  height: 80vh;
  max-height: 100%;
  `
  
  export const Text = styled.span`
    display:flex;  
    color: var(--azul-cobalto);
    font-weight: bold;
    margin-bottom: 7%;
  `
  
  export const TextLight = styled(Text)`
    color: var(--shapped);
  `