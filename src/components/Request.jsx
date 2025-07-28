import React, { useEffect } from "react";
import axios from "axios";

function Request() {
  const [request, setRequest] = React.useState([]);
  const fetchRequest = async () => {
    try {
      const res = await axios.get("http://localhost:7777/user/request/recieved", {
        withCredentials: true,
      });
      console.log("Connections fetched:", res.data);
      setRequest(res.data.result);
    } catch (error) {
      console.error("Error fetching connections:", error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (request.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center my-10">
        No Request Received
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1 className="text-2xl font-bold mb-6">Request Received</h1>
      <div className="w-full max-w-2xl space-y-6">
        {request.map((item) => (
          <div
            key={item._id}
            className="flex items-center bg-white rounded-lg shadow-md p-6 mx-auto"
          >
            {/* <img
              src={
                connection?.photoUrl ||
                "https://www.w3schools.com/howto/img_avatar.png"
              }
              alt={connection.name}
              className="w-20 h-20 rounded-full object-cover mr-6 border-2 border-primary"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-1 font-bold text-primary">
                {connection.firstName} {connection.lastName}
              </h2>
              {connection.age && (
                <p className="text-gray-500 mb-1">Age: {connection.age}</p>
              )}
              {connection.gender && (
                <p className="text-gray-500 mb-1">
                  Gender: {connection.gender}
                </p>
              )}
              <p className="text-gray-600">{connection.about}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Request;
