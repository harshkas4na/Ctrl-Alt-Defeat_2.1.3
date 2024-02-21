import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./pages/MainContainer";
import Home from './pages/Home';
// import EventsPage from './pages/EventsPage';
import EventPage from './pages/EventPage';
import SearchPage from './pages/SearchPage';
import BiddingPage from './pages/BiddingPage';
import EventsPage from './pages/EventsPage';
import BuyerProfilePage from './pages/BuyerProfilePage';
import SellerProfilePage from './pages/SellerProfilePage'
import AddItemForm from './pages/AddItemForm';
import SellerSignup from './pages/SellerSignup';
import BuyerSignup from './pages/BuyerSignup';
import SubscriptionPlan from './pages/SubscriptionPlan'
import Chat from './pages/Chat';


const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          {/* Pages */}
          <Route path="/" element={<MainContainer />} />

          <Route path="/Home" element={<Home />} />
          <Route path="/EventsPage" element={<EventsPage />} />
          <Route path="/EventPage/:eventId" element={<EventPage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/Bidding" element={<BiddingPage />} />
          <Route path="/BuyerProfilePage" element={<BuyerProfilePage />} />
          <Route path="/SellerProfilePage" element={<SellerProfilePage />} />
          <Route path="/AddItemForm" element={<AddItemForm />} />
          <Route path="/SellerSignup" element={<SellerSignup />} />
          <Route path="/BuyerSignup" element={<BuyerSignup />} />
          <Route path="/UpgradePlan" element={<SubscriptionPlan />} />

      <Route path="/Chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App