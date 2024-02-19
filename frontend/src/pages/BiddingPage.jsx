// BiddingPage.jsx
import React, { useEffect } from 'react';
import Header from '../components/Header';
import CurrInfos from '../components/CurrInfos';
import BiddingSection from '../components/BiddingSection';
import LiveData from '../components/LiveData';
import Footer from '../components/Footer';

// useEffect(async () => {
//   const response = await fetch('http://localhost:3000/register', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   const data = await response.json()
//   const { items } = data
//   setItems(...items, items)
// })


const BiddingPage = () => {
  // Example values for the event information
  const eventName = "Ongoing Auction Event";
  const totalItems = 50;
  const remainingItems = 20;
  const previousRatings = "4.5/5";


  // Example values for the current item information
  const currentItem = "Antique Painting";
  const currentBid = 200;
  const startingPrice = 100;
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
        totalItems={totalItems}
        remainingItems={remainingItems}
        previousRatings={previousRatings}
      />
      <CurrInfos
        currentItem={currentItem}
        currentBid={currentBid}
        startingPrice={startingPrice}
        bidderInfo={bidderInfo}
      />
      <BiddingSection/>
      <LiveData/>
      <Footer/>
    </div>
  );
}

export default BiddingPage;
