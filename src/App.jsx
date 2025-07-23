import Body from "./Body";
import { Routes, Route } from "react-router";
import Profile from "./Profile";
import Login from "./Login";
import React from "react";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
