/* eslint-disable new-cap */
import React, { useRef, useState } from "react";

import { images } from "../../constants";
import { MotionWrap, AppWrap } from "../../wrapper";
import "./Footer.scss";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_04jb13a",
        "template_sxdp1sv",
        form.current,
        "RFKDIEeafraoI9-Ij"
      )
      .then(
        (result) => {
          setIsFormSubmitted(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:rohittcodes@gmail.com" className="p-text">
            rohittcodes@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 (9391638735)" className="p-text">
            +91 (9391638735)
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <div className="app__flex">
            <textarea
              type="text"
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button type="submit" className="p-text">
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
      <div className="copyright">
        <p className="p-text">© 2024 ROHITH SINGH - ALL RIGHTS RESERVED</p>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
