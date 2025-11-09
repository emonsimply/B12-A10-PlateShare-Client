import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { singInWithGoogle } = use(AuthContext);

  const handleGoogleLogin = () => {
    singInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Logged in with Google!",
          text: `Welcome ${result.user.displayName}`,
        });
        
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: err.message,
        });
      });
  };
  return (
    <div className="min-h-[calc(100vh-137px)] flex items-center justify-center p-4">
    <div className="card bg-white w-full max-w-sm mx-auto shrink-0 rounded-2xl shadow-lg">
      
      <div className="card-body">
        <form>
          <fieldset className="fieldset">
            <h1 className="text-3xl font-bold text-center mb-6 text-primary">
              Login
            </h1>
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <Link to="/forget-password">
                <a className="link link-hover">Forgot password?</a>
              </Link>
            </div>
            <button className="px-4 py-1.5 border-primary border-3 font-semibold hover:text-white hover:bg-primary rounded-full transition duration-300">
              Login
            </button>
            <div className="divider">OR</div>
          </fieldset>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="px-4 py-1.5 border-primary border-3 font-semibold hover:text-white hover:bg-primary rounded-full transition duration-300 flex items-center justify-center gap-2 w-full"
        >
          <FcGoogle />
          Login with Google
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-primary font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
