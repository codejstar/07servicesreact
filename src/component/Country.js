import React from 'react'

const Country = ({country}) => {
  return (
    <>
    <h1>Countries Name</h1>
    {
            country.map((country,index) => (
                <h2 key={index}>{index+1}.{country.name}</h2>
            ))
    }
    </>
  )
}

export default Country