import styled from "styled-components";

export const Poster = styled.img`
        border-radius: 4px;
        border: 1px solid orange; 
`

export const TextArea = styled.div`

    align-items: left;
    display:grid;

    span { 
        font-size: 1.3em;
        font-weight: 500;
        color: #00cc8f;
        float: left;
        text-align: left;
        font-family: 'Fira Sans';
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
