import React, { useState } from 'react'

interface ContactFormProps {}

const ContactForm = ({}: ContactFormProps) => {
  const [formData, setFormData] = useState<{
    name: string
    email: string
    message: string
  }>({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
              <input
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="home__contactForm__formContainer__form__downInputs">
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              id="message"
            />
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
