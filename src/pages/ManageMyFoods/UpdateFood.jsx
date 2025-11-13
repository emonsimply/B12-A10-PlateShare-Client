import React, { use, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import LoadingSpinner from "../Loading/LoadingSpinner";

const UpdateFood = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const food = data;

  const [expireDate, setExpireDate] = useState(
    food?.expire_date ? new Date(food.expire_date) : null
  );

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const foodData = {
      name: e.target.name.value,
      image: e.target.imageUrl.value,
      quantity: e.target.quantity.value,
      pickup_location: e.target.pickup.value,
      expire_date: expireDate,
      additional_notes: e.target.notes.value,
    };

    setLoading(false);

    fetch(`https://plate-share-server-kohl.vercel.app/foods/${food._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Food item has been successfully updated.",
          confirmButtonColor: "#10b981",
        });
        setLoading(false);
        navigate("/manage-my-foods");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: err.message || "Something went wrong. Please try again.",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="bg-primary/20 w-full max-w-2xl rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl text-primary font-bold text-center mb-6">
          Update Food
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Food Name */}
          <div>
            <label className="block font-semibold">Food Name</label>
            <input
              defaultValue={food.name}
              type="text"
              name="name"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex justify-between gap-4">
            {/* Food Image */}
            <div className="w-1/2">
              <label className="block font-semibold">Food Image URL</label>
              <input
                defaultValue={food.image}
                type="text"
                name="imageUrl"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            {/* Quantity */}
            <div className="w-1/2">
              <label className="block font-semibold">Food Quantity</label>
              <input
                defaultValue={food.quantity}
                type="number"
                name="quantity"
                placeholder="Enter number of people"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="flex justify-between gap-4">
            {/* Pickup Location */}
            <div className="w-1/2">
              <label className="block font-semibold">Pickup Location</label>
              <input
                defaultValue={food.pickup_location}
                type="text"
                name="pickup"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            {/* Expire Date */}
            <div className="w-1/2">
              <label className="block font-semibold">Expire Date</label>
              <DatePicker
                selected={expireDate}
                onChange={(date) => setExpireDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select expire date"
                className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block font-semibold">Additional Notes</label>
            <textarea
              defaultValue={food.additional_notes}
              name="notes"
              rows="3"
              className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary"
            ></textarea>
          </div>

          {/* Donator Info */}
          <div className="bg-white p-4 rounded-full">
            <div className="flex justify-center items-center gap-4">
              <img
                src={user?.photoURL}
                alt="User"
                className="w-12 h-12 rounded-full border-2"
              />
              <div>
                <p className="text-sm font-medium">{user?.displayName}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full border-primary border-2 cursor-pointer hover:bg-primary hover:text-white text-primary font-bold py-3 rounded-full transition-all duration-300"
          >
            {loading ? "Update..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
