import React from 'react';

const ProfilePage = () => {
  return (
    <div className='bg-zinc-300'>
      <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-300 to-blue-500 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-8xl font-bold text-[#343a40]">Profile</h1>
          </div>
          <div>
            <img src="https://via.placeholder.com/200" alt="Profile Icon" className="w-25 h-25 rounded-full" />
            <button className="ml-2 text-gray-100 hover:text-gray-200"><i className="fas fa-pencil-alt"></i></button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#4e5358]">Personal Info</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 mb-4 flex relative">
              <label className="block text-lg font-semibold text-[#5c5757] flex-shrink-0 mr-2">Name:</label>

            </div>


            <div className="w-1/2 mb-4 flex relative">
              <label className="block text-lg font-semibold text-[#5c5757] flex-shrink-0 mr-2">Profile Type:</label>

            </div>
            <div className="w-1/2 mb-4 flex relative">
              <label className="block text-lg font-semibold text-[#5c5757] flex-shrink-0 mr-2">Email:</label>

            </div>
            <div className="w-1/2 mb-4 flex relative">
              <label className="block text-lg font-semibold text-[#5c5757] flex-shrink-0 mr-2">Phone number:</label>

            </div>
            <div className="w-1/2 mb-4 flex relative">
              <label className="block text-lg font-semibold text-[#5c5757] flex-shrink-0 mr-2">Address:</label>

            </div>
            <div className="w-1/2 mb-4 flex relative">
              <label className="block text-lg font-semibold text-[#5c5757] flex-shrink-0 mr-2">ID Type:</label>

            </div>
            <div className="w-1/2 mb-4 flex relative" >
              <label className="block text-lg font-semibold text-[#5c5757] flex-shrink-0 mr-2">ID Number:</label>

            </div>
          </div>
          <button className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-100">Edit Profile</button>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#091521b4]">Account Info</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 mb-4 flex relative">
              <label className="block text-lg font-semibold text-[#233137] flex-shrink-0 mr-2">Card Type:</label>

            </div>
            <div className="w-1/2 mb-4 flex relative">
              <label className="block text-lg font-semibold text-[#233137] flex-shrink-0 mr-2">Card Holder NAme:</label>

            </div>
            <div className="w-1/2 mb-4 flex relative">
              <label className="block text-lg font-semibold text-[#233137] flex-shrink-0 mr-2">Card Number:</label>

            </div>
          </div>
          <button className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-100">Edit Account Info</button>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#2b2f34d3]">Items Purchased</h2>
        </div>
      </div></div>

  );
};

export default ProfilePage;
