import React, { useState } from 'react';
import axios from 'axios';

const OpenAIChatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [errorMessage, setErrorMessasge] = useState("");

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = async () => {
        try {
            const response = await axios.post(
                process.env.REACT_APP_OPENAI_API_URL,
                {
                    model: "gpt-3.5-turbo",
                    prompt: userInput,
                    temperature: 0.7,
                    max_tokens: 150,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0
                },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    },
                }
            );

            // Process the response and update chat history
            setChatHistory([...chatHistory, response.data.choices[0].text]);
            setUserInput('');
        } catch (error) {
            console.error('Error sending message:', error);
            setErrorMessasge(error?.response?.data?.error?.message);
        }
    };

    return (
        <div className="chatbot">
            <div className="chat-history">
            {errorMessage}
                {chatHistory.map((message, index) => (
                    <div key={index} className="message">
                        {message}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={userInput}
                    onChange={handleUserInput}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
            {/* <div>
                {errorMessage}
            </div> */}
        </div>
    );
};

export default OpenAIChatbot;
