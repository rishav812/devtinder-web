import Body from "./components/Body";
import { Routes, Route } from "react-router";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Feed from "./components/Feed";
import React from "react";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
