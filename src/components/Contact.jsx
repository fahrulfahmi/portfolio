import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import bgImage from "../assets/bg.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_0hhrbcy",
        "template_ic6qbbr",
        formRef.current, 
        "riDzvNQGDo5ga1Mch"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setStatus("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

      <div className="relative z-10 w-full max-w-xl bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#00BFA6] mb-10 drop-shadow-sm">
          Let's Connect
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-white">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#00BFA6] text-white font-semibold text-lg hover:bg-teal-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </section>
  );
};

export default ContactForm;
