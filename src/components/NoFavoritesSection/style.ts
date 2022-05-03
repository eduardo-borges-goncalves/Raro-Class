import styled from "styled-components";

export const MessagemContainer = styled.div`
    transition: ease-in-out all 0.3s;
    border: none;
    display: flex;
    background-color: #ECECEC;
    margin-left: 3vw;
    width: fit-content;
    height: 4vw;
    justify-content: flex-start;
    align-items: center;
    padding: 1vw;
    box-shadow: 1px 1px 5px 1px rgb(0,0,0, 0.2);
    border-radius: 1vw;
    font-weight: 500;

    @media (max-width:500px) {
        height: 15vw;
        max-width: 94vw
    }
}
`