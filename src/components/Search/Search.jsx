import React from "react";

const Search = (props) => {
    return (
        <div>

            <input searchTerm={props.searchTerm}
                type="text"
                employee={props.employee}
                name="search"
                placeholder="Search for Employee" 
                onChange={props.handleChange}>
            </input>
            
        </div>
    )
}

export default Search;