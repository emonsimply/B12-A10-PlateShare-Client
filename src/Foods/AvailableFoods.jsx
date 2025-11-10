import React from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from './FoodCard';

const AvailableFoods = () => {
  const foods = useLoaderData();
  console.log(foods);


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
        foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
      }
    </div>
  );
};

export default AvailableFoods;