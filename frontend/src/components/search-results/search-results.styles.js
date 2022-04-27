import styled from 'styled-components';

export const ResultsContainer = styled.div`
    background-color: #000000;
    padding: 2rem;
    margin-right: 4rem;
    margin-left: 4rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-radius: 25px; 
`

export const ResultCard = styled.div`
    margin: 8px;
    border-radius: 25px;
    display: flex;
    background-color: grey; 
    justify-content: flex-start;

    p { 
        text-align: left;
        width: 30vw;
    }


    img {
        border-radius: 25px;
        margin-left: 4px;
        padding: 6px;
        height: 350px;
    }

`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    margin-right: 4rem;

    h2 {
        font-size: 2rem;
        margin-bottom: 2px;
    }


`