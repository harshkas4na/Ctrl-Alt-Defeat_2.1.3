import React, { useState } from 'react';
import './PagesCss/BuyerRegister.css'; // Import your stylesheet
import logo from './img/logo.png';
import carousel1 from './img/carousel1.png';
import carousel2 from './img/carousel2.png';
import carousel3 from './img/carousel3.png';

const SellerSignup = () => {
  const [isSignUpMode, setSignUpMode] = useState(true);
  const [activeSlider, setActiveSlider] = useState(1);

  const handleToggle = () => {
    setSignUpMode(!isSignUpMode);
  };

  return (
    <main className={`${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form action="index.html" autoComplete="off" className="sign-up-form">

              <div className="actual-form">
                <div class="scrollableArea">
                <p className='mb-3'>Add Item-Details</p>
                  <div class="input-wrap">  
                    <input type="text" class="input-field" autocomplete="off" />
                    <label className='active '>Seller Id:</label>
                  </div>
                  <div class="input-wrap">
                    <input type="text" class="input-field" autocomplete="off" />
                    <label className='active'>Item Name</label>
                  </div>
                  <div class="input-wrap itimg">
                    <input type="file" class="input-field" autocomplete="off" />
                    <label className='active'>Item Image</label>
                  </div>
                  <div class="input-wrap">
                    <input type="text" class="input-field" autocomplete="off" />
                    <label className='active'>Category:</label>
                  </div>
                  <div class="input-wrap">
                    <input type="text" class="input-field" autocomplete="off" />
                    <label className='active'>Base price</label>
                  </div>

                  <div class="input-wrap">
                    <input type="text" class="input-field" autocomplete="off" />
                    <label className='active'>Event Id</label>
                  </div>


                </div>
                <input type="submit" value="Submit" className="sign-btn" />

                <p class="text">
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
            <form action="index.html" autoComplete="off" className="sign-in-form">
              <div className="logo">
                <img src={logo} alt="subasta" />
                <h4>SUBASTA</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registered yet?&nbsp;</h6>
                <a href="#" className="toggle" onClick={handleToggle}>
                  Register
                </a>
              </div>

              <div className="actual-form">

                <div class="input-wrap">
                  <input type="text" class="input-field" autocomplete="off" />
                  <label className='active'>Username</label>
                </div>

                <div class="input-wrap">
                  <input type="password" class="input-field" autocomplete="off" />
                  <label className='active'>Password</label>
                </div>

                <input type="submit" value="Login" class="sign-btn" />

                <p class="text">
                  Forgotten your password or you login datails?&nbsp;
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>
          </div>
          <div className="carousel ">
            <div className="images-wrapper">
              <img src={carousel1} class="image img-1 show" alt="" />
              <img src={carousel2} class="image img-2" alt="" />
              <img src={carousel3} class="image img-3" alt="" />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Real-time bidding auction platform.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default SellerSignup;
