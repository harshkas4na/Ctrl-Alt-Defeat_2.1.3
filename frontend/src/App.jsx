import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MainContainer from "./pages/MainContainer";
import Home from './pages/Home';
// import EventsPage from './pages/EventsPage';
import EventPage from './pages/EventPage';
import SearchPage from './pages/SearchPage';
import BiddingPage from './pages/BiddingPage';
import EventsPage from './pages/EventsPage';

const App = () => {
  return (
    <div>

        <BrowserRouter>
        <Routes>
          
          {/* Pages */}
          <Route path="/" element={<MainContainer />} />
          
          <Route path="/Home" element={<Home />} />
          <Route path="/EventsPage" element={<EventsPage />} />
          <Route path="/EventPage" element={<EventPage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/Bidding" element={<BiddingPage />} />

          
          
        


          
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App