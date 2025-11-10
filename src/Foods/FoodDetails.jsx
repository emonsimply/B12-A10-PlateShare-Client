import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

const FoodDetails = () => {
  const {user} = use(AuthContext)
  const {id} = useParams();
  const [food, setFood] = useState({});
  const [loading, setLoading] =useState(true)

  console.log(food)

  useEffect(() => {
    fetch(`http://localhost:3000/foods/${id}`)
      .then((res) => res.json())  
      .then((data) => {
        setFood(data.result);
        
        console.log(data);
        setLoading(false);
      });
  }, [user, id,]);


  if (loading) {
    return <div className="text-center py-20 text-lg font-medium">Loading...</div>;
  }

  if (!food) {
    return <div className="text-center py-20 text-red-500">Food not found.</div>;
  }

  const {
    name,
    image,
    quantity,
    pickup_location,
    expire_date,
    additional_notes,
    donator_name,
    donator_email,
    donator_image,
    status,
  } = food;

   const formattedDate = new Date(expire_date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Food Image */}
      <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-md mb-8">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary">
          {status}
        </div>
      </div>

      {/* Food Info */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>

      <div className="space-y-2 text-gray-700 mb-6">
        <p>
          <span className="font-semibold">Quantity:</span> Serves {quantity} people
        </p>
        <p className="flex items-center gap-1">
          <FaLocationDot className="text-primary" />
          <span>{pickup_location}</span>
        </p>
        <p className="flex items-center gap-1">
          <MdOutlineDateRange className="text-primary" />
          <span>Expires on: {formattedDate}</span>
        </p>
      </div>

      {/* Donator Info */}
      <div className="bg-gray-50 p-4 rounded-xl mb-6 flex items-center gap-3">
        <img
          src={donator_image}
          alt={donator_name}
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <p className="font-semibold text-gray-800">{donator_name}</p>
          <p className="text-sm text-gray-600">{donator_email}</p>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="bg-gray-50 p-4 rounded-xl mb-8">
        <h3 className="font-semibold text-gray-800 mb-1">Additional Notes</h3>
        <p className="text-gray-700">{additional_notes}</p>
      </div>

      {/* Request Button */}
      <button
        
        className="w-full md:w-auto px-8 py-3 border-3 text-primary hover:text-white font-semibold rounded-full hover:bg-primary cursor-pointer transition-all duration-300"
      >
        Request Food
      </button>
    </div>
  );
};

export default FoodDetails;