import React, { useState } from 'react';
import './PagesCss/BuyerRegister.css'; // Import your stylesheet
import logo from './img/logo.png';
import carousel1 from './img/carousel1.png';
import carousel2 from './img/carousel2.png';
import carousel3 from './img/carousel3.png';

const SellerSignup = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);
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
              <div className="logo">
                <img src={logo} alt="subasta" />
                <h4>SUBASTA</h4>
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?&nbsp;</h6>
                <a href="#" className="toggle" onClick={handleToggle}>
                  Login
                </a>
              </div>

              <div className="actual-form">
                <div class="scrollableArea">
                  <div class="input-wrap">
                    <input type="text" class="input-field" autocomplete="off" />
                    <label className='active'>Name</label>
                  </div>
                  <div class="input-wrap">
                    <input type="text" class="input-field" autocomplete="off" />
                    <label className='active'>Username</label>
                  </div>
                  <div class="input-wrap">
                    <input type="email" class="input-field" autocomplete="off" />
                    <label className='active'>Email</label>
                  </div>
                  <div class="input-wrap">
                    <input type="password" class="input-field" autocomplete="off" />
                    <label className='active'>Password</label>
                  </div>
                  <div class="input-wrap">
                    <input type="text" class="input-field" autocomplete="off" />
                    <label className='active'>Phone number</label>
                  </div>
                  <div class="identify">
                    <p class="light">Government id :</p>

                    <div class="input-wrap">

                      <select name="id" id="type-id">
                        <option id="nd" value="">Select An Option</option>
                        <option id="drk" value="Adhar-Card">Adhar Card</option>
                        <option id="drk" value="Driving License">Drying License</option>
                        <option id="drk" value="EPIC Card">Epic Card</option>
                      </select>

                    </div>
                  </div>
                  <div class="input-wrap">
                    <label className='active'>id - no </label>
                    <input type="txt" class="input-field" autocomplete="off" />
                  </div>

                  <div class="input-wrap">
                    <input type="text" class="input-field" autocomplete="off" />
                    <label className='active'>Address</label>
                  </div>





                  <div class="identify">
                    <p class="light">Account Type :&nbsp;</p>
                    <div class="input-wrap">
                      <select name="addr" id="type-card">
                        <option id="nd" value="">Select Card Option</option>
                        <option id="drk" value="Credit Card">Credit Card</option>
                        <option id="drk" value="Debit Card">Debit Card</option>
                      </select>
                    </div>
                  </div>
                  <div class="input-wrap">
                    <label className='active'>Card Holder Name</label>
                    <input type="text" class="input-field" id="card" autocomplete="off" />
                  </div>
                  <div class="input-wrap">
                    <label className='active'>Card Number</label>
                    <input type="text" class="input-field" autocomplete="off" />
                  </div>
                  <div class="input-wrap">
                    <label className='active'>Expiry Date</label>
                    <input type="text" class="input-field" id="card" autocomplete="off" />
                  </div>
                  <div class="input-wrap">
                    <label className='active'>IFSC Code</label>
                    <input type="text" class="input-field" autocomplete="off" />
                  </div>

                </div>
                <input type="submit" value="Register" className="sign-btn" />

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
          <div className="carousel">
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
