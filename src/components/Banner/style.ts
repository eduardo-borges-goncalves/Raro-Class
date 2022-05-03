import styled from "styled-components";

export const BannerSpan = styled.span`
  position: absolute;
  margin: 0 auto;
  color: white;
  bottom: 1.25rem;
  letter-spacing: 5px;
  font-size: small;
  text-shadow: 1px 1px 1px rgb(0,0,0, 0.2);
  max-width: 100%;
`

export const BannerFaixa = styled.div`
  width: 95% ;
  background-color: var(--azul-cobalto);
  position:relative; 
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  box-shadow: 1px 2px 8px 2px rgb(0,0,0, 0.2);
  border-radius: 0.25rem;

  @media (max-width:485px) {
    width: 95%;
  }
  @media (max-width:425px) {
    width: 100%;
    border-radius: 0;
  }
`