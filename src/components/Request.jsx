import React, { useEffect } from "react";
import axios from "axios";

function Request() {
  const [request, setRequest] = React.useState([]);

  const requestReview = async (status, id, index) => {
    try {
      const res = await axios.post(
        `http://localhost:7777/request/review/${status}/${id}`,
        {},
        { withCredentials: true }
      );
      if (res.status == 200) {
        setRequest((prevRequest) => {
          const updateRequest = prevRequest.filter((_, i) => i !== index);
          return updateRequest;
        });
      }

      console.log("Request status updated:", res.data);
    } catch (error) {
      console.error("Error updating request status:", error);
    }
  };
  const fetchRequest = async () => {
    try {
      const res = await axios.get(
        "http://localhost:7777/user/request/recieved",
        {
          withCredentials: true,
        }
      );
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
        {request.map((item, index) => (
          <div
            key={item?.fromUserId?._id}
            className="flex items-center bg-white rounded-lg shadow-md p-6 mx-auto"
          >
            <div className="flex items-center mr-6">
              <img
                src={
                  item?.fromUserId?.photoUrl ||
                  "https://www.w3schools.com/howto/img_avatar.png"
                }
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mr-6 border-2 border-primary"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-xl font-semibold mb-1 font-bold text-primary">
                  {item?.fromUserId?.firstName} {item?.fromUserId?.lastName}
                </h2>
                {item?.fromUserId?.age && (
                  <p className="text-gray-500 mb-1">
                    Age: {item?.fromUserId?.age}
                  </p>
                )}
                {item?.fromUserId?.gender && (
                  <p className="text-gray-500 mb-1">
                    Gender: {item?.fromUserId?.gender}
                  </p>
                )}
                <p className="text-gray-600">{item?.fromUserId?.about}</p>
              </div>
            </div>
            <div className="flex flex-row gap-5 items-end ml-auto">
              <button
                className="btn btn-outline btn-primary"
                onClick={() =>
                  requestReview("accepted", item.connection_id, index)
                }
              >
                Accept
              </button>
              <button
                className="btn btn-outline btn-secondary"
                onClick={() =>
                  requestReview("rejected", item.connection_id, index)
                }
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Request;
