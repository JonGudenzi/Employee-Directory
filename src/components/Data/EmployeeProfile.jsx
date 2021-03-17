import React from "react";

const EmployeeProfile = (props) => {
    return (

        <div className="table-responsive">
            <table className="table table-striped table-resposive text-center table-hover">
                <thead>
                    <tr>
                        <th>Profile Image</th>
                        <th>First Name<span className='downArrow' onClick={props.sortByFName}>🌴</span></th>
                        <th>Last Name<span className='downArrow' onClick={props.sortByLName}>🌴</span></th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>

                {props.items && props.employee.map((item, index) => (
                    <tbody key={index}>

                        <tr>
                            <td>
                                <img src={item.picture.large} alt={item.name.first} />
                            </td>
                            <td>{item.name.first} </td>
                            <td>{item.name.last}</td>
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
