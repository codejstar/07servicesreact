import React, { Fragment } from 'react'
import './External.css'

const Rating = () => {

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
<h1 className='py-5'>Resturants</h1>
 <div className="boxflex">
    {
        resturant.map((e,index) => (
    
            <div className="card" key={index} style={{width: "18rem"}}>
               <img src={e.image} className="card-img-top" alt="..."/>
                   <div className={e.rating === 5 ? "bg-success ": e.rating === 4 ? "bg-info": e.rating === 3 ? "bg-warning" : e.rating === 2 ? "bg-warning" : e.rating === 1 ? "bg-danger": " " }>
                   <h5 className="card-title">{e.name}</h5>
                   <p className="card-text">Ratings: {e.rating}</p>
                   <a href={0} className="btn btn-primary my-4 border-light">Order</a>
             </div>
            </div>
        
        ))
    }
 </div>
    </>
  )
}

export default Rating