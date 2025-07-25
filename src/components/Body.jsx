import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:7777/profile/view", {
        withCredentials: true,
      });
      if (res.status === 200) {
        dispatch(addUsers(res.data));
      }
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login");
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Body;
