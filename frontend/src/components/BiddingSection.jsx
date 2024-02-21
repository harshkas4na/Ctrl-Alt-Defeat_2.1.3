import React, { useState, useEffect } from 'react';

const BiddingSection = ({ currentBid, setCurrentBid,disableBidRaising, timerClosed }) => {
  const [customBid, setCustomBid] = useState("");
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    // Start the timer when the component mounts
    startTimer();
    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleBidChange = (e) => {
    setCustomBid(e.target.value);
    // Restart the timer whenever there's a bid change
    restartTimer();
  };

  const handleCustomBidSubmit = () => {
    // Convert the custom bid to a number
    const customBidNumber = parseFloat(customBid);

    // Check if the custom bid is a valid number
    if (!isNaN(customBidNumber)) {
      // Handle raised bid submission
      if (customBidNumber > currentBid) {
        setCurrentBid(customBidNumber);
      } else {
        alert("You can't bid lower than the Current Bid");
      }
      // Clear the custom bid input field
      setCustomBid("");
      // Restart the timer after bid submission
      restartTimer();
    } else {
      // Display an error message if the custom bid is not a valid number
      console.error("Invalid custom bid");
      // You can also display a user-friendly message here if you prefer
      // For example: setCustomBidError("Please enter a valid number");
    }
  };

  const handleRaiseBid = (percentage) => {
    // Calculate the raised bid based on the percentage
    const raisedBid = currentBid + (currentBid * percentage) / 100;
    // Handle raised bid submission
    setCurrentBid(raisedBid);
    // Restart the timer after bid submission
    restartTimer();
  };

  const startTimer = () => {
    // Set a timeout to close bidding after 15 seconds
    const newTimer = setTimeout(() => {
      
      // Disable bid submission after the timer expires
      setCustomBid("");
    }, 15000);
    // Save the timer ID
    setTimer(newTimer);
  };

  const restartTimer = () => {
    // Clear the existing timer
    clearTimeout(timer);
    // Restart the timer
    startTimer();
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-xl font-semibold mb-4">Bidding Section</h2>
      <div className="flex items-center mb-4">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md mr-4" onClick={() => handleRaiseBid(5)} disabled={timerClosed}>Raise by 5%</button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md mr-4" onClick={() => handleRaiseBid(10)} disabled={timerClosed}>Raise by 10%</button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md mr-4" onClick={() => handleRaiseBid(15)} disabled={timerClosed}>Raise by 15%</button>
      </div>
      <div className="flex items-center mb-4">
        <input type="text" placeholder="Enter Custom Bid" className="px-4 py-2 border rounded-md mr-4" value={customBid} onChange={handleBidChange} />
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md" onClick={handleCustomBidSubmit} disabled={timerClosed}>Submit Custom Bid</button>
      </div>
    </div>
  );
};

export default BiddingSection;
