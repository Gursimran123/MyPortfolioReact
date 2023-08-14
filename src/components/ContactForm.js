import "./ContactFormStyles.css";
import React from 'react'

const ContactForm = () => {
  return (
    <div className="form">
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name"/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="@gmail.com"/>
            <label htmlFor="">Subject</label>
            <input type="text" placeholder="Your Subject please"/>
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="6" placeholder="Your message here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm