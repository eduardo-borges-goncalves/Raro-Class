import styled from "styled-components";

export const Logo = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--azul-cobalto);
  height: 100vh;
  left: 0;

  span {
    color: white;
    bottom: 3.2rem;
    letter-spacing: 10px;
    font-size: 2.5rem;
    text-shadow: 1px 1px 1px rgb(0,0,0, 0.2);
  }
  
  #logoDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0 32% 0;
  }
`