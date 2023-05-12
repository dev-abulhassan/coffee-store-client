import React from 'react';

const CoffeeCard = ({ coffee }) => {
   const { _id, name, quantity, supplier, taste, category, details, photo } = coffee
   return (
      <div className='container mx-auto'>
         <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="card-body">
               <p>Name: {name}</p>
               <p>Supplier: {supplier}</p>
               <p>Taste: {taste}</p>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CoffeeCard;