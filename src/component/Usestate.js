import React, { useState } from 'react'

const Usestate = () => {
   var [v,setV] = useState(0)

   let inc = () => {
       v = v + 1;
       setV(v);
   }

   let dec = () => {
      if(v>0){
         v = v-1;
         setV(v);
      }
      else{
        console.log('something went wrong');
      }
   }

  return (
    <>
        <h1>Increment and Decrement the value {v}</h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </>
  )
}

export default Usestate