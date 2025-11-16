import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: new Date(),
      });

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      {success && (
        <div className="bg-green-500 text-white p-3 rounded mb-4">
          Your message has been sent!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border rounded h-32"
        ></textarea>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
