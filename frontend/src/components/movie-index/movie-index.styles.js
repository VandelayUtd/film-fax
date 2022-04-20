import styled from 'styled-components';

// export const Container = styled.div`
//     padding: 24px;
//     align-items: center;
// `

export const Title = styled.div`
    font-family: 'Poiret One';
    color: white;
    font-size: 4rem;
    padding: 2rem;  
`

export const MovieContainer = styled.div`
    background-color: #000000;
    margin-right: 8rem;
    margin-left: 8rem;
    margin-top: 6rem;

`

export const MovieGrid = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 350px));  
    ${'' /* background-color: #111111; */}
    padding: 2em;
`

