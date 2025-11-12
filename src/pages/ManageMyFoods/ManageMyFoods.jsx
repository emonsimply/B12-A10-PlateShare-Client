import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const { user } = use(AuthContext);
  const [myFood, setMyFood] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/my-foods?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyFood(data);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this food item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // re-fetch from server
              fetch(`http://localhost:3000/my-foods?email=${user.email}`)
                .then((res) => res.json())
                .then((updated) => setMyFood(updated));

              Swal.fire(
                "Deleted!",
                "Your food item has been deleted.",
                "success"
              );
            }
          })
          .catch((err) => {
            console.error("Delete error:", err);
            Swal.fire("Error!", "Failed to delete the item.", "error");
          });
      }
    });
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (myFood.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-secondary">
          No foods added yet.
        </h2>
        <p className="text-gray-500 mt-2">
          Start adding food items to manage them here.
        </p>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 ">
      <h1 className="text-2xl font-bold text-center mb-10 text-secondary">
        Manage My Foods
      </h1>

      <div className="overflow-x-auto  rounded-lg">
        <table className="min-w-full bg-white border border-orange-200">
          <thead className="bg-orange-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                Image
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
              <th className="px-6 py-3 text-center text-xs font-medium text-secondary uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-orange-200">
            {myFood.map((food) => (
              <tr key={food._id} className="hover:bg-orange-50 transition">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
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
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <Link
                    to={`/update-food/${food._id}`}
                    className="px-2 py-1 border-primary text-primary border font-semibold hover:text-white hover:bg-primary rounded-full transition duration-300 mr-2"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="px-2 py-1 border-red-500 text-red-500 border font-semibold hover:text-white hover:bg-red-500 rounded-full transition duration-300 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFoods;
