import "animate.css";

import React, { useState } from 'react';

const AboutPage = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        const res = await fetch('/about', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        const data = await res.json();
        setResponse(data.response);
    };

    return (
        <div className="p-4">
            {/* <h1>About Page</h1>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
            />
            <button onClick={sendMessage}>Send</button>
            <p>MINIME: {response}</p>
             */}
            <h1>COMING SOON..</h1>
        </div>
    );
};

export default AboutPage;