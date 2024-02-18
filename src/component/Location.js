import React from 'react'

const Location = () => {
   let Location = ['Taj Mahal','RishiKash','Goa','Hami','Golden Temple']
  return (
    <>
        <h1> Hotspot For Foreigners In India</h1>
        {
            Location.map((elm,index) => (
                <h2 key={index}>{index+1}. {elm}</h2>
            ))
        }
    </>
  )
}

export default Location