import React from 'react';
import './PagesCss/BuyerProfilePage.css';
import Profile from './images/profile_icon.png';
import {Link} from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className=' bg-[#7b3421] flex justify-center items-center w-full h-screen'>
      <div className="container flex flex-col justify-between rounded-[3.3rem] shadow-[0_60px_40px_-30px_rgba(0, 0, 0, 0.27)] w-full h-[90%] mx-auto px-8 py-8 bg-slate-200">
        <div className="flex justify-between items-center bg-[#a066569a] rounded-3xl px-4 py-4">
          <div>
            <h1 className="text-4xl font-bold text-[#343a40] pop-h1">Profile</h1>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Link className="bg-primary text-white px-4 py-2 rounded-md h-10 mr-4" to="/UpgradePlan">Upgrade Plan</Link>
            <img src={Profile} alt="Profile Icon" className="w-20 h-20 rounded-full" />
            <button className="ml-2 text-gray-100 hover:text-gray-200"><i className="fas fa-pencil-alt"></i></button>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#4e5358] pop-h2">Personal Info</h2>
          </div>
          <div className="flex flex-wrap relative">
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h3">Name:</label>
              <p className='block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h4'>John Doe</p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h3">Profile Type:</label>
              <p className='block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h4'>Public</p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h3">Email:</label>
              <p className='block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h4'>johndoe123@example.com</p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h3">Phone number:</label>
              <p className='block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h4'>9876543210</p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h3">Address:</label>
              <p className='block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h4'>Indian Institute Of Information Technology, Nagpur</p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h3">ID Type:</label>
              <p className='block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h4'>EPIC Card</p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center" >
              <label className="block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h3">ID Number:</label>
              <p className='block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h4'>6743-1847-3468</p>
            </div>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-md">Edit Profile</button>
        </div>
        <div className="mt-8">
          <div>
          <h2 className="text-2xl font-bold mb-4 text-[#4e5358]">Account Info</h2>
          </div>
          <div className="flex flex-wrap relative">
            <div className="w-1/2 mb-4 flex">
              <label className="block text-lg relative font-semibold text-[#5c5757] flex-shrink-0 mr-2 pop-h3">Card Type:</label>
              <p className='block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h4'>Credit</p>
            </div>
            <div className="w-1/2 mb-4 flex">
              <label className="block text-lg relative font-semibold text-[#5c5757] flex-shrink-0 mr-2 pop-h3">Card Holder Name:</label>
              <p className='block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h4'>John Doe</p>
            </div>
            <div className="w-1/2 mb-4 flex">
              <label className="block text-lg relative font-semibold text-[#5c5757] flex-shrink-0 mr-2 pop-h3">Card Number:</label>
              <p className='block text-lg relative font-semibold text-[#5c5757] flex-shrink mr-2 pop-h4'>4321-6789-1380</p>
            </div>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-md">Edit Account Info</button>
        </div>
      </div>
    </div>

  );
};

export default ProfilePage;
