import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const SpinnerImg = styled.img<{size: number}>`
  width: ${props => (props.size)}vw;
`