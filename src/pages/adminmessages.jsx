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
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Stored Messages</h1>

      {messages.length === 0 && <p>No messages yet.</p>}

      <ul className="space-y-4">
        {messages.map((m) => (
          <li key={m.id} className="border p-4 rounded">
            <p><strong>Name:</strong> {m.name}</p>
            <p><strong>Email:</strong> {m.email}</p>
            <p><strong>Message:</strong> {m.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminMessages;
