// src/components/Content.js
import React, { useEffect, useState } from 'react';
import './Content.css';
import Chat from './ContentPages/Chat';
import ChatMessages from './ContentPages/ChatMessages';
import API from './api/axios';

function Content({ isSidebarOpen }) {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   // Simulating an API call
  //   const fetchMessages = async () => {
  //     const data = [
  //       { id: 1, name: "John", text: "Hello!" },
  //       { id: 2, name: "sk", text: "Hi, how are you?" },
  //       { id: 3, name: "John", text: "I'm good, thanks!" },
  //       { id: 4, name: "sk", text: "Great to hear!" },
  //       { id: 5, name: "John", text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dolorem labore optio, 
  //         adipisci quam suscipit animi nobis porro qui minima dicta dignissimos, maxime accusamus unde ut illo quod laboriosam libero at dolore? Ut vel voluptatem placeat, mollitia est quaerat ea.` },
  //       { id: 6, name: "sk", text: "Hi, how are you?" },
  //       { id: 7, name: "John", text: "I'm good, thanks!" },
  //       { id: 8, name: "sk", text: "Great to hear!" },
  //     ];
  //     setMessages(data); // Set fetched messages to state
  //   };
    
  //   fetchMessages();
  // }, []); // This will only run once when the component is mounted

  // onSend function to handle sending new messages
  const onSend = async(input) => {
    // Add the new message to the list of messages
    const prompt = {
      id: Date.now(), // Using timestamp as a unique ID
      name: "John", // Hardcoded name of the sender (you can change this)
      text: input,
    };
    
    setMessages((prevMessages) => [...prevMessages, prompt]); // Update the messages state

    const response = await API.post(`/chat`);
    console.log(response)
  };

  return (
    <div id="content" className={isSidebarOpen ? 'content-with-sidebar' : 'content-full-width'}>
      {/* Pass the messages array to ChatMessages component */}
      <ChatMessages messages={messages} />
      {/* Pass the onSend function to Chat component */}
      <Chat onSend={onSend} />
    </div>
  );
}

export default Content;
