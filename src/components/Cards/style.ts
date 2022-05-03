import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  height: 300px;

  footer {
    color: #777777;
    margin-top: 2.25rem;
    display: flex;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  a {
    color: #777777;
    padding: 5px 10px;
    text-decoration: none;
    opacity: 0.7;
    transition: all ease-in-out 0.2s;

    & + a {
      margin-left: 0.75rem;
    }
    :hover {
      color: #333333;
      opacity: 1;
    }
  }
`

export const CommentCard = styled.section `
  display: flex;
  justify-content: center;
  width: 80%;
  padding: 2% 2% 0;
  gap: 1rem ;

  & .MuiTextField-root {
    width: 95%;
  }

  @media (max-width:485px) {
    flex-direction: column;
  }
`

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  .link {
    margin-left: 2.75%;
    margin-right: 2.75%;
    color: var(--azul-violeta);
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
`
