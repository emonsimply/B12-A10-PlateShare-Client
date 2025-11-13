import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [expireDate, setExpireDate] = useState(null);

  const handleAddFood = async (e) => {
    e.preventDefault();
    setLoading(true);

    const foodData = {
      name: e.target.name.value,
      image: e.target.imageUrl.value,
      quantity: e.target.quantity.value,
      pickup_location: e.target.pickup.value,
      expire_date: expireDate,
      additional_notes: e.target.notes.value,
      status: "Available",
      donator_name: user?.displayName,
      donator_email: user?.email,
      donator_image: user?.photoURL,
    };

    
    setLoading(false);

    fetch("https://plate-share-server-kohl.vercel.app/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    })
      .then((res) => res.json())
      .then(() => {
         Swal.fire({
          title: "Food Added Successfully!",
          text: "Your food item is now available for donation.",
          icon: "success",
          confirmButtonText: "Great!",
          confirmButtonColor: "#22c55e",
          background: "#dcfce7",
        });

        e.target.reset();
        setExpireDate(null);
      })
      .catch((err) => {
        Swal.fire({
        title: "Oops!",
        text: err.message || "Something went wrong while adding food.",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#dc2626",
        background: "#fef2f2",
      });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="bg-primary/20 w-full max-w-2xl rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl text-primary font-bold text-center mb-6">
          Add Food
        </h2>

        <form onSubmit={handleAddFood} className="space-y-4">
          {/* Food Name */}
          <div>
            <label className="block font-semibold">Food Name</label>
            <input
              type="text"
              name="Enter food name"
              placeholder="Name"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex justify-between gap-4">
            {/* Food Image */}
            <div className="w-1/2">
              <label className="block font-semibold">Food Image URL</label>
              <input
                type="text"
                name="imageUrl"
                placeholder="Paste image URL"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            {/* Quantity */}
            <div className="w-1/2">
              <label className="block font-semibold">Food Quantity</label>
              <input
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
                type="text"
                name="pickup"
                placeholder="Enter pickup location"
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
              name="notes"
              placeholder="Write any special notes or food details"
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
            {loading ? "Adding..." : "Add Food"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
