import styled from "styled-components";

export const Thumbnail = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  transition: ease-in-out all 0.3s;
  border: none;
  position: relative;
  background-color: #ECECEC;
  width: fit-content;
  
  &:hover{
    background-color: rgb(224, 224, 224);
  }

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    padding: 0.125rem;
    border-radius: 0.25rem;
    transition: ease-in-out all 0.2s;
  }
  
  a:focus-within {
    background-color: rgba(0, 0, 0, 0.15);
  }

  span {
    font-weight: bold;
    color: var(--text-title) ;
  }

  #thumb-img {
    width: 277px;
    height: 153px;
  }
    
  .shadow {
    position: relative;
    width: 277px;
    height: 153px;
    transition: all ease-in-out 0.2s;
  }
  
  .shadow:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background: linear-gradient(-20deg,rgba(250,250,250,.2),rgba(0,0,0,0) 45%,rgba(0,0,0,.0) 100%);
  }          

  #duracao {
    background-color: rgba(0, 0, 0, 0.75);
    bottom: 2px;
    border-radius: 0.125rem;
    padding: 2px 3px;
    font-size: 0.8rem;
    color: white;
    right: 1.5rem;
  }
  
  .descricao {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 1rem 0.5rem;
    border-radius: 0 0 0.125rem 0.125rem ;
    max-width: 277px;
    width: 100%;
    height: 4rem;
  }

  #thumb-infos {
    position: absolute;   
    padding: 0 0.4rem 0 0.5rem; 
    display: flex;
    bottom: 4.4rem;
    gap: 0.25rem;
    cursor: pointer;

    span {
      height: 20px;
    }
  }

  @media (max-width:550px) {
    width: 100%;
    
    #thumb-img, .shadow {
      height: auto ;
      width: 100%;
    }
    
    .descricao {
      height: 4.5rem;
      font-size: 1.2rem;
    }
    #thumb-infos {
      bottom: 5.2rem;
    }
  }
  @media (max-width:285px) {
    .descricao {
      height: 3.5rem;
      font-size: 1.2rem;
    }
    #thumb-infos {
      bottom: 4.2rem;
    }
  }
`