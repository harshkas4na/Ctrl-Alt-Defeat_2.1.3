import React, { useEffect, useState } from 'react';
import './PagesCss/BuyerRegister.css'; // Import your stylesheet
import logo from './img/logo.png';
import carousel1 from './img/carousel1.png';
import carousel2 from './img/carousel2.png';
import carousel3 from './img/carousel3.png';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../store/userAtoms/user';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddItemForm = () => {
  const user=useRecoilValue(userAtom)
  const sellerId=user?._id;
  
  const  [formData, setFormData] = useState({
    name:"Artwork 3",
    seller:sellerId,
    description:"",//by form
    sold:false,
    itemPic:"",
    buyer:null,
    startingPrice:null,
    soldPrice:null,
    category:"",
    eventName:""
  })

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const res = await axios.post(`http://localhost:3000/seller/item/${sellerId}`, formData);
      console.log(res);
      toast.success('Item Added Successfully');
    } catch (err) {
      console.log(err);
      toast.error('Something Went Wrong');
    }
  };
  

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({
      ...formData,
      [name]:value
    })
  }

  

  return (
    <main className={'sign-up-mode'}>
            
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form action="index.html" autoComplete="off" className="sign-up-form">

              <div className="actual-form">
                <h1 className='mb-12 text-4xl ml-12 text-[#8b746a] font-bold'>Add Your Item</h1>
                <div class="scrollableArea">
                <p className='mb-9 font-semibold text-xl'>Add Item-Details</p>
                  
                  <div class="input-wrap">
                    <input type="text" class="input-field" onChange={handleChange} name='name' autocomplete="off" />
                    <label className='active'>Item Name</label>
                  </div>
                  <div class="input-wrap itimg">
                    <input type="file" class="input-field" onChange={handleChange} name='itemPic' autocomplete="off" />
                    <label className='active mt-9'>Item Image</label>
                  </div>
                  <div class="input-wrap">
                    <input type="text" class="input-field" onChange={handleChange} name='description' autocomplete="off" />
                    <label className='active'>Item Name</label>
                  </div>
                  <div class="input-wrap">
                    <input type="text" class="input-field" onChange={handleChange} name='category' autocomplete="off" />
                    <label className='active'>Category:</label>
                  </div>
                  <div class="input-wrap">
                    <input type="text" class="input-field" onChange={handleChange} name='startingPrice' autocomplete="off" />
                    <label className='active'>Base price</label>
                  </div>

                  <div class="input-wrap">
                    <input type="text" class="input-field" onChange={handleChange} name='eventName' autocomplete="off" />
                    <label className='active'>Event Name</label>
                  </div>


                </div>
                <input type="submit" value="Submit" onClick={handleSubmit} className="sign-btn" />

               
              </div>
            </form>
          </div>
          <div className="carousel ">
            <div className="images-wrapper">
              <img src={carousel1} class="image img-1 show" alt="" />
             
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

export default AddItemForm;
