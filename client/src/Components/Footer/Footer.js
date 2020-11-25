import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="title">
        <h1>Contact ME</h1>
      </div>
      <div class="container">
        {/*Form container */}
        <div className="form_container">
          <form>
            <div className="form_input">
              <label>
                Name:
                <input size="40"></input>
              </label>
            </div>
            <div className="form_input">
              <label>
                Email:
                <input size="40"></input>
              </label>
            </div>
            <div className="form_input">
              <label>
                Subject:
                <input size="40"></input>
              </label>
            </div>
            <div className="form_input">
              <label>
                Message:
                <input size="40"></input>
              </label>
            </div>
            <div className="submit">
              <input type="submit" value="Submit"></input>
            </div>
          </form>
        </div>
        {/*Description Container */}
        <div className="descrip">
          <p>Use this contact form for any ideas ,question and advice.</p>
          <p>I will get back to you shortly.</p>
          <br></br>
          <p>Thanks for visiting my portfolio. See you soon!</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
