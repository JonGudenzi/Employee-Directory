import React from "react";

const Search = (props) => {
    return (
        <div>
            <input value={props.searchTerm} type="text" onChange={props.handleChange}></input>
            <button type="search">Search</button>
        </div>
    )
}

export default Search;