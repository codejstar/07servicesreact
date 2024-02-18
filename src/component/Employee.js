import React from 'react'

const Employee = (props) => {
  return (
    <>
        <h1>Employee {props.id}</h1>
        <table border={1} cellSpacing={0}>
            <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Joining year</th>
            </tr>
            <tr>
                <td>{props.name}</td>
                <td>{props.designation}</td>
                <td>{props.department}</td>
                <td>{props.year}</td>
            </tr>
        </table>
    </>
  )
}

export default Employee

