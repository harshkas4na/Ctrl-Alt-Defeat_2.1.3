// BiddingPage.jsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CurrInfos from '../components/CurrInfos';
import BiddingSection from '../components/BiddingSection';
import LiveData from '../components/LiveData';
import Footer from '../components/Footer';
import Timer from '../components/Timer';



const BiddingPage = () => {
  // Example values for the event information
  const [eventName, setEventName] = useState("Ongoing auction event");
  const [totalItems, setTotalItems] = useState(50);
  const [itemsList, setItemsList] = useState([]);
  const [timer, setTimer] = useState(15);
  const [timerClosed, setTimerClosed] = useState(false);
  const [remainingItems, setRemainingItems] = useState(20);
  const previousRatings = "4.5/5";

  // Function to disable bid raising buttons
  const disableBidRaising = () => {
    setTimerClosed(true);
    clearTimeout(timer);
  };

  useEffect(() => {
    // Start the timer when the component mounts
    startTimer();
    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const startTimer = () => {
    // Set a timeout to close bidding after 15 seconds
    const newTimer = setTimeout(() => {
      setTimerClosed(true);
    }, 15000);
    // Save the timer ID
    setTimer(newTimer);
  };

  // Example values for the current item information
  const [currentItem, setCurrentItem] = useState("Antique Painting");
  const [currentBid, setCurrentBid] = useState(200);
  const [startingPrice, setStartingPrice] = useState(100);
  const bidderInfo = {
    name: "John Doe",
    email: "john@example.com",
    profilePicture: "https://via.placeholder.com/150",
    rating: 4.5 // Example rating
  };




  return (
    <div>
      <Header
        eventName={eventName}
        setEventName={setEventName}
        totalItems={totalItems}
        setTotalItems={setTotalItems}
        remainingItems={remainingItems}
        setRemainingItems={setRemainingItems}
        previousRatings={previousRatings}
        itemsList={itemsList}
        setItemsList={setItemsList}
      />

      <CurrInfos
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        currentBid={currentBid}
        startingPrice={startingPrice}
        bidderInfo={bidderInfo}
        itemsList={itemsList}

      />


      <div className='flex justify-between mx-20 align-center'>
        <BiddingSection
          currentBid={currentBid}
          setCurrentBid={setCurrentBid}
          disableBidRaising={disableBidRaising}
          timerClosed={timerClosed}
        />
        {!timerClosed && <Timer duration={15} onTimerComplete={() => setTimerClosed(true)} />}
      </div>
      <LiveData
        itemsList={itemsList}
        currentBid={currentBid}
        currentItem={currentItem}
      />

      <Footer />

    </div>
  );
}

export default BiddingPage;
