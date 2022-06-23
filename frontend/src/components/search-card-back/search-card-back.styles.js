import styled from "styled-components"

export const Container = styled.div`
  

    margin: 1em;
    z-index: 10;
    display: grid;
    grid-template-columns: 350px 200px;
    align-items: center;
    justify-content: center;
    text-align: left;
    border: 2px #00cc8f solid;
    background-color: black;
    border-radius: 10px;
    transition: 200ms ease-in-out;


    img {
        ${'' /* border-radius: 15px; */}
        margin: .75rem; 
        height: 30rem;
        border: 1px solid orange;
        max-width: 347px; 
    }

    p {
        color: white;
        margin-left: 1rem;
    }

    @media screen and (min-width: 801px) {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (max-width: 800px) {
        grid-template-rows: auto;
        grid-template-columns: auto;
        max-width: 780px;
        padding: 10px;

    }
`

export const Details = styled.div`
margin-top: 1rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
text-align: left;
margin-left: 1rem;
${'' /* margin-right: 4rem; */}
color: white;


    h2 {
        font-size: 2em;
        margin-bottom: 2px;
    }

    a {
        color: orange;
        font-family: 'Fira Sans';
        text-decoration: none;

        &:hover {
            cursor: pointer;
        }
    }
`

export const Title = styled.div`
        font-size: 1.3em;
        font-weight: 500;
        text-align: left;
        font-family: 'Fira Sans';
        margin-left: .75em;
        color: #00cc8f;
`

export const ButtonContainer = styled.div`

    ${'' /* justify-content: space-between; */}
    margin-left: 8px;
    margin-top: 8px;

    button {
        font-size: .8em;
        font-weight: bold;
        font-family: 'Fira Sans';
        width: 8em;
        margin: .2em;
        padding: .6em;
        ${'' /* border-radius: 4px; */}
        border: 1px solid orange; 

        &:hover {
                color: white;
                background: orange;
                border: 1px solid white;      
        }
    }
`

export const SimilarContainer = styled.div`
    float: right;
`
export const Similar = styled.li`
    font-family: 'Fira Sans';
    font-size: 16px;
    color: #00cc8f;
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
    pointer-events: all;
    transition: 200ms ease-in-out;

`