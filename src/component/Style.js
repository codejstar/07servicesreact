import React from 'react'

const Style = () => {
    const obj ={
        color: 'green',
        backgroundColor: "aqua"
    }
  return (
    <>
        <h1 style={{color:"red", backgroundColor:"yellow"}}>Hello World!</h1>
        <h1 style={obj}>Hello World!</h1>
        <h1 id='box1'>External Css</h1>
    </>
  )
}

export default Style