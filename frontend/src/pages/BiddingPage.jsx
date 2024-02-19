// BiddingPage.jsx
import React, { useEffect,useState } from 'react';
import Header from '../components/Header';
import CurrInfos from '../components/CurrInfos';
import BiddingSection from '../components/BiddingSection';
import LiveData from '../components/LiveData';
import Footer from '../components/Footer';



const BiddingPage = () => {
  // Example values for the event information
  const [eventName,setEventName] =useState("Ongoing Auction Event");
  const [totalItems,setTotalItems] =useState(50);
  const [itemsList,setItemsList] =useState([]);
  const [remainingItems,setRemainingItems] =useState(20);
  const previousRatings = "4.5/5";


  // Example values for the current item information
  const [currentItem,setCurrentItem] = useState("Antique Painting");
  const [currentBid,setCurrentBid] =useState(200);
  const [startingPrice,setStartingPrice] = useState(100);
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
      />
      <BiddingSection
        currentBid={currentBid}
        setCurrentBid={setCurrentBid}
      />
      <LiveData
        itemsList={itemsList}
        currentBid={currentBid}
      />
      <Footer/>
    </div>
  );
}

export default BiddingPage;
