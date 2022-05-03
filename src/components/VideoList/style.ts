import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 1rem;
  width: 95%;
  margin: auto;
  padding: 0 0 3.5rem 0;
  border-bottom: 0.30rem solid rgb(224, 224, 224) ;

  @media (max-width: 590px) {
    justify-content: center;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`