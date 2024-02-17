import React, { useState } from 'react';
import './MainContainerCss/style.css';
import './MainContainerCss/about.css';
import './MainContainerCss/home.css';
import './MainContainerCss/events.css';
import './MainContainerCss/browse.css';
import './MainContainerCss/links.css';
import Home from './Home';
import EventsPage from './EventsPage';
import About from './About';

const MainContainer = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  const handleLinkClick = (index) => {
    setActive(false);
    const elements = document.querySelectorAll('.behind');
    elements.forEach((element, i) => {
      if (i === index) {
        element.id = 'curr';
      } else {
        element.id = '';
      }
    });
  };

  const handleMouseOver = (index) => {
    const element = document.querySelector(`.behind:nth-child(${index + 1})`);
    element.classList.add('hover');
  };

  const handleMouseOut = (index) => {
    const element = document.querySelector(`.behind:nth-child(${index + 1})`);
    element.classList.remove('hover');
  };

  return (
    <section className={active ? 'active' : ''}>
      <nav>
        <menu>
          <div>
            <img src="images/logo.png" alt="logo" />
            <div className="logo">SUB<span>ASTA</span></div>
          </div>
          <div>
            <button className="signin">SIGN<span>&nbsp;IN</span></button>
            <button className="signup">SIGN<span>&nbsp;UP</span></button>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <div className="bar"></div>
            </div>
          </div>
        </menu>
      </nav>
      <div className="main-con">
        <div className="behind home no-scrollbar" id="curr">
          <Home/>
        </div>
        <div className="behind browse no-scrollbar">
          
        </div>
        <div className="behind events no-scrollbar">
         <EventsPage/>
        </div>
        <div className="behind about no-scrollbar">
          <About/>
        </div>
      </div>
      <div className="links">
        <ul>
          <li className="behindLink homeLink" onMouseOver={() => handleMouseOver(0)} onMouseOut={() => handleMouseOut(0)} onClick={() => handleLinkClick(0)}>
            <a href="#" style={{ '--i': '0.05s' }}>Home</a>
          </li>
          <li className="behindLink browseLink" onMouseOver={() => handleMouseOver(1)} onMouseOut={() => handleMouseOut(1)} onClick={() => handleLinkClick(1)}>
            <a href="#" style={{ '--i': '0.10s' }}>Browse</a>
          </li>
          <li className="behindLink eventsLink" onMouseOver={() => handleMouseOver(2)} onMouseOut={() => handleMouseOut(2)} onClick={() => handleLinkClick(2)}>
            <a href="#" style={{ '--i': '0.15s' }}>Events</a>
          </li>
          <li className="behindLink aboutLink" onMouseOver={() => handleMouseOver(3)} onMouseOut={() => handleMouseOut(3)} onClick={() => handleLinkClick(3)}>
            <a href="#" style={{ '--i': '0.20s' }}>About</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MainContainer;
