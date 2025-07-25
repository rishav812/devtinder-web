import React, { use } from "react";

function UserCard({ user }) {
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
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
