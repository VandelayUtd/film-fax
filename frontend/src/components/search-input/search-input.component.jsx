import React from 'react';
import { SearchBar, SearchButton, SearchInputLabel } from './search-input.styles';

const SearchInput = ({ handleChange, value, ...otherProps }) => {


    return (
        <div>
                <SearchBar onChange={handleChange} value={value} {...otherProps}/>
                <SearchButton type="submit" value="Search"/>
        </div>
    )
}
export default SearchInput