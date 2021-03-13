import React from "react";

const EmployeeProfile = (props) => {
    return (
        <div>
            {/* {console.log(props.searchTerm)} */}
            {props.items.map(item => (

                <table>
                    <thread>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thread>

                    <tbody>
                        <td>
                            <img src={item.picture.large} alt={item.name.first} />
                        </td>
                        <td>{item.name.first} {item.name.last}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.dob.age}</td>
                    </tbody>
                </table>


            ))}

        </div>
    )
}

export default EmployeeProfile;
