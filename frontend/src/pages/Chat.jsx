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
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header/Navbar */}
      <div className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-bold">Chat Application</h1>
      </div>
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
      <div className="flex-grow overflow-y-auto p-4">
        {receivedMessages.map((data, index) => (
          <div 
            key={index} 
            className={`rounded-lg p-2 mb-2 max-w-md ${data.username === username ? 'bg-gray-200 self-start' : 'bg-blue-200 self-end'}`}
          >
            {data.username !== username && <div className="text-sm font-semibold mb-1">{data.username}</div>}
            {data.message}
          </div>
        ))}
      </div>
      {/* Message Input */}
      <div className="p-4">
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
            <button type="submit" className='p-2 bg-blue-500 text-white rounded-lg mt-2'>Submit</button>
          </form>
        ) : (
          <form onSubmit={handleMessageSend} className="flex items-center bg-white rounded-lg shadow-md">
            <input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Type your message...'
              className='flex-grow p-2 outline-none rounded-lg'
            />
            <button type="submit" className='p-2 bg-blue-500 text-white rounded-lg'>Send</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Chat;
