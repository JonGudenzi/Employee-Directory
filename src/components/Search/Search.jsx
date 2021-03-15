import React from "react";

const Search = (props) => {
    return (
        <div>

            <input value={props.searchTerm}
                type="text"
                onChange={props.handleChange}
                name="search"
                placeholder="Search for Employee"
                filteredEmp={props.FilteredEmployeeData}>
            </input>
            <button type="search">Search</button>
        </div>
    )
}

export default Search;