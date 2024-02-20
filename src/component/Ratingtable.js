import React from 'react'
import './External.css'

const Ratingtable = () => {
    const resturant = [
        {
            name: 'Apna dhaba',
            location: 'Punjab',
            image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            rating: 5
        },
        {
            name: 'Old Fashion',
            location: 'Delhi',
            image: 'https://images.pexels.com/photos/17881561/pexels-photo-17881561/free-photo-of-couple-at-a-table-in-front-of-a-coffee-shop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            rating: 4
        },
        {
            name: 'Currey in a hurry',
            location: 'Gujrat',
            image: 'https://images.pexels.com/photos/15376791/pexels-photo-15376791/free-photo-of-a-dining-room-with-a-table-and-chairs.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 3
        },
        {
            name: 'NO Name resturant',
            location: 'Bangluru',
            image: 'https://images.pexels.com/photos/18245710/pexels-photo-18245710/free-photo-of-potted-plant-on-a-wooden-restaurant-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            rating:2
        },
         {
            name: 'Lord of the fries',
            location: 'Tamil',
            image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            rating:1
         }
    ]
  return (
    <>
        <h1>Resturant</h1>
                <table border="1px" cellSpacing={0} cellPadding={1}>
                  <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Location</th>
                        <th>img</th>
                    </tr>
                  </thead>
                  <tbody>
                       {
                resturant.map((e,index) => (
                        <tr key={index}>
                            <td>{e.name}</td>
                            <td className={e.rating === 5 ? "text-success" : e.rating === 4 ? "text-info": e.rating === 3 || e.rating === 2 ? "text-warning" : e.rating === 1 ? "text-danger" : ""}>{e.rating}</td>
                            <td>{e.location}</td>
                            <td><img src={e.image} alt="" /></td>
                        </tr>
                 ))
                       }
                  </tbody>
                </table>
    </>
  )
}

export default Ratingtable