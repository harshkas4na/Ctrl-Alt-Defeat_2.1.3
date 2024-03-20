import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const EventPage = () => {
  
  const {eventId}=useParams();
  

  const [event,setEvent]=useState({})
  const [eventItems, setEventItems] = useState([]);
  const  GetRequest = async () => {
    const response = await fetch(`http://localhost:3000/event/get/${eventId}`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      } 
    })
    const data = await response.json();
    setEvent(data);
  }
    useEffect(() => {
      GetRequest();
    },[])

  const GetItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/item/event/'+eventId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      const filteredItems = data.filter(item => item.eventName === event.name);
      setEventItems(filteredItems);
    } catch (error) {
      console.error('Error fetching items:', error.message);
    }
  };
  

  useEffect(() => {
    GetItems();
  }, [])


  // Function to render the table rows for event items
  // const renderEventItems = () => {
  //   return 
  //   ));
  // };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Event Details */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">{event?.name}</h2>
          <p className="text-gray-600 mt-2">{event?.date} </p>
          <p className="text-gray-700 mt-4">{event?.description}</p> 
          
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Items for Auction</h3>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Item Name</th>
                <th className="px-4 py-2">Item Pic</th>
                <th className="px-4 py-2">Item Min Bid Price</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Seller</th>
              </tr>
            </thead>
            <tbody>
            {eventItems.map(item => (
            <tr key={item._id} >
              <td>{item.name}</td>
              
              <td><img src={`/${item.itemPic}`} className='w-20 h-20 rounded-md' alt={item.name} /></td>
              <td>{item.startingPrice}</td>
              <td>{item.description}</td>
              <td>{item.sellerName}</td>
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