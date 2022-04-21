import React from 'react';

const SearchInput = ({ handleChange, label, ...otherProps }) => {


    return (
        <div>
                <input onChange={handleChange} {...otherProps}/>
                <input type="submit" value="Search"/>
        </div>
    )
}
export default SearchInput