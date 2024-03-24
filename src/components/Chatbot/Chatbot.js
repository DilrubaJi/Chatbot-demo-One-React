import React, { useState } from 'react';
import './Chatbot.css'; // Import your CSS file for styling
import logo from './logo2.jpg';
import svglogo from './svg_logo2.svg';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {/* Floating Chatbot Button */}
      <button className="chatbot-button" onClick={toggleChat}>
        <img src={svglogo} alt="Chatbot" />
      </button>

      {/* Chat Screen */}
      {isOpen && (
        <div className="chat-screen">
          {/* Close button */}
          <button className="close-button" onClick={toggleChat}>
            <img src={logo} alt="Close" />
          </button>
          {/* Chat messages can be rendered here */}

          <div className="chat-messages">
            {/* Example: Render chat messages */}
            <div className="message">Hello explorer!</div>
            <div className="message">
              This is a demonstrator ChatBot in development. I am not functional at the moment.
              Please come back another time to try again!</div>
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
