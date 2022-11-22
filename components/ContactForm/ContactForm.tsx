import React from 'react'

interface ContactFormProps {}

const ContactForm = ({}: ContactFormProps) => {
  return (
    <section className="home__contactForm">
      <div className="home__contactForm--title">
        <h3>QUESTION? WE ARE HERE TO HELP!</h3>
      </div>
      <div className="home__contactForm__formContainer">
        <form className="home__contactForm__formContainer__form">
          <div className="home__contactForm__formContainer__form__topInput">
            <div className="">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Enter your name" />
            </div>
            <div className="">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="home__contactForm__formContainer__form__downInputs">
            <label htmlFor="message">message</label>
            <textarea name="message" id="message" />
          </div>
          <div className="home__contactForm__formContainer__form__button">
            <button type="button">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
