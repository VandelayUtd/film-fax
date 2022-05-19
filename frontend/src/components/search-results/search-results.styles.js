import styled from 'styled-components';



export const ResultCard = styled.div`
    margin: 1em;
    border-radius: 25px;
    display: flex;
    flex: row;
    background-color: grey; 
    justify-content: flex-start;

    span {
        font-size: 1.5em;
    }

    img {
        border-radius: 25px;
        margin-left: 4px;
        padding: 6px; 
        height: 30rem;
    }

`


export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    margin-right: 4rem;

    h2 {
        font-size: 2em;
        margin-bottom: 2px;
    }


`