import React from 'react';
import FoodCard from '../Foods/FoodCard';
import { Link } from 'react-router';
import { IoIosArrowForward } from 'react-icons/io';

const FeaturedFoods = ({data}) => {
  return (
    <>
    <div className="text-center mb-12  mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3">
            Top Surplus <span className="text-primary">Foods</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The most generous donations in <span className="font-semibold text-[#344F1F]">Dhaka</span> — ready to be shared.
          </p>
        </div>

        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4'>
      {
        data.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
      }
    </div>

    <div className="text-center mt-12">
          <Link
            to="/available-foods"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-full shadow-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            Show All Foods
            <IoIosArrowForward />
           
          </Link>
        </div>
    </>
    
  );
};

export default FeaturedFoods;