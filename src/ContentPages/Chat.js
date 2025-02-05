import './Chat.css'

import React, { useState } from "react";

const Chat = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center gap-2 p-3 bg-Transparent rounded shadow-sm">
      
      <input
        className="form-control flex-grow-1"
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="btn btn-dark"
        onClick={handleSend}
      >
        <i class="bi bi-robot"></i>
      </button>
    
      
      </div>
    </div>
  );
};

export default Chat;
