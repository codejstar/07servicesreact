import React from 'react'
import './External.css'

const Divstyle = () => {

    let box1 = {
        height : '200px',
        width : '200px',
        backgroundColor: 'blue'
    }

  return (
    <>
        <div id="box1" style={{height:'200px', width:'200px', backgroundColor:'red'}}>Inline Css</div>
        <div id="box2" style={box1}>Object Css</div>
        <div id="box3" className='b1'>External Css</div>
        <div id="box4" className='box2'>Public folder</div>
    </>
  )
}

export default Divstyle