import styled from "styled-components";

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;    
    width: 4rem;
    
    img {
        width: 4rem;
        border-radius: 50%;
        align-self: flex-start;
        padding: 5%;
    }
`


export const CommentColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50vw;
`

export const DivRow = styled.div`
    display: flex;
`

export const NameUser = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: var(--azul-cobalto);
    margin-bottom: 0.5rem;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50vw;
`

export const TextComment = styled.div`
    text-align: justify;
    width: 100%;

    .MuiDivider-root {
        margin: 0;
        padding-top: 0.625rem;
    }
`

export const CommentVotesSection = styled.div`
    width: 100%;
    padding-top: 0.625rem;
    display: flex;
`

export const VoteIcon = styled.div`
    margin-right: 0.75rem;
    display: flex;
    align-items: center;
    width: 35px;
    gap: 0.375rem;
    cursor: pointer;

    svg {
        font-size: 1rem;
    }
`

export const CommentActions = styled.div`
    font-size: 1.25rem;
    align-self: baseline;
    color: var(--text-title);
    display: flex;
    width: 20vw;
    cursor: pointer;
`