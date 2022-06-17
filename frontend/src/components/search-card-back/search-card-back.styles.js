import styled from "styled-components"


export const Details = styled.div`
display: grid;
flex-direction: column;
justify-content: flex-start;
text-align: left;
margin-right: 4rem;


h2 {
    font-size: 2em;
    margin-bottom: 2px;
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
