import styled from "styled-components";

export const Nav = styled.nav`
  background-color: var(--azul-cobalto);
  color: white;
  padding: 0.8rem 1.75rem;
  display: flex;
  justify-content: flex-end;
  
  a {
    color: #CDCDCD;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.25s ease-in-out ;

    & + a {
      margin-left: 1.75rem;
    }

    :hover, 
    :focus {
      color: #E5E5E5;
    }
  }

`