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
    <div className="site-container">
      <h1 className="page-title">Contact Us 🐾</h1>
      {success && <p className="mb-2" style={{color: 'green'}}>{success}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} placeholder="Your name" required onChange={handleChange} className="input"/>
        <input type="email" name="email" value={formData.email} placeholder="Your email" required onChange={handleChange} className="input"/>
        <textarea name="message" rows="5" value={formData.message} placeholder="Your message" required onChange={handleChange} className="input"/>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
