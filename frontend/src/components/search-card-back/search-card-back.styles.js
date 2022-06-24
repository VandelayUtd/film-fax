import styled from "styled-components"

export const Container = styled.div`
  

    z-index: 10;
    display: grid;
    grid-template-columns: 390px 260px;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-content: center;
    text-align: left;
    border: 2px #00cc8f solid;
    background-color: black;
    border-radius: 10px;
    transition: 200ms ease-in-out;


    @media screen and (min-width: 801px) {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (max-width: 800px) {
        ${'' /* grid-template-rows: auto; */}
        grid-template-columns: 325px;
        width: 330px;
        grid-template-rows: auto;
        padding: 10px;
        position: inherit;
        transform: translate(4%, -65%);
        margin-bottom: -650px;

    }
`

export const Cover = styled.div`

    @media screen and (min-width: 801px) {
        grid-area: 1 / 1 / 3 / 2;
        margin-bottom: .75rem;
        img {
        margin: .75rem; 
        border: 1px solid orange;
        width: 380px;
        height: auto; 
        }

    }

    @media screen and (max-width: 800px) {
        img {
            width: 320px;
            height: auto;
            border:1px solid orange;

        }
    }

    
`

export const Details = styled.div`

@media screen and (min-width: 801px) {
    grid-area: 1 / 2 / 2 / 3;

}

@media screen and (max-width: 800px) {
    margin-bottom: 1rem;
}

margin-left: 1rem;
padding-right: .5rem;
margin-right: .75rem;
margin-bottom: -3rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
text-align: left;
${'' /* margin-right: 4rem; */}
color: white;

    button {
        color: #F24236;
        font-size: .8em;
        font-weight: bold;
        font-family: 'Fira Sans';
        ${'' /* width: 8em; */}
        margin: 1em;
        padding: 8px;
        ${'' /* border-radius: 4px; */}
        border: 1px solid orange;
        margin-left: 0; 

        &:hover {
                color: white;
                background: #F24236;
                border: 1px solid white;      
        }
    }

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

export const Plot = styled.div`

    @media screen and (min-width: 801px) {
        grid-area: 2 / 2 / 3 / 3;
        margin-top: -1rem;

    }

    h3 {
        color: white;
        margin-left: 1rem;
        font-family: 'Fira Sans';
        font-weight: 400;
        margin-bottom: -.5rem;
    }

    p {
        color: white;
        margin-left: 1rem;
        margin-right: .75rem;
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

@media screen and (min-width: 801px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
    pointer-events: all;
    transition: 200ms ease-in-out;
}

`