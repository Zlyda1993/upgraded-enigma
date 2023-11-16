import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
  };

  return (
    <>
      <h1>Contact Me</h1>

      <form id="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
