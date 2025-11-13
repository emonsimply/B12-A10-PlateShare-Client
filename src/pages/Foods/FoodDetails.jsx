import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import LoadingSpinner from "../Loading/LoadingSpinner";
import Swal from "sweetalert2";

const FoodDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (food?._id) {
      fetch(`https://plate-share-server-kohl.vercel.app/requestedFoods?foodId=${food._id}`)
        .then((res) => res.json())
        .then((data) => setRequests(data));
    }
  }, [food]);

  const handleAccept = async (requestId) => {
    await fetch(`https://plate-share-server-kohl.vercel.app/requestedFoods/${requestId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "accepted" }),
    });
    await fetch(`https://plate-share-server-kohl.vercel.app/foods/${food._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Donated" }),
    });
    setRequests((prev) =>
      prev.map((r) => (r._id === requestId ? { ...r, status: "accepted" } : r))
    );
    setFood({ ...food, status: "Donated" });
  };

  const handleReject = async (requestId) => {
    await fetch(`https://plate-share-server-kohl.vercel.app/requestedFoods/${requestId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "rejected" }),
    });
    setRequests((prev) =>
      prev.map((r) => (r._id === requestId ? { ...r, status: "rejected" } : r))
    );
  };

  useEffect(() => {
    fetch(`https://plate-share-server-kohl.vercel.app/foods/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
        setLoading(false);
      });
  }, [user, id]);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!food) {
    return (
      <div className="text-center py-20 text-red-500">Food not found.</div>
    );
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

  const handleRequestFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const reason = form.reason.value;
    const contactNo = form.contactNo.value;

    const requestData = {
      foodId: food._id,
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      location,
      reason,
      contactNo,
      status: "pending",
      requestedAt: new Date(),
    };

    fetch("https://plate-share-server-kohl.vercel.app/requestedFoods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Request Submitted!",
          text: "Your food request has been sent successfully.",
          confirmButtonColor: "#F4991A",
        });
        form.reset();
        document.getElementById("my_modal_5").close();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
        });
      });
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Food Image */}
        <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-md mb-8">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div
            className={`absolute top-3 right-3  px-3 py-1 rounded-full text-sm font-semibold text-white ${
              status == "Available" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status}
          </div>
        </div>

        {/* Food Info */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>

        <div className="space-y-2 text-gray-700 mb-6">
          <p>
            <span className="font-semibold">Quantity:</span> Serves {quantity}{" "}
            people
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
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="w-full md:w-auto px-8 py-3 border-3 text-primary hover:text-white font-semibold rounded-full hover:bg-primary cursor-pointer transition-all duration-300"
        >
          Request Food
        </button>

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-orange-50">
            <h3 className="font-bold text-2xl mb-4 text-center text-primary">
              Request This Food
            </h3>

            <form onSubmit={handleRequestFood} className="space-y-3">
              <div>
                <label className="block font-medium mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter your pickup location"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Why Need Food</label>
                <textarea
                  name="reason"
                  placeholder="Explain your reason..."
                  required
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>

              <div>
                <label className="block font-medium mb-1">Contact No.</label>
                <input
                  type="text"
                  name="contactNo"
                  placeholder="Enter your phone number"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div className="modal-action flex justify-between items-center">
                <button
                  type="submit"
                  className="w-full md:w-auto px-4 py-1 border-2 text-primary hover:text-white font-semibold rounded-full hover:bg-primary cursor-pointer transition-all duration-300"
                >
                  Submit Request
                </button>
                <form method="dialog">
                  <button className="hover:text-red-500 cursor-pointer">
                    Close
                  </button>
                </form>
              </div>
            </form>
          </div>
        </dialog>
      </div>


      {/* Food Request Table */}
      {user?.email === donator_email && requests.length > 0 && (
        <div className="my-10 max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            Food Requests ({requests.length})
          </h2>
          <div className="overflow-x-auto rounded-lg">
            <table className="table w-full border border-orange-200">
              <thead className="bg-orange-100 text-secondary">
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Reason</th>
                  <th>Contact</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req._id} className="border-b border-orange-200 hover:bg-orange-50">
                    <td className="flex items-center gap-2">
                      <img
                        src={req.userPhoto}
                        alt={req.userName}
                        className="w-8 h-8 rounded-full border"
                      />
                      {req.userName}
                    </td>
                    <td>{req.location}</td>
                    <td>{req.reason}</td>
                    <td>{req.contactNo}</td>
                    <td
                      className={`font-semibold ${
                        req.status === "accepted"
                          ? "text-green-600"
                          : req.status === "rejected"
                          ? "text-red-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {req.status}
                    </td>
                    <td className="space-x-2 space-y-2">
                      <button
                        onClick={() => handleAccept(req._id)}
                        disabled={req.status !== "pending"}
                        className="px-3 py-1 cursor-pointer rounded-full border-2 border-green-500 hover:bg-green-500 text-green-500  hover:text-white disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-100 transition duration-300"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(req._id)}
                        disabled={req.status !== "pending"}
                        className="px-3 py-1 cursor-pointer rounded-full border-2 border-red-500 hover:bg-red-500 text-red-500  hover:text-white disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-100 transition duration-300"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodDetails;
