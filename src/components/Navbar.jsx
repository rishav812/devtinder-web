import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUsers } from "../utils/userSlice";
import { BASE_URL } from "../constants";


function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleLogout = async () => {
    try {
      await axios.post(
        `${BASE_URL}/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUsers());
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className="navbar bg-base-400 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
      </div>
      <div className="flex gap-2">
        {user && (
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto mx-20"
          />
        )}

        {user && user.firstName && (
          <span className="hidden md:inline-block my-auto">
            Welcome {user?.firstName}
          </span>
        )}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mx-2"
          >
            <div className="w-10 rounded-full">
              {user?.photoUrl && (
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoUrl || "https://via.placeholder.com/150"}
                />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/connections" className="justify-between">
                Connections
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/request" className="justify-between">
                Requests
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
