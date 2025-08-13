import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoSend, IoChatbubbleEllipses, IoClose, IoCheckmarkCircle } from 'react-icons/io5';
import '../css/Chatbot.css';
import { runChat } from '../services/aiService';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

type HistoryItem = {
  role: 'user' | 'model';
  parts: { text: string }[];
}

const BotMessageRenderer = ({ text }: { text: string }) => {
  const lines = text.split('\n').filter(line => line.trim() !== '');

  return (
    <div className="bot-message-content">
      {lines.map((line, index) => {
        if (line.trim().startsWith('-')) {
          return (
            <div key={index} className="styled-list-item">
              <IoCheckmarkCircle className="list-icon" />
              <span>{line.replace(/-\s*/, '')}</span>
            </div>
          );
        }
        return <p key={index} className="bot-message-paragraph">{line}</p>;
      })}
    </div>
  );
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Halo! Saya Jarvis, asisten AI Bintang. Ada yang bisa saya bantu? ✨", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;
    const userMessageText = input;
    const userMessage: Message = { text: userMessageText, sender: 'user' };
    const historyForAPI: HistoryItem[] = messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    try {
      const responseText = await runChat(userMessageText, historyForAPI);
      const botMessage: Message = { text: responseText, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Terjadi kesalahan saat chat:", error);
      const errorMessage: Message = { text: "Waduh, koneksi ke saya lagi ada gangguan. Coba lagi beberapa saat ya.", sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="chatbot-container">
        <AnimatePresence>
          {isOpen && (
            <motion.div className="chat-window" initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
              <div className="chat-header">
                <h3>Asisten AI</h3>
                <button onClick={() => setIsOpen(false)} className="close-btn"><IoClose size={22} /></button>
              </div>
              <div ref={chatBodyRef} className="chat-body">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.sender}`}>
                    {msg.sender === 'bot' ? <BotMessageRenderer text={msg.text} /> : <p>{msg.text}</p>}
                  </div>
                ))}
                {isLoading && (<div className="message bot"><p className="typing-indicator"><span></span><span></span><span></span></p></div>)}
              </div>
              <div className="chat-footer">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Tanya apa saja tentang Bintang..." onKeyPress={(e) => e.key === 'Enter' && handleSend()} disabled={isLoading} />
                <button onClick={handleSend} className="send-btn" disabled={isLoading}><IoSend /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button className="chatbot-toggle-btn" onClick={() => setIsOpen(!isOpen)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {isOpen ? <IoClose size={28} /> : <IoChatbubbleEllipses size={28} />}
        </motion.button>
      </div>
    </>
  );
};

export default Chatbot;