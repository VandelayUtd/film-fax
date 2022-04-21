import styled from 'styled-components'; 

export const Card = styled.div`
    ${'' /* width: 185px;
    height: 300px; */}
    padding-top: 1rem; 
    background-color: #111111;
    transition: 0s background-color;
    

    img { 
        height: 250px;
        object-fit: contain;
        transition: 0s height;
    }

    button {
        background: white;
        color: black;
        border: none;
        font-size: 1rem;
        ${'' /* margin: .25em; */}
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

        img{
            height: 270px;
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