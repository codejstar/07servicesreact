import React, { useState } from 'react'
import './form.css'

const Form = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [pno, setPno] = useState()
    const [date, setDate] = useState()
    const [address, setAddress] = useState("")
    const [tc, setTc] = useState([])
    const [st, setSt] = useState()
    const [city, setCity] = useState("")
    const [code, setCode] = useState()

    const checked = (e) => {
    const {value, checked} = e.target;

    if(checked){
       setTc(value)
    }else{
      setTc('Unclicked')
    }
    }

   const show = () => {
       document.getElementById('details').innerHTML = `${name}<br>${email}<br>${password}<br>${pno}<br>${date}<br>${address}<br>${tc}<br>${st}<br>${city}<br>${code}`
       document.getElementById('details').style.height = "90%"
       document.getElementById('details').style.width = "500px"
       document.getElementById('details').style.background = "red"
       document.getElementById('details').style.textAlign = "center"
       document.getElementById('details').style.paddingTop = "10%"
   }

  return (
    <>
      <div className="container">
          <div className="box">

        <label htmlFor="name">Name</label><br />
        <input type="text" 
        placeholder='Enter your name' 
        id='name' 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="email">Email</label><br />
        <input type="email" 
        placeholder='Enter your Email' 
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="password">Password</label><br />
        <input type="password" 
        placeholder='Enter password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <label htmlFor="pno">Phone no</label><br />
        <input type="tel" placeholder='Enter Phone no'
        value={pno}
        onChange={(e) => setPno(e.target.value)}
        />
        <br />

        <label htmlFor="dob">DOB</label><br />
        <input type="date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        />
        <br />

        <label htmlFor="address">Address</label><br />
        <textarea name="address" id="address" cols="25" rows="2" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
        <br />

        <label htmlFor="t&c">Terms and conditions</label>
        <input type="checkbox" 
          value='clicked'
          onChange={checked}
          id='check'
        />
        <br />

        <label htmlFor="">State</label><br />
        <select value={st}  defaultValue={'DEFAULT'} onChange={(e) => setSt(e.target.value)}>
            <option value="DEFAULT">State</option>
            <option value="Punjab">Punjab</option>
            <option value="Haryana">Haryana</option>
            <option value="U.P">U.P</option>
            <option value="Delhi">Delhi</option>
        </select>
        <br />

        <label htmlFor="city">City</label><br />
        <input type="text"
         value={city}
         onChange={(e) => setCity(e.target.value)}
         />
         <br />

        <label htmlFor="code">PinCode</label><br />
        <input type="text" 
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <br/><br />

        <button onClick={show}>submit</button>  
      </div>
        <div id='details'></div>
    </div>
    </>
  )
}

export default Form