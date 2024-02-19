// Header.jsx
import React, { useEffect } from 'react';



const Header = ({ eventName, totalItems,itemsList,setItemsList ,remainingItems, previousRatings,setEventName,setTotalItems,setRemainingItems }) => {
  // Add other basic information about the event here
  // const [events, setEvents] = useState([{ eventName, totalItems, remainingItems, previousRatings }])

  const  GetRequest = async () => {
  const response = await fetch("http://localhost:3000/event",{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    } 
  })
  const data = await response.json();
  const curEventData=data.filter(event => event.startTime === 1600);
  setEventName(curEventData[0].name)
}
  useEffect(() => {
    GetRequest();
   
  },[])
  useEffect(()=>{
    GetItems();
  },[eventName])
  
  const GetItems = async () => {
    const response = await fetch('http://localhost:3000/item', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    const itemslistLength=data.filter(item => item.eventName===eventName)
    setItemsList(data.filter(item => item.eventName===eventName));
    setTotalItems(itemslistLength.length)
    const itemNotSold=data.filter(item => item.sold===false);
    
    setRemainingItems(itemNotSold.length);
    
    
  }


  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold">{eventName}</h1>
        <div className="flex flex-wrap justify-between mt-4">
          <div className="w-full md:w-1/2 lg:w-auto mb-2 md:mb-0">
            <p className="text-sm">Total Items Listed: <span className="font-semibold">{totalItems}</span></p>
            <p className="text-sm">Remaining Items: <span className="font-semibold">{remainingItems}</span></p>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto mb-2 md:mb-0">
            <p className="text-sm">Previous Ratings: <span className="font-semibold">{previousRatings}</span></p>
            {/* Add other basic information about the event here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
