import React from 'react';

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit = event => {
    event.preventDefault();
    console.log('Form submitted!', this.state);
  };

  onInput = event => {
    const fieldType = event.currentTarget.name;
    const fieldValue = event.currentTarget.value;

    console.log(
      `Changed form field=${fieldType}.
Previous value=${this.state[fieldType]}, Next value=${fieldValue}`
    );
    this.setState({ [fieldType]: fieldValue });
  };

  render() {
    return (
      <section className="contact">
        <a name="Contact" />
        <h3 className="contact_title">Contact</h3>
        <div className="contact_content">
          <div className="contact_content_info">
            <div>
              <p>Phone number:</p>
              <p>+39095-773-23-26</p>
            </div>
            <div>
              <p>Email:</p>
              <p>linchakmv@gmail.com</p>
            </div>
            <div>
              <p>Skype:</p>
              <p>muxa_l</p>
            </div>
          </div>
          <form className="contact_content_form" onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onInput}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.onInput}
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="3"
              placeholder="Send a mesage"
              value={this.state.message}
              onChange={this.onInput}
            />
            <button type="submit" id="button-form">
              Send
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
