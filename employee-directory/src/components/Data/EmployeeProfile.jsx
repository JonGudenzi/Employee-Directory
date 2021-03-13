import React from "react";

const EmployeeProfile = (props) => {
    return (
        <div>
            {console.log(props.searchTerm)}
            {props.items.map(item => (
                <>
                    <img src={item.picture.large} alt={item.name.first} />

                    <p>{item.name.first}</p>

                </>
            ))}

        </div>
    )
}

export default EmployeeProfile;
