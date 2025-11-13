import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const { singInWithGoogle, singInUser } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    singInUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back to ToyTopia!",
          timer: 1800,
          showConfirmButton: false,
          background: "#dcfce7",
        });
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    singInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Logged in with Google!",
          text: `Welcome ${result.user.displayName}`,
          confirmButtonColor: "#22c55e",
          background: "#dcfce7",
        });
        navigate(location.state || "/");
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
    <div className="card bg-primary/20 w-full max-w-sm mx-auto shrink-0 rounded-2xl shadow-lg">
      
      <div className="card-body">
        <form onSubmit={handleLogin}>
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
            <button className="px-4 py-1.5 cursor-pointer border-primary border-3 font-semibold hover:text-white hover:bg-primary rounded-full transition duration-300">
              Login
            </button>
            <div className="divider">OR</div>
          </fieldset>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="px-4 py-1.5 cursor-pointer border-primary border-3 font-semibold hover:text-white hover:bg-primary rounded-full transition duration-300 flex items-center justify-center gap-2 w-full"
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
