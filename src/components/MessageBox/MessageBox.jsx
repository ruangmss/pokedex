import React from 'react';
import './MessageBox.css';

const MessageBox = ({ title, message }) => {
  return (
    <div className="container">
      <div className="message-box">
        {title && <h2>{title}</h2>}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default MessageBox;
