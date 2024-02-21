// BiddingSection.jsx
import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';

const BiddingSection = ({ timerClosed }) => {
  const [customBid, setCustomBid] = useState("");
  const [timer, setTimer] = useState(null);
  const [rerenderKey, setRerenderKey] = useState(0);

  useEffect(() => {
    startTimer();
    return () => {
      clearTimeout(timer);
    };
  }, [rerenderKey]);

  const startTimer = () => {
    const newTimer = setTimeout(() => {
      setCustomBid("");
    }, 15000);
    setTimer(newTimer);
  };

  const handleBidChange = (e) => {
    setCustomBid(e.target.value);
    restartTimer();
  };

  const restartTimer = () => {
    clearTimeout(timer);
    startTimer();
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-xl font-semibold mb-4">Bidding Section</h2>
      <div className="flex items-center mb-4">
        {/* Buttons for raising bids */}
      </div>
      <div className="flex items-center mb-4">
        {/* Custom bid input */}
      </div>
      <Timer key={rerenderKey} duration={15} onTimerComplete={() => setRerenderKey(prevKey => prevKey + 1)} />
    </div>
  );
};

export default BiddingSection;
