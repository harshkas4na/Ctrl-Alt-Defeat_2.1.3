// BiddingPage.jsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CurrInfos from '../components/CurrInfos';
import BiddingSection from '../components/BiddingSection';
import LiveData from '../components/LiveData';
import Footer from '../components/Footer';


const BiddingPage = () => {
  // Example values for the event information
  const [eventName, setEventName] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const totalItems = itemsList.length;
  const [remainingItemsList, setRemainingItemsList] = useState([]);
  const remainingItems = remainingItemsList.length;
  const previousRatings = "4.5/5";
  const [currentItem, setCurrentItem] = useState(null);
  const [currentBid, setCurrentBid] = useState(0);
  const [isDelay, setIsDelay] = useState(true);

  const bidderInfo = {
    name: "John Doe",
    email: "john@example.com",
    profilePicture: "https://via.placeholder.com/150",
    rating: 4.5 // Example rating
  };

  const GetRequest = async () => {
    const response = await fetch("http://localhost:3000/event/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    const curEventData = data.filter(event => event.startTime === 1600);
    // console.log(curEventData);
    setEventName(curEventData[0].name)
    // console.log(eventName);
  }

  const GetItems = async () => {
    const response = await fetch('http://localhost:3000/item/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    // console.log(data);
    setItemsList([...data.filter(item => item.eventName === eventName)]);
    setRemainingItemsList(data.filter(item => item.eventName === eventName));
    // setCurrentItem(data.filter(item => item.eventName === eventName)[0]);
  }

  useEffect(() => {
    GetRequest();
  }, [])

  useEffect(() => {
    GetItems();
  }, [eventName])

  // console.log(remainingItemsList)

  return (
    <div>
      <Header
        eventName={eventName}
        totalItems={totalItems}
        remainingItems={remainingItems}
        previousRatings={previousRatings}
        itemsList={itemsList}
      />

      <CurrInfos
        currentItem={currentItem}
        currentBid={currentBid}
        bidderInfo={bidderInfo}
        isDelay={isDelay}
        setIsDelay={setIsDelay}
      />

      <BiddingSection
        currentBid={currentBid}
        setCurrentBid={setCurrentBid}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        remainingItems={remainingItems}
        remainingItemsList={remainingItemsList}
        setRemainingItemsList={setRemainingItemsList}
        isDelay={isDelay}
        setIsDelay={setIsDelay}
      />

      <LiveData
        remainingItemsList={remainingItemsList}
        setRemainingItemsList={setRemainingItemsList}
        currentBid={currentBid}
        setCurrentBid={setCurrentBid}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />

      <Footer />

    </div>
  );
}

export default BiddingPage;
