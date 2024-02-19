// CurrInfos.jsx
import React, { useEffect } from 'react';


const CurrInfos = ({eventName,setCurrentItem, currentItem, currentBid, startingPrice, bidderInfo }) => {
  // const [items, setItems] = useState([{currentItem, currentBid, startingPrice, bidderInfo}])


  
  useEffect(()=>{
    GetItems();
  },[])
  
  const GetItems = async () => {
    const response = await fetch('http://localhost:3000/item', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    

    setCurrentItem(data[0]);
   
   
    
    
    
    
  }
  const currentItemName=currentItem.name;
  const currentItemDescription=currentItem.description;
  const currentItemstartingPrice=currentItem.startingPrice;
  

  return (
    <div className="container  mx-auto py-8">
      <div className="flex flex-wrap  justify-between items-start">
        {/* Left Side - Current Item Info */}
        <div className="w-full md:w-[60%] mb-4 md:mb-0">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{currentItemName}</h2>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Description:</span> {currentItemDescription}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Current Bid:</span> {currentBid}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Starting Price:</span> ${currentItemstartingPrice}</p>
          </div>
        </div>
        {/* Right Side - Bidder Info */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Top Bidder</h2>
            <div className="flex items-center mb-4">
              <img src={bidderInfo.profilePicture} alt="Bidder Profile" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Name:</span> {bidderInfo.name}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Email:</span> {bidderInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-gray-700 mr-4"><span className="font-semibold">Rating:</span> {bidderInfo.rating}</p>
              {/* Add other bidder information as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrInfos;
