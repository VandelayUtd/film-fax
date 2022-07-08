import styled from "styled-components";

export const Container = styled.div`
    margin: 1em;
    border-radius: 10px;
    display: grid;
    background-color: black;
    align-items: center;

    img {
        margin: .75rem; 
        height: 30rem;
        border: 1px solid orange;
        max-width: 330px; 
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 325px;
        width: 330px;
        height: auto;

        img {
            width: 300px;
            height: auto;
        }
    }

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

    margin-left: 8px;
    margin-top: 2px;
    margin-bottom: 8px;
    float: left;

    button {
        font-size: .8em;
        font-weight: bold;
        font-family: 'Fira Sans';
        width: 8em;
        margin: .2em;
        padding: .6em;
        border: 1px solid orange; 

        &:hover {
                color: white;
                background: orange;
                border: 1px solid white;      
        }
    }

    
`