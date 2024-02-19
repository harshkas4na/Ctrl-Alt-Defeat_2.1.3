// BiddingSection.jsx
import React, { useState } from 'react';

const BiddingSection = ({ currentBid }) => {
  const [customBid, setCustomBid] = useState('');
  
  const handleBidChange = (e) => {
    setCustomBid(e.target.value);
  };

  const handleCustomBidSubmit = () => {
    // Handle custom bid submission
    console.log('Custom Bid:', customBid);
  };

  const handleRaiseBid = (percentage) => {
    // Calculate the raised bid based on the percentage
    const raisedBid = currentBid + (currentBid * percentage) / 100;
    // Handle raised bid submission
    console.log(`Raised Bid by ${percentage}%:`, raisedBid);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-xl font-semibold mb-4">Bidding Section</h2>
      <div className="flex items-center mb-4">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md mr-4" onClick={() => handleRaiseBid(5)}>Raise by 5%</button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md mr-4" onClick={() => handleRaiseBid(10)}>Raise by 10%</button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md mr-4" onClick={() => handleRaiseBid(15)}>Raise by 15%</button>
      </div>
      <div className="flex items-center mb-4">
        <input type="text" placeholder="Enter Custom Bid" className="px-4 py-2 border rounded-md mr-4" value={customBid} onChange={handleBidChange} />
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md" onClick={handleCustomBidSubmit}>Submit Custom Bid</button>
      </div>
    </div>
  );
};

export default BiddingSection;
