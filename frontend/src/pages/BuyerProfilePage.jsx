import React from 'react';

const ProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-300 to-blue-500 text-white">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#343a40]">Profile</h1>
        </div>
        <div>
          <img src="https://via.placeholder.com/200" alt="Profile Icon" className="w-25 h-25 rounded-full" />
          <button className="ml-2 text-gray-100 hover:text-gray-200"><i className="fas fa-pencil-alt"></i></button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4 text-[#4e5358]">Personal Info</h2>
        <div className="flex flex-wrap">
          <div className="w-1/2 mb-4">
            <label className="block text-lg font-semibold ">Name:</label>
            <p className="mt-1 text-sm">John Doe</p>
          </div>
          <div className="w-1/2 mb-4">
            <label className="block text-lg font-semibold">Profile Type:</label>
            <p className="mt-1 text-sm">Public</p>
          </div>
          <div className="w-1/2 mb-4">
            <label className="block text-lg font-semibold">Email:</label>
            <p className="mt-1 text-sm">johndoe@example.com</p>
          </div>
          <div className="w-1/2 mb-4">
            <label className="block text-lg font-semibold">Phone Number:</label>
            <p className="mt-1 text-sm">1234567890</p>
          </div>
          <div className="w-1/2 mb-4">
            <label className="block text-lg font-semibold">Address:</label>
            <p className="mt-1 text-sm">123 Main Street, City, Country</p>
          </div>
          <div className="w-1/2 mb-4">
            <label className="block text-lg font-semibold">ID Type:</label>
            <p className="mt-1 text-sm">Aadhar Card</p>
          </div>
          <div className="w-1/2 mb-4">
            <label className="block text-lg font-semibold">ID Number:</label>
            <p className="mt-1 text-sm">1234567890</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-100">Edit Profile</button>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Account Info</h2>
        <div className="flex flex-wrap">
          <div className="w-1/2 mb-4">
            <label className="block text-lg font-semibold">Card Type:</label>
            <p className="mt-1 text-sm">Debit</p>
          </div>
          <div className="w-1/2 mb-4">
            <label className="block text-lg font-semibold">Card Holder Name:</label>
            <p className="mt-1 text-sm">John Doe</p>
          </div>
          <div className="w-1/2 mb-4">
            <label className="block text-lg font-semibold">Card Number:</label>
            <p className="mt-1 text-sm">1234 5678 9012 3456</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-100">Edit Account Info</button>
      </div>
    </div>
  );
};

export default ProfilePage;
