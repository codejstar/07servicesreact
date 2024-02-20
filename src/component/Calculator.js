import React, {useState} from 'react'
import './External.css'

const Calculator = () => {
   const [v,setV] = useState(0);

   const add = () => {
         var num1 = parseInt(document.getElementById('num1').value)
         var num2 = parseInt(document.getElementById('num2').value)

         setV(num1 + num2);
   }

   const sub = () => {
      var num1 = parseInt(document.getElementById('num1').value)
      var num2 = parseInt(document.getElementById('num2').value)

      setV(num1 - num2);
}

const mul = () => {
   var num1 = parseInt(document.getElementById('num1').value)
   var num2 = parseInt(document.getElementById('num2').value)

   setV(num1 * num2);
}

const div = () => {
   var num1 = parseInt(document.getElementById('num1').value)
   var num2 = parseInt(document.getElementById('num2').value)

   setV(num1 / num2);
}
  return (
    <>
        <div className="container">
           <div className="box py-5">
             <label htmlFor="num1">Enter first number:</label><br />
            <input type="text" id='num1'/><br />

            <label htmlFor="num2">Enter Second number:</label><br />
            <input type="text" id='num2'/><br />

             <p>Output : {v}</p>

            <button type="button" className="btn btn-primary m-2" onClick={add}>Add</button>
            <button type="button" className="btn btn-primary m-2" onClick={sub}>Sub</button>
            <button type="button" className="btn btn-primary m-2" onClick={mul}>Multiply</button>
            <button type="button" className="btn btn-primary m-2" onClick={div}>Division</button>

           </div>
        </div>
    </>
  )
}

export default Calculator