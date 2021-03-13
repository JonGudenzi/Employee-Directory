import React from "react";

const Search = (props) => {
    return(
        <div>
            <input type="text" onChange={props.handleChange}></input>
            <button type="search">Search</button>
        </div>
    )
}

export default Search;