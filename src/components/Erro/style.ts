import styled from "styled-components";

export const ErroWrapper = styled.div`
  background-color: rgb(252, 169, 169);
  box-shadow: 2px 2px 4px 2px rgb(0,0,0, 0.2);
  position: absolute;
  z-index: 2;
  margin-bottom: 7rem;
  left: 11rem;
  padding: 0.75rem;
  border-radius: 0.125rem;
  width: 11rem;

  span {
    color: rgb(206, 18, 18);
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    border: none;
    color: white;
    padding: 0.05rem 0.3rem;
    transition: all ease-in-out 0.3s;

    &:hover {
      background-color: rgb(234, 225, 205, 0.4) ;
    }
  }

`