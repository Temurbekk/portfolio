import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { register } = useForm();

  const clearHooks = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_92scncs",
        e.target,
        "user_OJ4iZTXAT6iyVoJBkAswo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    clearHooks();
  };

  return (
    <div>
      <Fade bottom cascade>
        <h1 className="title">CONTACT</h1>
      </Fade>
      <Fade bottom>
        <form onSubmit={sendEmail}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                name="name"
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address",
                  },
                })}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                name="message"
                className="textarea"
                placeholder="Textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </form>
      </Fade>
    </div>
  );
};

export default Contact;
