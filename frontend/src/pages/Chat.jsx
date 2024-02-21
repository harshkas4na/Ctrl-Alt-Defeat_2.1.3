import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [isUsernameSubmitted, setIsUsernameSubmitted] = useState(false);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);
    
    // Clean up socket connection when component unmounts
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      // Listen for incoming messages
      socket.on('receiveMessage', (data) => {
        setReceivedMessages(prevMessages => [...prevMessages, data]);
      });
    }
  }, [socket]);

  const handleMessageSend = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    
    if (message.trim() !== '') {
      // Emit the message and username to the server
      socket.emit('sendMessage', { message, username });
      setMessage('');
    }
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    
    if (username.trim() !== '' && role.trim() !== '') {
      setIsUsernameSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#7b3421]">
      {/* Header/Navbar */}
      <div className="bg-[#a066569a] p-4 text-white font-poppins mb-4">
        <h1 className="text-2xl font-bold">Chat Application</h1>
      </div>
      <div className="container flex flex-col justify-between rounded-[3.3rem] shadow-[0_60px_40px_-30px_rgba(0, 0, 0, 0.27)] w-[80%] h-[80%] mx-auto px-8 py-8 bg-slate-200">
      {/* User Info Card */}
      <div className="p-4">
        {isUsernameSubmitted && (
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold">User Information</h2>
            <p><strong>Name:</strong> {username}</p>
            <p><strong>Role:</strong> {role}</p>
          </div>
        )}
      </div>
      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto p-4 mx-4 mb-4 bg-white rounded-lg shadow-md">
        {receivedMessages.map((data, index) => (
          <div 
            key={index} 
            className={`rounded-lg p-2 mb-2 max-w-md ${data.username === username ? 'bg-gray-200 self-start text-end' : 'bg-blue-200 self-end text-start'}`}
          >
            {data.username !== username && <div className="text-sm font-semibold mb-1">{data.username}</div>}
            {data.message}
          </div>
        ))}
      </div>
      </div>
      {/* Message Input */}
      <div className="p-4 w-full flex flex-row justify-center items-center">
        {!isUsernameSubmitted ? (
          <form onSubmit={handleUsernameSubmit} className="flex flex-col">
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter your username...'
              className='p-2 outline-none rounded-lg mb-2'
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="p-2 outline-none rounded-lg"
            >
              <option value="">Select Role</option>
              <option value="Seller">Seller</option>
              <option value="Bidder">Bidder</option>
            </select>
            <button type="submit" className="bg-primary text-white px-4 py-2 mt-2 rounded-md">Submit</button>
          </form>
        ) : (
          <form onSubmit={handleMessageSend} className="flex flex-row bg-white rounded-lg shadow-md w-full mx-0">
            <input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Type your message...'
              className='flex-grow p-2 outline-none rounded-lg'
            />
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">Send</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Chat;
