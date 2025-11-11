import React from "react";
import logo from "../../assets/PlateShare_logo_icon.png";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen md:min-h-[calc(100vh-65px)]">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={logo}
          alt="Loading..."
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 animate-spin"
          loading="lazy"
        />

        <p className="text-sm sm:text-base text-gray-400 font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;