import React from 'react';

const SearchBar = (props) => {
    let handleChange = (event) => {
        //this.setState({value: event.target.value});
    }
    
    return (
        <div className="search-bar-cmp">
            <input type="text" placeholder="Search (eg. 'Metal')" onChange={handleChange}/>
        </div>
    );
};
export default SearchBar;