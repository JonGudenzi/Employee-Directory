import React from "react";

const Search = (props) => {
    return (
        <div>

            <input searchTerm={props.searchTerm}
                type="text"
                employee={props.employee}
                name="search"
                placeholder="Search for Employee">
            </input>
            <button type="search">Search</button>
        </div>
    )
}

export default Search;