import styled from 'styled-components'; 

export const Card = styled.div`
    padding-top: 1rem; 
    background-color: #111111;
    transition: 0s background-color;
    height: 390px;
    position: relative;
    @media screen and (max-width: 800px) {
        width: 300px;
    }
    
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
        float: left;
        margin-left: 2em;
        font-family: 'Fira Sans';
        font-size: 1em;
        color: white;
        transition: 0s color font-weight; 
    } 

    span {

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
    position: absolute;
    bottom: 0;

`