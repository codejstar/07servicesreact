import React from 'react'

const Dishes = (props) => {
  return (
    <>
    <h1>Dishes :{props.name}</h1>
     <table border={1} cellSpacing={0}>
            <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Discription</th>
            </tr>
            <tr>
                <td>{props.name}</td>
                <td>{props.rating}</td>
                <td>{props.discription}</td>
            </tr>
        </table>
    </>
  )
}

export default Dishes