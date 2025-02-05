import './ChatMessages.css';

function ChatMessages({ messages,typingStatus, lastMessageRef }) {
  if (!Array.isArray(messages)) {
    return <div>No messages available.</div>;
  }

  return (
    <div className='container'>
      <div className="message__container">
        {messages.map((message) => (
          message.name === "John" ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        ))}
        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </div>
  );
}

export default ChatMessages;
