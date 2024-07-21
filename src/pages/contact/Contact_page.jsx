import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './concat.css';
import Navbar from '../../components/navbar/Navbar';
import Fotter from '../../components/fotter/Fotter';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('https://formspree.io/f/xovajqyq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: form.first_name.value,
        last_name: form.last_name.value,
        phone_number: form.phone_number.value,
        email: form.email.value,
        subject: form.subject.value,
        description: form.description.value
      })
    }).then(response => {
      if (response.ok) {
        toast.success('Your request has been submitted. We will reply promptly.');
        form.reset();
      } else {
        toast.error('Form submission error: ' + response.statusText);
      }
    }).catch(error => {
      toast.error('Form submission error: ' + error);
    });
  };

  return (
    <div>
      <Navbar />
      <h2 className="About_image">Contact Form</h2>
      <form className="contact_form" onSubmit={sendEmail}>
        <input className="inputs" type="text" id="first_name" name="first_name" placeholder="First Name" required />
        <br />
        <input className="inputs" type="text" id="last_name" name="last_name" placeholder="Last Name" required />
        <br />
        <input className="inputs" type="tel" id="phone_number" name="phone_number" placeholder="Phone Number" required />
        <br />
        <input className="inputs" type="email" id="email" name="email" placeholder="Email (Optional)" />
        <br />
        <input className="inputs" type="text" id="subject" name="subject" placeholder="Subject (Optional)" />
        <br />
        <textarea style={{ height: '100px' }} className="inputs" id="description" name="description" placeholder="Description (Optional)" />
        <br />
        <input className="submit_form_btn" type="submit" value="Submit" />
      </form>
      <Fotter />
      <ToastContainer />
    </div>
  );
};

export default Contact;
