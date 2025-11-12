import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../../assets/PlateShare_logo_icon.png";
import "./Navbar.css";
import Swal from "sweetalert2";
import { MdLogout, MdManageAccounts, MdOutlineFoodBank } from "react-icons/md";
import { IoFastFoodOutline, IoHomeOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";

const Navbar = () => {
  const { user, SignOut } = use(AuthContext);
  const links = (
    <>
      <li className="hover:text-primary">
        <NavLink to="/">
          <IoHomeOutline />
          Home
        </NavLink>
      </li>
      <li className="hover:text-primary">
        <NavLink to="/available-foods">
          <IoFastFoodOutline />
          Available Foods
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F379A7",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Yes, logout",
      
    }).then((result) => {
      if (result.isConfirmed) {
        SignOut()
          .then(() => {
            Swal.fire("Logged out!", "You have been logged out.", "success");
          })
          .catch((error) => {
            Swal.fire("Error!", error.message, "error");
          });
      }
    });
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className="w-10 h-10" src={logo} alt="Logo" />
        <a className="text-xl text-secondary ml-1 font-bold">PlateShare</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="cursor-pointer">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full border-primary border-2 cursor-pointer"
                title={user.displayName || "User"}
              />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-index-1 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="hover:text-primary">
                <NavLink to="/add-food">
                  <IoIosAddCircleOutline />
                  Add Food
                </NavLink>
              </li>
              <li className="hover:text-primary">
                <NavLink to="/manage-my-foods">
                  <MdManageAccounts />
                  Manage My Foods
                </NavLink>
              </li>
              <li className="hover:text-primary">
                <NavLink to="/my-food-requests">
                  <MdOutlineFoodBank />
                  My Food Requests
                </NavLink>
              </li>

              <li>
                <button
                  onClick={handleSignOut}
                  className="text-red-500 font-semibold"
                >
                  <MdLogout />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className=" px-4 py-1.5 border-primary border-3 font-semibold hover:text-white hover:bg-primary rounded-full transition duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
