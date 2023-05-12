import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './compenents/CoffeeCard';

const App = () => {

  const coffees = useLoaderData();
  console.log(coffees)
  

  return (
    <div className='container mx-auto'>
      <h2>Hot coffee {coffees.length}</h2>
      <div className='md:grid grid-cols-2 gap-5 '>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default App;