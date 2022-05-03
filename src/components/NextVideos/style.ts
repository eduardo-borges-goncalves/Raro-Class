import styled from "styled-components";

export const NextVideosContainer = styled.section`
    display: flex;
    width: 100%;
    padding: 20px;
    justify-content: center;

    div {
        justify-content: center;
    }

    @media (max-width: 550px) {
        padding: 0 ;
        margin-top: 1rem;
    }
    @media (max-width: 425px) {
        padding: 0 ;
        margin-top: 0;
    }
`