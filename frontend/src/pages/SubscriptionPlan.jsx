import React, { useState } from 'react';
import './PagesCss/SubscriptionPlan.css'; // Import your stylesheet
import logo from './MainContainerImages/logo-name.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SellerSignup = () => {
  const [isSignUpMode, setSignUpMode] = useState(true);
  const [activeSlider, setActiveSlider] = useState(1);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [subscription, setSubscription] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setSignUpMode(!isSignUpMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:3000/subscription/new', {
      username: user,
      email: email,
      address: address,
      subscription: subscription
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.status >= 200 && res.status < 300) {
      console.log(res.data.message);
      toast.success(res.data.message)
      navigate("/");
    }
    else {
      console.log(res.data.message);
      toast.error(res.data.message);
    }


  }

  return (
    <main className={`${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form className="sign-up-form" onSubmit={handleSubmit} >

              <div className="actual-form">
                <div className="scrollableArea">
                  <p className='mb-3'>Subscription Plan</p>
                  <div className="input-wrap">
                    <input type="text" className="input-field" onChange={(e) => {
                      setUser(e.target.value)
                    }} />
                    <label className='active '>Username:</label>
                  </div>
                  <div className="input-wrap">
                    <input type="text" className="input-field" onChange={(e) => {
                      setEmail(e.target.value)
                    }} />
                    <label className='active'>Email</label>
                  </div>
                  {/* <div class="input-wrap itimg">
                    <input type="file" class="input-field" autocomplete="off" />
                    <label className='active'>Item Image</label>
                  </div> */}
                  <div className="input-wrap">
                    <input type="text" className="input-field" onChange={(e) => {
                      setAddress(e.target.value)
                    }} />
                    <label className='active'>Address</label>
                  </div>

                  <div className="identify">
                    <p className="light">Subscription :</p>

                    <div className="input-wrap">

                      <select name="id" id="type-id" onChange={(e) => {
                        setSubscription(e.target.value)
                      }}>
                        <option id="nd" value="">None(current Subscription)</option>
                        <option id="drk" value="BasicPlan">Basic</option>
                        <option id="drk" value="Premium">Premium</option>
                      </select>

                    </div>
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
            {/* <form action="index.html" autoComplete="off" className="sign-in-form">
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
            </form> */}
          </div>
          <div className="carousel flex flex-col justify-evenly overflow-y-auto">
            {/* <div className="images-wrapper">
              <img src={carousel1} class="image img-1 show" alt="" />
            </div> */}

            {/* <div className="text-slider"> */}
            {/* <div className="text-wrap"> */}
            {/* <div className="text-group overflow-y-auto h-max-[50px]"> */}
            <div className="log flex justify-center items-center">
              <img src={logo} className="inline-block" />
            </div>
            <div className="info flex justify-between mx-3 my-3">
              <div className="Type w-2/5 ml-4">
                <p className="plan font-semibold text-xl">
                  None:
                </p>
              </div>
              <div className="Feature w-3/5 mr-auto ">
                <ul className="text-left">
                  <li >Free delivery for first 5 items</li>
                  <li>Price: Free</li>
                </ul>
              </div>
            </div>
            <div className="info flex justify-between mx-3 my-3">
              <div className="Type w-2/5 ml-4">
                <p className="plan font-semibold text-xl">
                  Basic Plan:
                </p>
              </div>
              <div className="Feature w-3/5 mr-auto">
                <ul className="text-left">
                  <li >Free delivery for 20 items</li>
                  <li>Price: $10/month</li>
                </ul>
              </div>
            </div>
            <div className="info flex justify-between mx-3 my-3">
              <div className="Type w-2/5 ml-4">
                <p className="plan font-semibold text-xl">
                  Premium:
                </p>
              </div>
              <div className="Feature w-3/5 mr-auto ">
                <ul className="text-left">
                  <li >Free and Fast delivery for 50 items</li>
                  <li>Price: $18/month</li>
                </ul>
              </div>
            </div>


            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>

    </main>
  );
};

export default SellerSignup;
