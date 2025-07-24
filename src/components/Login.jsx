import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("vk@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:7777/login",
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

  return (
    <div className="flex justify-center my-20">
      <div className="card w-96 bg-base-200 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Signin</h2>
          <div className="justify-end card-actions">
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
            <button className="btn btn-primary" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
