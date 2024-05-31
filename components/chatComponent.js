import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatComponent.module.css';

const ChatComponent = () => {
  const initialMessages = [
    { id: 1, sender: '', text: 'прив', type: 'sent' },
    { id: 2, sender: '', text: 'привет', type: 'received' },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    const newMessages = [
      { id: 3, sender: '', text: 'че делаеш', type: 'sent' },
      { id: 4, sender: '', text: 'ниче лежу', type: 'received' },
      { id: 5, sender: '', text: 'жиза, лол', type: 'sent' },
      { id: 6, sender: '', text: 'го почиллим', type: 'received' },
      { id: 7, sender: '', text: 'звучит хайпово', type: 'sent' },
    ];

    const addMessages = async () => {
      for (let i = 0; i < newMessages.length; i++) {
        setMessages((prevMessages) => [...prevMessages, newMessages[i]]);
        console.log('sent');
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay between adding messages
      }
    };

    let observer;
    if (chatRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(chatRef.current);
    }

    if (isIntersecting) {
      addMessages();
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [isIntersecting]);

  return (
    <div ref={chatRef} className={styles.chatContainer}>
      {messages.map((message) => {
        const messageType = message?.type ?? 'sent'; // Using nullish coalescing operator
        return (
          <div key={message.id} className={`${styles.message} ${styles[messageType]}`}>
            <div className={styles.sender}>{message.sender}</div>
            <div>{message.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatComponent;
