import React from "react";

const EmployeeProfile = (props) => {
    return (

        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>

                {props.items.map((item, index) => (
                    <tbody key={index}>
                        <tr>
                            <td>
                                <img src={item.picture.large} alt={item.name.first} />
                            </td>
                            <td>{item.name.first} {item.name.last}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.dob.age}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default EmployeeProfile;
