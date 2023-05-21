import React from "react";
import "./Form.css";

export const Contact = () => {
  return (
    <section id="contact" className="contact bg-gray-100">
      <div className="content">
        <h2>Contact Us</h2>
      </div>

      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                4671 Sugar Camp Road, <br />
                Istanbul, Turkey, 
                400433
              </p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              {" "}
              <i class="fa-regular fa-envelope"></i>
            </div>
            <div className="text">
              <h3>email</h3>
              <p>kmusa@gmail.com</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div className="text">
              <h3>phone</h3>
              <p>+122400433</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Name</span>
            </div>
            <div className="inputBox">
              <input type="email" name="" required="required" />
              <span>Email</span>
            </div>

            <div className="inputBox">
              <input type="email" name="" required="required" />
              <span>Telephone Number</span>
            </div>

            <div className="inputBox">
              <textarea required="required">

              </textarea>
              <span>Type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
