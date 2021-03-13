import React from "react";

const Search = (props) => {
    return(
        <div>
            <input type="text" onChange={props.handleChange}></input>
        </div>
    )
}

export default Search;