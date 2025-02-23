import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success('Thankyou! Your Message has been sent.');
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      setStatus("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full bg-gradient-to-tr from-teal-400 to-teal-400 p-1 rounded-3xl transition-shadow hover:shadow-[0_0_30px_1px_rgba(100,255,218,0.3)]">
        <Toaster position="top-center" />
        <div className="bg-gray-900 rounded-3xl transition-transform hover:scale-95">
          <form
            className="flex flex-col items-center gap-4 px-8 py-4"
            onSubmit={handleSubmit}
          >
            <p className="text-teal-400 text-lg font-semibold mt-8">
              Contact our Bank
            </p>
            <div className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gray-800 shadow-inner">
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500"
                type="text"
              />
            </div>
            <div className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gray-800 shadow-inner">
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500"
                type="email"
              />
            </div>
            <div className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gray-800 shadow-inner">
              <input
                required
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500"
                type="text"
              />
            </div>
            <div className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gray-800 shadow-inner">
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                cols={30}
                rows={3}
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer mb-8 px-6 py-3 rounded-lg border border-teal-400 text-teal-400 font-bold bg-transparent transition-all duration-300 hover:bg-teal-400 hover:text-black shadow-inner"
            >
              Send Message
            </button>
            {status && <p className="text-white">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
