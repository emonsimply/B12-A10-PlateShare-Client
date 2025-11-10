import React, { use } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

const FoodCard = ({ food }) => {
  const {
    _id,
    name,
    image,
    quantity,
    pickup_location,
    expire_date,
    donator_name,
    donator_image,
  } = food;

  const navigate = useNavigate();
  const { user } = use(AuthContext);

  const handleViewDetails = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/foods/${_id}`);
    }
  };

  const formattedDate = new Date(expire_date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-transparent hover:border-dashed hover:border-primary hover:shadow-lg transition-all duration-300">
      {/* Food Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Food Name */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

        {/* Donator Info */}
        <div className="flex items-center mb-3">
          <img
            src={donator_image}
            alt={donator_name}
            className="w-9 h-9 rounded-full mr-2"
          />
          <p className="text-sm text-gray-600">Donated by <span className="font-medium text-gray-800">{donator_name}</span></p>
        </div>

        {/* Quantity & Location */}
        <div className="text-sm text-gray-700 space-y-1">
          <p><span className="font-medium">Quantity:</span> Serves {quantity} people</p>
          <p className="flex items-center gap-1">
            <FaLocationDot className="text-primary" />
            {pickup_location}
          </p>
          <p className="flex items-center gap-1">
            <MdOutlineDateRange className="text-primary" />
            Expires on: {formattedDate}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleViewDetails}
          className="w-full mt-4 py-2 text-primary hover:text-white font-semibold rounded-full hover:bg-primary cursor-pointer transition-primary all duration-300 border-primary border-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
