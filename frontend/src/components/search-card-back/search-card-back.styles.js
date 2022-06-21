import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 360px 200px 200px ;
    justify-content: flex-start;
    text-align: left;
    margin-right: 4rem;

    p {
        color: white;
    }
`

export const Details = styled.div`
margin-top: 4rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
text-align: left;
margin-right: 4rem;
color: white;


    h2 {
        font-size: 2em;
        margin-bottom: 2px;
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