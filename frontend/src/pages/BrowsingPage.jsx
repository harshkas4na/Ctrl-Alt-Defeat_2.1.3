import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard'; // Create a separate component for the item card
import NavSpace from '../components/NavSpace';
import item1 from '../pages/images/artBackground.png';
import item2 from '../pages/images/antiquesBackground.png';
import item3 from '../pages/images/realEstateBackground.png';
import item4 from '../pages/images/carsBackground.png';
import item5 from '../pages/images/jewellaryBackground.png';
import { Link } from 'react-router-dom';

// import axios from 'axios'; // You may use Axios for making API requests

// const BrowsingPage = () => {
//   const [items, setItems] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [sortOption, setSortOption] = useState('default');

//   useEffect(() => {
//     // Fetch items from your API or use a hardcoded list
//     // For simplicity, we'll use a sample API endpoint here
//     axios.get('https://your-api-endpoint/items')
//       .then(response => {
//         setItems(response.data);
//         setFilteredItems(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Filter items based on search term and category
//     let filtered = items.filter(item =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedCategory === 'all' || item.category === selectedCategory)
//     );

//     // Sort items based on the selected option
//     switch (sortOption) {
//       case 'lowToHigh':
//         filtered = filtered.sort((a, b) => a.basePrice - b.basePrice);
//         break;
//       case 'highToLow':
//         filtered = filtered.sort((a, b) => b.basePrice - a.basePrice);
//         break;
//       case 'AtoZ':
//         filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       default:
//         break;
//     }

//     setFilteredItems(filtered);
//   }, [searchTerm, selectedCategory, sortOption, items]);

const BrowsingPage = () => {
  // Sample hardcoded list of items
  // Sample hardcoded list of items
const sampleItems = [
  {
    id: 1,
    name: 'Artwork 1',
    photo: item1,
    category: 'art',
    basePrice: 200,
    eventId: 'event123',
  },
  {
    id: 2,
    name: 'Antique Vase',
    photo: item2,
    category: 'antiques',
    basePrice: 150,
    eventId: 'event124',
  },
  {
    id: 3,
    name: 'Beachfront Property',
    photo: item3,
    category: 'realEstate',
    basePrice: 500000,
    eventId: 'event125',
  },
  {
    id: 4,
    name: 'Luxury Car',
    photo: item4,
    category: 'cars',
    basePrice: 80000,
    eventId: 'event126',
  },
  {
    id: 5,
    name: 'Sapphire Ring',
    photo: item5,
    category: 'jewelry',
    basePrice: 800,
    eventId: 'event132',
  }
    // Add more items as needed
  ];

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    // Use the sampleItems as the initial set of items
    setItems(sampleItems);
    setFilteredItems(sampleItems);
  }, []);

  useEffect(() => {
    // Filter items based on search term and category
    let filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || item.category === selectedCategory)
    );

    // Sort items based on the selected option
    switch (sortOption) {
      case 'lowToHigh':
        filtered = filtered.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case 'highToLow':
        filtered = filtered.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case 'AtoZ':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory, sortOption, items]);

  return (
    <div>
    <NavSpace/>
    <div className="container mx-auto mt-8 p-4">
    <Link to="/AddItemForm" className='font-bold text-xl mx-20 border-4 bg-slate-200 p-2 round-xl'>Add Item</Link>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by item name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mr-2"
      />

      {/* Filter Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border p-2 mr-2"
      >
        <option value="all">All Categories</option>
        <option value="art">Art</option>
        <option value="antiques">Antiques</option>
        <option value="realEstate">Real Estate</option>
        <option value="cars">Cars</option>
        <option value="jewelry">Jewelry</option>
      </select>

      {/* Sort Dropdown */}
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border p-2"
      >
        <option value="default">Default Sorting</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="AtoZ">A-Z</option>
      </select>

      {/* Display Item Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {filteredItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default BrowsingPage;