import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [remember, setRemember] = useState(false);
  const [success, setSuccess] = useState(false);

  // Load saved email if cookie exists
  useEffect(() => {
    const savedEmail = Cookies.get("savedEmail");
    if (savedEmail) {
      setForm((prev) => ({ ...prev, email: savedEmail }));
      setRemember(true);
    }
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Save / Remove email in cookie depending on checkbox
    if (remember) {
      Cookies.set("savedEmail", form.email, { expires: 7 }); // save for 7 days
    } else {
      Cookies.remove("savedEmail");
    }

    try {
      await addDoc(collection(db, "messages"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: new Date(),
      });

      setSuccess(true);
      alert("Message sent successfully!");

      setForm({
        name: "",
        email: remember ? form.email : "", // keep email if remember = true
        message: "",
      });
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="site-container">
      <h1 className="page-title">Contact Us</h1>

      <div className="contact-container">
        {/* LEFT SIDE INFO */}
        <div className="contact-info">
          <h2>Get In Touch 🐾</h2>
          <p><i className="icon">📧</i> Email: support@petsapp.com</p>
          <p><i className="icon">📞</i> Phone: +1 (555) 123-4567</p>
          <p><i className="icon">📍</i> Address: 123 Pet Street, Animal City</p>
          <p style={{ marginTop: "1rem", lineHeight: "1.8" }}>
            We love hearing from pet lovers! Whether you have questions, feedback, 
            or just want to share your pet's story, feel free to reach out.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">
          <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Send Us a Message</h2>

          {success && (
            <div
              className="card"
              style={{ background: "#d1fae5", color: "#065f46", marginBottom: "1rem", padding: "0.75rem" }}
            >
              ✓ Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form-fields">
            {/* Name */}
            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Remember Email Checkbox */}
            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "-5px" }}
            >
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                style={{ width: "17px", height: "17px" }}
              />
              <label style={{ fontWeight: "500" }}>Remember my email</label>
            </div>

            {/* Message */}
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell us what's on your mind..."
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
