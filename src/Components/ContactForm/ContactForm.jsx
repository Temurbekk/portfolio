import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <form
        action="https://formspree.io/xwkvlvyr"
        method="POST"
        onSubmit={this.handleSubmit}
        style={{ width: "600px", textAlign: "left" }}
      ></form>
    );
  }
}
export default ContactForm;
