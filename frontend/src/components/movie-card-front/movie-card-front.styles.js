import styled from 'styled-components'; 

export const Card = styled.div`
    padding-top: 1rem; 
    background-color: #111111;
    transition: 0s background-color;
    
    img { 
        height: 300px;
        object-fit: contain;
        border-radius: 4px;
    }

    button {
        background: white;
        color: black;
        border: none;
        font-size: 1rem;
        padding: .5em .75em;
        cursor: pointer;
        transition: 0s background color;
    }

    div {
        text-align: left;
        margin-left: 2rem;
        font-family: 'Fira Sans';
        font-size: 1.2em;
        color: white;
        transition: 0s color font-weight; 
    } 

    &:hover {
        background-color: white;

        transition-delay: 100ms;

        button {
            color: white;
            background: black;
            transition-delay: 100ms;
        }

        div {
            color: black;
            font-weight: bold;
            transition-delay: 100ms;
        }

    }


    button + button {
        margin-left: .25rem;
    }
`


export const Footer = styled.div`
    margin-top: 1rem;
`