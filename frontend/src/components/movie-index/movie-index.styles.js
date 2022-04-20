import styled from 'styled-components';

export const Container = styled.div`
    padding: 24px;
`
export const Title = styled.span`
    font-family: 'Poiret One';
    color: white;
    font-size: 32px;
    padding: 24px  
`

export const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    margin-top: 24px   
`
