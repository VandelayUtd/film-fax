import styled from 'styled-components';

// export const Container = styled.div`
//     padding: 24px;
//     align-items: center;
// `

export const Title = styled.div`
    font-family: 'Tiro Devanagari Marathi', serif;
    color: white;
    font-size: 4rem;
    padding: 2rem;  
`

export const MovieContainer = styled.div`

@media screen and (min-width: 800px) {

    background-color: #222222;
}
    margin-right: 4rem;
    margin-left: 4rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-radius: 25px;
    padding-bottom: 16px;

`

export const MovieGrid = styled.div`
    justify-content: center;
    display: grid;
    margin: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 250px));  

    @media screen and (max-width: 800px) {
        justify-items: center;
    }
    
`

