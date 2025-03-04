import "./contact.css";

import { useRef } from "react";
import emailjs from "@emailjs/browser"; // for sending email with email js
import { useState } from "react";
import Map from "./Map";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();
  const [sucsess, setSucsess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSucsess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSucsess(false);
        }
      );
  };

  return (
    <div className="contact">
      <div className="top">
        <div className="cSection left">
          <form ref={form} onSubmit={sendEmail}>
            <h1 className="cTittle">Let's keep in touch</h1>
            <div className="formItem">
              <label>Name*</label>
              <input
                type="text"
                placeholder="Mohd Riaz"
                name="from_username"
                required
              />
            </div>
            <div className="formItem">
              <label>Email*</label>
              <input
                type="email"
                placeholder="riaz@gmail.com"
                name="from_email"
                required
              />
            </div>
            <div className="formItem">
              <label>Message</label>
              <textarea
                rows={10}
                placeholder="Write your message..."
                name="message"
                required
              ></textarea>
            </div>
            <button className="formButton">Send</button>
            {sucsess && <span>Your message has been send!</span>}
            {error && <span>Someting Went Wrong!</span>}
          </form>
        </div>
        <div className="cSection right">
          <Map />
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
};

export default Contact;
