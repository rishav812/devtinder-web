import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";
import { addFeed } from "../utils/feedSlice";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

function Feed() {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  console.log("Feed data:", feed);
  const fetchFeed = async () => {
    try {
      // if(feed) return;
      const response= await axios.get("http://localhost:7777/user/feed",{withCredentials: true});
      if (response.status === 200) {
        console.log("Feed data fetched successfully:", response.data.users);
        dispatch(addFeed(response.data.users));
      }
    } catch (error) {
      console.error("Error fetching feed:", error);
    }
  };
  useEffect(() => {
    fetchFeed();
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <UserCard user={feed[0]}/>
    </div>
  );
}

export default Feed;
