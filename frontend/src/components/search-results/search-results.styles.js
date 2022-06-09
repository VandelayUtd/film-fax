import styled from 'styled-components';



export const ResultCard = styled.div`
    margin: 1em;
    border-radius: 10px;
    display: grid;
    background-color: grey;
    align-items: center; 

    img {
        border-radius: 15px;
        padding: .75rem; 
        height: 30rem;
    }

`

export const TextArea = styled.div`

    align-items: left;
    display:grid;

    span { 
        font-size: 1.3em;
        font-weight: 500;
        float: left;
        text-align: left;
        font-family: 'Fira Sans', serif;
        margin-left: .75em;
    }
`

export const ButtonContainer = styled.div`

    justify-content: space-between;

    button {
        text-size: 2em;
        width: 8em;
        margin: .5em;
        padding: 1em;
        border-radius: 4px;
        border: 1px solid orange; 
    }
`
