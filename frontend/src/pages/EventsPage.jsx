import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  
  

  // Sample data for event categories and events
  const eventCategories = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Art' },
    
    { id: 3, name: 'Real-Estate' },
    { id: 4, name: 'Antiques' },
    { id: 5, name: 'Cars' },
    { id: 6, name: 'Jewelry' },
    // Add more event categories as needed
  ];

  const [events,setEvents] = useState([
    { id: 1, category: 'Art', name: 'Modern Art Auction', date: 'February 20, 2024', time: '10:00 AM - 2:00 PM', description: 'Browse through a collection of modern art pieces and place your bids.', rating: 4.5 },
    { id: 2, category: 'Art', name: 'Classic Art Auction', date: 'February 28, 2024', time: '9:00 AM - 1:00 PM', description: 'Explore classic art pieces from renowned artists and bid for your favorites.', rating: 4.8 },
    { id: 3, category: 'Art', name: 'Abstract Art Auction', date: 'March 5, 2024', time: '11:00 AM - 3:00 PM', description: 'Discover unique abstract art pieces and express your creativity.', rating: 4.3 },
    { id: 4, category: 'Antiques', name: 'Rare Coin Collection Auction', date: 'March 10, 2024', time: '12:00 PM - 4:00 PM', description: 'Explore a curated collection of rare coins from different eras.' },
    { id: 5, category: 'Antiques', name: 'Antique Furniture Auction', date: 'March 15, 2024', time: '10:00 AM - 2:00 PM', description: 'Bid on exquisite antique furniture pieces to add a touch of elegance to your space.' },
    { id: 6, category: 'Real-Estate', name: 'Luxury Villa Auction', date: 'March 20, 2024', time: '9:00 AM - 1:00 PM', description: 'Experience the epitome of luxury living with our exclusive villa auction.' },
    { id: 7, category: 'Real-Estate', name: 'Urban Condo Auction', date: 'March 25, 2024', time: '11:00 AM - 3:00 PM', description: 'Discover stylish urban condos in prime locations up for auction.' },
    // Add more events as needed
  ]);
  // console.log(events);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest'); // Default sorting option

  // Ref for all events section
  const allEventsRef = useRef(null);

  // Function to scroll to all events section
  const scrollToAllEvents = () => {
    allEventsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to sort events based on selected sorting option
  const sortEvents = (events) => {
    switch (sortBy) {
      case 'newest':
        return events.sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'oldest':
        return events.sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'highestRated':
        return events.sort((a, b) => b.rating - a.rating);
      case 'lowestRated':
        return events.sort((a, b) => a.rating - b.rating);
      default:
        return events;
    }
  };

  // Function to generate star emojis based on event rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push('⭐'); // Filled star emoji
      } else {
        stars.push('☆'); // Empty star emoji
      }
    }
    return stars;
  };

  const  GetRequest = async () => {
  const response = await fetch("http://localhost:3000/event",{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    } 
  })
  const data = await response.json();
  setEvents([...events, ...data]);
}
  useEffect(() => {
    GetRequest();
  },[])
 
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Events</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                className="appearance-none bg-white text-gray-800 border border-gray-300 rounded-md py-2 px-4 pr-8 focus:outline-none focus:border-primary"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {eventCategories.map((category) => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6h12l-6 6z" /></svg>
              </div>
            </div>
            <div className="relative">
              <select
                className="appearance-none bg-white text-gray-800 border border-gray-300 rounded-md py-2 px-4 pr-8 focus:outline-none focus:border-primary"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="highestRated">Highest Rated</option>
                <option value="lowestRated">Lowest Rated</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6h12l-6 6z" /></svg>
              </div>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 focus:outline-none focus:bg-opacity-90 transition duration-300" onClick={scrollToAllEvents}>All</button>
          </div>
        </nav>

        {/* Event Categories */}
        <div className="mb-8">
          {eventCategories.map((category) => (
            <div key={category.id}>
              {selectedCategory === 'All' || selectedCategory === category.name ? (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortEvents(events.filter((event) => category.name === 'All' ? true : event.category === category.name)).map((event) => (
                      <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="flex justify-between items-center px-4 py-3 bg-gray-200">
                          <div className="text-lg font-semibold text-gray-800">{event.name}</div>
                          <div className="text-sm text-gray-600">{event.date} | {event.time}</div>
                        </div>
                        <div className="px-4 py-3">
                          <p className="text-gray-700">{event.description}</p>
                          
                          <div className="flex items-center">
                            {renderStars(event.rating).map((star, index) => (
                              <span key={index} className="text-yellow-400">{star}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Ref for all events section */}
        <div ref={allEventsRef} />
      </div>
    </div>
  );
};

export default EventsPage;

