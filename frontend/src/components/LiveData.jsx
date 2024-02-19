import React, { useState, useEffect } from 'react';

const LiveData = ({ itemsList, currentBid, currentItem }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Update items with calculated endTime
    const updatedItems = itemsList.map(item => {
      const durationInMinutes = 30; // Example duration
      const endTime = new Date();
      endTime.setMinutes(endTime.getMinutes() + durationInMinutes);
      
      return { ...item, endTime };
    });

    setItems(updatedItems);
  }, [itemsList]);

  const getTimeRemaining = (endTime) => {
    const now = new Date();
    const distance = endTime - now;

    if (distance <= 0) {
      return "Complete";
    }

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
              <tr key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap">{item._id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={item.itemPic} alt={item.name} className="w-12 h-12" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.startingPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap">{currentItem === item.name ? currentBid : item.startingPrice}</td>
                
                <td className="px-6 py-4 whitespace-nowrap">{getTimeRemaining(item.endTime)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.sold ? "Sold" : "Not Sold"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveData;
