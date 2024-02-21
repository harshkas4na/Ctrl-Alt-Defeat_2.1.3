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
  const [eventName, setEventName] = useState("Ongoing Auction Event");
  const [totalItems, setTotalItems] = useState(50);
  const [itemsList, setItemsList] = useState([]);
  const [timerClosed, setTimerClosed] = useState(false);
  const [remainingItems, setRemainingItems] = useState(20);
  const previousRatings = "4.5/5";

  useEffect(() => {
    // Start the timer when the component mounts
    const newTimer = setTimeout(() => {
      setTimerClosed(true);
    }, 15000);
    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(newTimer);
    };
  }, []);

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

