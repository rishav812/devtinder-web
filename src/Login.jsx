import React from 'react'

function Login() {
  return (
    <div className="flex justify-center my-20">
      <div className="card w-96 bg-base-200 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Sigin</h2>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login