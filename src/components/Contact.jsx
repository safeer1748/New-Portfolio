import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const buttonAnimation = {
    hover: {
      scale: 1.15,
      transition: {
        duration: 0.35,
      },
    },
  };
  const formAnaimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    console.log(serviceId,templateId,publicKey)

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Error sending email:", error);
      });
  };
  return (
    <>
      <section
        id="contact"
        className="relative w-full flex flex-col justify-center items-center gap-y-16 px-6 md:px-20 overflow-hidden"
      >
        <h1 className="font-bold text-4xl mt-28">Contact</h1>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto w-full mb-28 "
          initial="hidden"
          whileInView="visible"
          variants={formAnaimation}
        >
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-400 bg-transparent p-2"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-400 bg-transparent p-2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <textarea
              rows={4}
              placeholder="Leave a message..."
              className="w-full border border-gray-400 bg-transparent p-2"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-black text-white p-2 font-medium"
            whileHover="hover"
            variants={buttonAnimation}
          >
            Send Email
          </motion.button>
        </motion.form>
      </section>
    </>
  );
};

export default Contact;
