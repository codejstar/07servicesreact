import React from 'react'
import search_result from './data';
import './External.css';

const Resturant = () => {
  return (
    <>
    <div className="container py-5">
        <div className="row">
            {
            search_result.map((elem,index) => (
           <div className="col my-4" key={index}>
              <div className="card" style={{width: "18rem"}} >
               <img src={elem.info.image.url} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">{elem.info.name}</h5>
               <p className="card-text">Ratings : {elem.info.rating.rating_text}</p>
               <a href="true" className="btn btn-primary">Go somewhere</a>
               </div>
              </div>
          </div>
            ))
        }
            </div>
        </div>
    </>
  )
}

export default Resturant