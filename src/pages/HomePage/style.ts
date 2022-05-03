import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem 6rem 0rem;
  gap: 2.5rem;
  width: 1240px;
  max-width: 92%;
  margin: auto;

  h1 {
    margin-bottom: 2rem;
    margin-left: 2.75%;
  }
  
  /* #favoritos {
    section {
      flex-wrap: nowrap;
      overflow: auto;
    }
  } */

  @media (max-width: 815px) {
    max-width: 95%;
    h1 {
      text-align: center;
      margin-left: 0;
    }
  
  }
  @media (max-width: 700px) {
    max-width: 100%;
    padding: 1rem 0rem 6rem 0rem;
  }
`