
import styled from 'styled-components'; 


export const SearchBar = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 16px;
  font-family: 'Fira Sans' ;
  padding: 7px 7px 7px 5px;
  ${'' /* width: 100%; */}
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;
  &:focus {
    outline: none;
  }
`

export const SearchButton = styled.input`

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
`