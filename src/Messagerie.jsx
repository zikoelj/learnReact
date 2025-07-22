import React, { useState, useEffect } from 'react';
import './Messagerie.css';

const Messagerie = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Jean Dupont', content: 'Salut, ça va ?', time: '10:30', isRead: true },
    { id: 2, sender: 'Marie Martin', content: 'Tu as vu le dernier rapport ?', time: '11:45', isRead: false },
    { id: 3, sender: 'Pierre Lambert', content: 'Réunion demain à 14h', time: '12:15', isRead: true },
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        id: messages.length + 1,
        sender: 'Moi',
        content: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isRead: true
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const filteredMessages = messages.filter(message =>
    message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Marquer comme lu quand on sélectionne un message
    if (selectedMessage) {
      setMessages(messages.map(msg =>
        msg.id === selectedMessage.id ? { ...msg, isRead: true } : msg
      ));
    }
  }, [selectedMessage]);

  return (
    <div className="messagerie-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Messages</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="search-icon">🔍</i>
          </div>
        </div>

        <div className="message-list">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className={`message-preview ${!message.isRead ? 'unread' : ''} ${selectedMessage?.id === message.id ? 'active' : ''}`}
              onClick={() => setSelectedMessage(message)}
            >
              <div className="message-sender">{message.sender}</div>
              <div className="message-content-preview">
                {message.content.length > 30 
                  ? `${message.content.substring(0, 30)}...` 
                  : message.content}
              </div>
              <div className="message-time">{message.time}</div>
              {!message.isRead && <div className="unread-badge"></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="message-content">
        {selectedMessage ? (
          <>
            <div className="message-header">
              <h3>{selectedMessage.sender}</h3>
              <div className="message-time">{selectedMessage.time}</div>
            </div>
            <div className="message-text">
              <p>{selectedMessage.content}</p>
            </div>
          </>
        ) : (
          <div className="no-message-selected">
            <p>Sélectionnez un message pour le lire</p>
          </div>
        )}

        <div className="message-input">
          <textarea
            placeholder="Écrivez votre message ici..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default Messagerie;