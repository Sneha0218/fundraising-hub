import React from "react";

const ContactUs = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center text-dark">📞 Contact Us</h2>
      <p className="text-center">Have questions? Reach out to us, and we'll be happy to assist you!</p>
      <form className="mx-auto shadow-lg p-4 rounded" style={{ maxWidth: "500px", backgroundColor: "#f8f9fa" }}>
        <input type="text" className="form-control my-3" placeholder="Your Name" />
        <input type="email" className="form-control my-3" placeholder="Your Email" />
        <textarea className="form-control my-3" placeholder="Your Message" rows="4"></textarea>
        <button className="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
