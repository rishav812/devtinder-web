import React, { use } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateFeed } from "../utils/feedSlice";

function UserCard({ user }) {
  const dispatch = useDispatch();
  if (!user) return null;

  console.log("UserCard data:", user);
  const { _id } = user;
  const handleClick = async (status, id) => {
    try {
      const response = await axios.post(
        `http://localhost:7777/request/send/${status}/${id}`,
        {},
        { withCredentials: true }
      );
      console.log("Response from server:", response);
      if (response.status === 200) {
        console.log("User status updated successfully:", response.data);
        dispatch(updateFeed(id));
      }
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };
  return (
    <div className="card bg-base-200 w-100 shadow-sm">
      <figure>
        <img
          src={user?.photoUrl || "https://via.placeholder.com/150"}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {user?.firstName} {user?.lastName}
        </h2>
        <p>{user?.about}</p>
        {user?.age && user.gender && (
          <p>
            {user?.gender} | {user?.age} | {user?.location}
          </p>
        )}
        <div className="card-actions justify-end my-5">
          <button
            className="btn btn-primary"
            onClick={() => handleClick("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleClick("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
