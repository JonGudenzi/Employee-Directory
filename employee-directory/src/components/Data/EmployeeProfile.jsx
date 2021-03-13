import React from "react";

const EmployeeProfile = (props) => {
    return (
        <div>
            {console.log(props.searchTerm)}
            {props.items.map(item => (
                <table>
                    <thead>

                        <th>
                            <img src={item.picture.large} alt={item.name.first} />
                        </th>
                        <tbody>
                            <p>
                                <tr>Name</tr>
                                <td>{item.name.first} {item.name.last}</td>
                                <tr>Phone</tr>
                                <td>{item.phone}</td>
                                <tr>Email</tr>
                                <td>{item.email}</td>
                                <tr>Age</tr>
                                <td>{item.dob.age}</td>
                            </p>
                        </tbody>
                    </thead>
                </table>
            ))}

        </div>
    )
}

export default EmployeeProfile;
