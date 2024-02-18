import React from 'react';

const EventPage = () => {
  // Sample event details
  const eventDetails = {
    name: 'Modern Art Auction',
    date: 'February 20, 2024',
    time: '10:00 AM - 2:00 PM',
    description: 'Browse through a collection of modern art pieces and place your bids.',
    rating: 4.5,
  };

  // Sample data for items being sold at the event
  const eventItems = [
    { id: 1, name: 'Artwork 1', imageUrl: '/artwork1.jpg', minBidPrice: '$100', description: 'Description of Artwork 1' },
    { id: 2, name: 'Artwork 2', imageUrl: '/artwork2.jpg', minBidPrice: '$150', description: 'Description of Artwork 2' },
    // Add more items as needed
  ];

  // Function to render the table rows for event items
  const renderEventItems = () => {
    return eventItems.map(item => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td><img src={item.imageUrl} alt={item.name} /></td>
        <td>{item.minBidPrice}</td>
        <td>{item.description}</td>
      </tr>
    ));
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Event Details */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">{eventDetails.name}</h2>
          <p className="text-gray-600 mt-2">{eventDetails.date} | {eventDetails.time}</p>
          <p className="text-gray-700 mt-4">{eventDetails.description}</p>
          {/* Add rating rendering if needed */}
        </div>

        {/* Event Items */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Items for Auction</h3>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Item Name</th>
                <th className="px-4 py-2">Item Pic</th>
                <th className="px-4 py-2">Item Min Bid Price</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {renderEventItems()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
