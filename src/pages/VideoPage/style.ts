import styled from "styled-components";

export const VideoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    background-color: #1C1D1F;
    width: 100%;    
`

export const VideoWrapper = styled.div`
    width: 800px;
    max-width: 95%;
    padding: 0;
    
    @media (min-width: 1200px ){
        width: 900px;
    }
    @media (min-width: 1300px ){
        width: 1000px;
    }
    @media (min-width: 1400px ){
        width: 1100px;
    }
    @media (max-width: 600px ){
        max-width: 100%;
    }
    @media (max-height: 850px ){
        width: 110vh;
    }
    @media (max-height: 750px ){
        width: 105vh;
    }
    @media (max-height: 680px ){
        width: 100vh;
    }
    @media (max-height: 610px ){
        width: 95vh;
    }
`

export const VideoPlayerSection = styled.section`  
    margin: 4.5vh 0 2.5vh;
    background-color: black;
    color: whitesmoke;
    box-shadow: 1px 1px 5px 1px rgb(0,0,0, 0.1);    
    border-radius: 0.25rem;

    @media (max-width: 600px ){
        margin: 0;
    }
`


export const VideoDetails = styled.div`
    display: flex;
    flex-direction: column;    
    margin: 1vw;   
    color: whitesmoke;

    @media (max-width: 600px ){
        margin: 2.5vh;
    }
`;


export const DataContainer = styled.section`
    display: flex;
    height: 400px;
    max-height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;   
`

export const Title = styled.span`
    height: fit-content;
    width: fit-content;    
    box-shadow: 0.06rem 0.06rem 0.3rem 0.06rem rgb(1,1,1, 0.1);
    margin-bottom: 0.9rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: whitesmoke;
`

export const Text = styled.span` 
    margin-bottom: 0.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 0;
    font-size: 1.1rem;
    color: whitesmoke;
`

export const Tag = styled.span`
    height: fit-content;
    width: fit-content;    
    padding: 0.375rem;
    margin-right: 0.625rem;
    background: var(--azul-violeta);
    border-radius: 10%; 
    box-shadow: 1px 1px 5px 1px rgb(1,1,1, 0.1);
    font-size: 0.8rem;
    color: whitesmoke;
    
    @media (max-width: 300px ){
        display: none;
    } 
`

export const MiddleSection = styled.div`
    display: flex;    
    justify-content: space-between;    
`

export const Fav = styled.div`
    padding-left: 0.9rem;
`