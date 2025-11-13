import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useLoaderData } from "react-router";
import LoadingSpinner from "../Loading/LoadingSpinner";

const MyFoodRequests = () => {
  const data = useLoaderData();
  const { user } = use(AuthContext);
  const [requestedFoods, setRequestedFoods] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(
      `https://plate-share-server-kohl.vercel.app/my-food-requests?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRequestedFoods(data);
        setLoading(false);
      });
  }, [user]);

  const foods = data
    .map((req) => {
      const matchedFood = requestedFoods.find(
        (food) => food.foodId === req._id
      );
      if (matchedFood) {
        return { ...req, foodName: matchedFood.foodName };
      }
      return null;
    })
    .filter(Boolean);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold text-center mb-10 text-secondary">
        My Food Requests
      </h1>
      <div className="overflow-x-auto  rounded-lg">
        <table className="min-w-full bg-white border border-orange-200">
          <thead className="bg-orange-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-secondary uppercase tracking-wider">
                Donator
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                Food Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                Expiry Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-orange-200">
            {foods.map((food) => (
              <tr key={food._id} className="hover:bg-orange-50 transition">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-3">
                    <img
                      src={food.donator_image}
                      alt={food.donator_name}
                      className="w-12 h-12 rounded-full border"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-gray-800">
                        {food.donator_name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {food.donator_email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {food.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {food.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {new Date(food.expire_date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      food.status === "Available"
                        ? "bg-green-100 text-green-500"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {food.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFoodRequests;
