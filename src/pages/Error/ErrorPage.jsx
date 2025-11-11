import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 flex flex-col justify-center gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            404 — Page Not Found
          </h1>
          <p className="text-gray-600 text-lg">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl shadow hover:shadow-md transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414V13a1 1 0 11-2 0V6.586L6.707 8.879a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 6.586z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              Go Back
            </button>
          </div>

          <p className="text-sm text-gray-400">
            If you believe this is an error, contact support.
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center bg-gray-100 p-6">
          <img
            src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
            alt="Illustration: lost person or 404"
            className="max-w-full max-h-64 object-contain rounded-lg drop-shadow"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
