import React from 'react'
import { useState } from 'react';
import './c.css'

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, lastName, phoneNumber, email, description });
    // Add your form submission logic here (e.g., API call, data processing)
  };

  return (
    <section className="Form_heading_hai">
      <h1>REQUEST CONSULTATION:</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit} className="form_heading">
        <input className='first'
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          required
        />
        <br />
        <input  className='second'
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <br />

        <input className='third'
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          required
        />
        <br />

        <input className='fourth'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (optional)"
        />
        <br />

        <textarea className='five'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows="4"
          required
        />
        <br />
        <button type="submit" className='submit_button_form six'>Submit</button>
      </form>
    </section>
  );
};

export default ContactForm