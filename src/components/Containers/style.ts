import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100vh;

  input {
    & + input {
    margin-top: 0.75rem;
    }
    & + button {
      margin-top: 3.75rem
    }
  }
  
`

export const ContainerDegrade = styled.section`
  background-image: linear-gradient(to right, var(--azul-oceano), var(--azul-cobalto));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100vh;

  input {
    & + input {
    margin-top: 0.75rem;
    }
    & + button {
      margin-top: 3.75rem;
    }
  }
  
`

export const ContainerVertical = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 90px);

  input {
    & + input {
    margin-top: 0.75rem;
    }
    & + button {
      margin-top: 3.75rem
    }
  }
`

export const ContainerVerticalAuto = styled(ContainerVertical)`
  height: auto;
  padding: 0 0 3rem 0;
`

