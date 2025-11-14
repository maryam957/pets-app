import React, { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), formData);
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setSuccess("Error sending message.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us 🐾</h1>
      {success && <p className="mb-2 text-green-500">{success}</p>}
      <form className="grid gap-4 max-w-md" onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} placeholder="Your name" required onChange={handleChange} className="border p-2 rounded"/>
        <input type="email" name="email" value={formData.email} placeholder="Your email" required onChange={handleChange} className="border p-2 rounded"/>
        <textarea name="message" rows="5" value={formData.message} placeholder="Your message" required onChange={handleChange} className="border p-2 rounded"/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
