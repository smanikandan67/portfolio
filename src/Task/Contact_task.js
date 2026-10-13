// import React from 'react'

// const Contact_task = () => {
//   return (
//     <div>Contact_task</div>
//   )
// }

// export default Contact_task

import React, { useState } from 'react';

const Contact_task = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <center>
      <h2>Contact Me</h2>

      {submitted ? (
        <div>
          <h3>Thank you, {formData.name}!</h3>
          <p>Your message has been received. I will reach out to you at {formData.email} soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Your Name"
            />
          </div>
          <br />

          <div>
            <label>Email: </label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="your.email@example.com"
            />
          </div>
          <br />

          <div>
            <label>Message: </label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              placeholder="Write your message here..."
            />
          </div>
          <br />

          <button type="submit">Send Message</button>
        </form>
      )}
      </center>
    </div>
  );
};

export default Contact_task;