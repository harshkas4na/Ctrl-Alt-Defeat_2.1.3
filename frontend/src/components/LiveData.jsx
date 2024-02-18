// LiveData.jsx
import React, { useEffect } from 'react';

useEffect(async () => { 
    const response = await fetch('http://localhost:3000/register', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  const { items } = data
  setItems(...items, items)
},[])

const LiveData = () => {
  // Placeholder data for demonstration
  const [items,setItems] = useState([
    { 
      itemId: 1,
      itemName: "Antique Painting",
      itemPic: "https://via.placeholder.com/150",
      startingPrice: "$100",
      ongoingBid: "$250",
      saleTime: "Complete",
      activityStatus: "Sold",
      endTime: new Date("2024-02-20T15:00:00Z") // Placeholder end time for demonstration
    },
    { 
      itemId: 2,
      itemName: "Vintage Watch",
      itemPic: "https://via.placeholder.com/150",
      startingPrice: "$200",
      ongoingBid: "$300",
      saleTime: "Ongoing",
      activityStatus: "Left",
      endTime: new Date("2024-02-21T10:00:00Z") // Placeholder end time for demonstration
    },
    // Add more live data items as needed
  ]);

  const getTimeRemaining = (endTime) => {
    const now = new Date();
    const distance = endTime - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-xl font-semibold mb-4">Live Data</h2>
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Pic</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Starting Price</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ongoing Bid</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Remaining</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map(item => (
              <tr key={item.itemId}>
                <td className="px-6 py-4 whitespace-nowrap">{item.itemId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.itemName}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={item.itemPic} alt={item.itemName} className="w-12 h-12" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.startingPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.ongoingBid}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.saleTime === "Ongoing" ? getTimeRemaining(item.endTime) : item.saleTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.activityStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveData;
