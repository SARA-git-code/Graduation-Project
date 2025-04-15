import React, { useState } from 'react';
import { Send, Search } from 'lucide-react';
import Profile from './Profile'; // 👈 assuming this is your existing profile component

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const conversations = [
    { id: 1, name: 'John Doe', lastMessage: 'Last message from the conversation...', time: '2 hours ago' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Is this item available?', time: '1 hour ago' },
    { id: 3, name: 'Mike Johnson', lastMessage: 'Hey, how are you?', time: '30 minutes ago' },
  ];

  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && selectedConversation) {
      const newMessage = {
        sender: 'You',
        content: message,
        timestamp: new Date().toLocaleTimeString(),
        conversationId: selectedConversation.id,
      };
      setMessages((prev) => [...prev, newMessage]);
      setMessage('');
    }
  };

  const getMessagesForSelectedConversation = () => {
    if (!selectedConversation) return [];
    return messages.filter((msg) => msg.conversationId === selectedConversation.id);
  };

  return (
    <div className="container mt-4 position-relative">
      <div className="row border rounded shadow-sm" style={{ height: '600px' }}>
        {/* Sidebar */}
        <div className="col-md-4 border-end d-flex flex-column">
          {/* Profile Button (above search) */}
          <div className="p-3 d-flex justify-content-start">
            <button
              className="btn p-0 border-0"
              onClick={() => setShowProfile(true)}
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <img
                src="https://via.placeholder.com/45"
                alt="Profile"
                className="w-100 h-100 object-fit-cover rounded-circle"
              />
            </button>
          </div>

          {/* Search Bar */}
          <div className="px-3 pb-3 border-bottom">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <Search size={16} className="text-muted" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="overflow-auto flex-grow-1">
            {filteredConversations.length === 0 ? (
              <div className="p-3 text-muted">No conversations found</div>
            ) : (
              filteredConversations.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedConversation(chat)}
                  className={`p-3 border-bottom cursor-pointer ${
                    selectedConversation?.id === chat.id ? 'bg-light' : ''
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  <h6 className="mb-1">{chat.name}</h6>
                  <small className="text-muted d-block">{chat.lastMessage}</small>
                  <small className="text-muted">{chat.time}</small>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className="col-md-8 d-flex flex-column">
          {selectedConversation ? (
            <>
              <div className="p-3 border-bottom">
                <h5 className="mb-0">{selectedConversation.name}</h5>
                <small className="text-success">Online</small>
              </div>

              <div className="flex-grow-1 overflow-auto p-3">
                {getMessagesForSelectedConversation().map((msg, index) => (
                  <div
                    key={index}
                    className={`d-flex mb-2 ${msg.sender === 'You' ? 'justify-content-end' : 'justify-content-start'}`}
                  >
                    <div
                      className={`p-2 rounded ${msg.sender === 'You' ? 'bg-primary text-white' : 'bg-light'}`}
                      style={{ maxWidth: '75%' }}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 border-top">
                <form className="d-flex gap-2" onSubmit={handleSendMessage}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary d-flex align-items-center justify-content-center">
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="d-flex justify-content-center align-items-center flex-grow-1">
              <p className="text-muted">Select a conversation to start chatting.</p>
            </div>
          )}
        </div>
      </div>

      {/* Profile Drawer */}
      {showProfile && (
        <div
          className="position-absolute top-0 end-0 bg-white border-start shadow"
          style={{
            height: '100%',
            width: '300px',
            zIndex: 10,
          }}
        >
          <Profile onClose={() => setShowProfile(false)} />
        </div>
      )}
    </div>
  );
};

export default Chat;
