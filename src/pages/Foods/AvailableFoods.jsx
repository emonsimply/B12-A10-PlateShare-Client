import React from "react";
import { useLoaderData } from "react-router";
import FoodCard from "./FoodCard";

const AvailableFoods = () => {
  const foods = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold text-center text-secondary mb-10">Available Foods</h1>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {foods.map((food) => (
        <FoodCard key={food._id} food={food}></FoodCard>
      ))}
    </div>
    </div>
  );
};

export default AvailableFoods;
