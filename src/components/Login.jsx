import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

function Login() {
  const [email, setEmail] = useState("vk@gmail.com");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("Test@123");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log("response", response);
      if (response.status === 200) {
        dispatch(addUsers(response.data));
        navigate("/");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleSignup = async () => {
    try{
      const response = await axios.post(
        `${BASE_URL}/signup`,
        {
          firstName,
          lastName,
          emailId: email,
          password,
        },
        { withCredentials: true }
      );
      console.log("Signup response", response);
      if (response.status === 200) {
        dispatch(addUsers(response.data.data));
        navigate("/");
      } else {
        alert("Signup failed. Please try again.");
      }
    }catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  }

  return (
    <div className="flex justify-center my-20">
      <div className="card w-96 bg-base-200 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{isLoginForm ? "Sign In" : "Sign up"}</h2>
          <div className="justify-end card-actions">
            {!isLoginForm && (
              <>
                <input
                  type="text"
                  value={firstName}
                  placeholder="Enter your First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input input-bordered w-full mb-3 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                />
                <input
                  type="text"
                  value={lastName}
                  placeholder="Enter your Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  className="input input-bordered w-full mb-3 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                />
              </>
            )}
            <input
              type="text"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full mb-3 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input input-bordered w-full mb-3 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
            />
            <div className="flex flex-col items-center">
              <button
                className="btn btn-primary align-center"
                onClick={isLoginForm ? handleSubmit: handleSignup}
              >
                {isLoginForm ? "Login":"Sign Up"}
              </button>
              <p
                className="mt-4 text-sm justify-content-center text-white-600 cursor-pointer text-center"
                onClick={() => setIsLoginForm(!isLoginForm)}
              >
                {isLoginForm
                  ? "New User? Sign up here"
                  : "Existing User? Login here"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
