import Body from "./components/Body";
import { Routes, Route } from "react-router";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Request from "./components/Request";
import React from "react";
function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/request" element={<Request />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
