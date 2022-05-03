import styled from "styled-components";

export const Menu = styled.header`
    width: 100%;
    background-color: whitesmoke;
    display: flex;    
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 2px 2px 6px 2px rgb(0,0,0,0.2);
`

export const Nav = styled.nav`
    display: flex;        
    height: 100%;        
`

export const ButtonNav = styled.button <{ selected: boolean }>`      
    background-color: ${p => p.selected ? `rgb(229, 229, 229)` : `whitesmoke`};
    border: none;
    font-size: 1.1rem;
    color: ${p => p.selected ? `var(--azul-oceano)` : `var(--azul-cobalto)`};        
    padding: 1.2rem; 
`

export const Unavailable = styled.section`
    height: 100%;    
    background-color: whitesmoke;
    border: none;
    font-size: 1.1rem;
    color: var(--azul-oceano);        
    padding: 1rem;
`