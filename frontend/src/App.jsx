import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import EventsPage from './pages/EventsPage';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          
          {/* Pages */}
          <Route path="/" element={<Home />} />
          
          <Route path="/Home" element={<Home />} />
          <Route path="/EventsPage" element={<EventsPage />} />

          
          
        


          
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App