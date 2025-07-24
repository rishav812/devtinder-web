import React from "react";

function Login() {
  return (
    <div className="flex justify-center my-20">
      <div className="card w-96 bg-base-200 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Signin</h2>
          <div className="justify-end card-actions">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full mb-3 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full mb-3 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
            />
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
