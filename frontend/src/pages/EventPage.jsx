import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventPage = () => {
  const { eventId } = useParams();

  const [event, setEvent] = useState({});
  const [eventItems, setEventItems] = useState([]);
  const GetRequest = async () => {
    const response = await fetch(`http://localhost:3000/event/get/${eventId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setEvent(data);
  };
  useEffect(() => {
    GetRequest();
  }, []);

  const GetItems = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/item/event/${eventId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const data = await response.json();
      const filteredItems = data.filter(
        (item) => item.eventName === event.name
      );
      setEventItems(filteredItems);
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };
  console.log(eventItems);
  useEffect(() => {
    GetItems();
  }, [eventItems]);

  // Function to render the table rows for event items
  // const renderEventItems = () => {
  //   return
  //   ));
  // };

  return (
    <div className="flex justify-between bg-gradient-to-b from-stone-950 to-stone-700">
      <div className="container mx-auto px-4">
        {/* Event Details */}
        <div className="mb-8  bg-[#B86614] rounded-3xl px-4 py-4">
          <h2 className="text-3xl font-semibold text-[#d3cccce6]">
            {event?.name}
          </h2>
          <p className="text-gray-800 mt-2">{event?.date?.slice(0, 10)} </p>
          <p className="text-gray-700 mt-4">
            {event?.description?.toUpperCase()}
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Items for Auction
          </h3>
        </div>

        <div className="bg-[#ffffffc0] rounded-xl shadow-md overflow-none">
          <table className="bg-[#ffffffc0] rounded-xl table-auto w-full">
            <thead className="text-[#2c2b2bc7]">
              <tr >
                <th className="bg-[#c0bfbf6b]  rounded-xl rounded-t-none rounded-l-xl shadow-md">Item Name</th>
                <th className="bg-[#c0bfbf6b]   rounded-xl rounded-t-none shadow-md">Item Pic</th>
                <th className="bg-[#c0bfbf6b]   rounded-xl rounded-t-none shadow-md">Item Min Bid Price</th>
                <th className="bg-[#c0bfbf6b]   rounded-xl rounded-t-none shadow-md">Description</th>
                <th className="bg-[#c0bfbf6b]   rounded-xl rounded-t-none rounded-r-xl shadow-md">Seller</th>
              </tr>
            </thead>
            
            <tbody className="text-[#262624b9]">
              {eventItems.map((item) => (
                <tr
                  key={item._id}
                  className=" shadow-md "
                >
                  <td className="">
                    <div className="flex justify-center items-center pt-4 pl-2">
                      {item.name}
                    </div>
                  </td>

                  <td className="">
                    <img
                      src={`/${item.itemPic}`}
                      className="size-28 rounded-full m-0 ml-8 mr-8 p-0"
                      alt={item.name}
                    />
                  </td>
                  <td className="">
                    <div className="flex justify-center items-center m-0 p-0 ml-8 mr-8">
                      {item.startingPrice}
                    </div>
                  </td>
                  <td className="">
                    <div className="flex justify-center items-center m-0 p-0 ml-8 mr-8 ">
                      {item.description}
                    </div>
                  </td>
                  <td className="">
                  <div className="flex justify-center items-center m-0 p-0 ml-8 mr-8 ">
                    {item.sellerName}
                    </div>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
