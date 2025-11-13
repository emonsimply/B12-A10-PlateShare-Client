import React from "react";
import errorAnimation from "../../../public/Page Not Found 404.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pb-16">
      <div className="w-100 md:w-200">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <div>
        <Link
          to="/"
          className="border-primary border-3 cursor-pointer hover:bg-primary hover:text-white text-primary font-bold py-3 px-5 rounded-full transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
