import React, { useState } from 'react';
import './Chatbot.css'; // Import your CSS file for styling

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {/* Floating Chatbot Button */}
      <button className="chatbot-button" onClick={toggleChat}>
        <img src="\svg_logo.svg" alt="Chatbot" />
      </button>

      {/* Chat Screen */}
      {isOpen && (
        <div className="chat-screen">
          {/* Close button */}
          <button className="close-button" onClick={toggleChat}>
            <img src="\logo.jpg" alt="Close" />
          </button>
          {/* Chat messages can be rendered here */}
          <div className="chat-messages">
            {/* Example: Render chat messages */}
            <div className="message">Hello! How can I assist you today?</div>
          </div>
          {/* Chat input */}
          <div className="chat-input">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
