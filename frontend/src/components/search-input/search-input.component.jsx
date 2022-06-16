import React from 'react';

const SearchInput = ({ handleChange, value, ...otherProps }) => {


    return (
        <div>
                <input onChange={handleChange} value={value} {...otherProps}/>
                <input type="submit" value="Search"/>
        </div>
    )
}
export default SearchInput