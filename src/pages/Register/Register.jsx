import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Register = () => {
  const { singInWithGoogle, createUser, updateUserProfile } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  //Password validation rules
  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) {
      return "Password must have at least one uppercase letter!";
    } else if (!/[a-z]/.test(password)) {
      return "Password must have at least one lowercase letter!";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters long!";
    }
    return null;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordError = validatePassword(password);
    if (passwordError) {
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: passwordError,
        confirmButtonColor: "#ef4444",
        background: "#fee2e2",
      });
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              text: "Welcome to PlateShare!",
              confirmButtonColor: "#22c55e",
              background: "#dcfce7",
            });
            navigate(location.state || "/");
          })
          .catch(() => {});
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: err.message,
          confirmButtonColor: "#ef4444",
          background: "#fee2e2",
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
          confirmButtonColor: "#ef4444",
          background: "#fee2e2",
        });
      });
  };

  return (
    <div className="min-h-[calc(100vh-137px)] flex items-center justify-center p-4">
      <div className="card bg-primary/20 w-full max-w-sm mx-auto shrink-0 rounded-2xl shadow-lg">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <h1 className="text-3xl font-bold text-center mb-6 text-primary">
                Register
              </h1>
              <label className="label">Name</label>
              <input
                name="name"
                type="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Photo URL</label>
              <input
                name="photoURL"
                type="text"
                className="input"
                placeholder="Photo URL"
              />
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

              <button className="px-4 py-1.5 cursor-pointer mt-3 border-primary border-3 font-semibold hover:text-white hover:bg-primary rounded-full transition duration-300">
                Register
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
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
