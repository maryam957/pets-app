import React from "react";
import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    const querySnapshot = await getDocs(collection(db, "messages"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setMessages(data);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="site-container">
      <h1 className="page-title">Admin Dashboard - Messages</h1>

      <div className="admin-container">
        <div className="admin-header">
          <h2>📬 Received Messages</h2>
          <span className="message-count">{messages.length} total</span>
        </div>

        {messages.length === 0 && (
          <div className="card text-center" style={{padding: '2rem', background: '#f9fafb'}}>
            <p style={{fontSize: '1.1rem', color: '#6b7280'}}>No messages yet. Check back later!</p>
          </div>
        )}

        <div className="messages-grid">
          {messages.map((m) => (
            <div key={m.id} className="message-card">
              <div className="message-header">
                <span className="message-name">👤 {m.name}</span>
                <span className="message-date">
                  {m.createdAt?.toDate ? new Date(m.createdAt.toDate()).toLocaleDateString() : 'N/A'}
                </span>
              </div>
              <div className="message-body">
                <p className="message-email">📧 {m.email}</p>
                <p className="message-text">{m.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;
