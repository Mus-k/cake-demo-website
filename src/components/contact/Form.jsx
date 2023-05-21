import React from "react";
import "./Form.css";
export const Form = () => {
  return (
    <section>
       <div className="title">
        <h2>Get in Touch</h2>
      </div>

      <div className="box">
        <div className="contact form">
          <h3>Send a Message</h3>
          <form>
          <div className="formBox">
            <div className="row50">
              <div className="inputBox">
                {/* <span>First Name</span> */}
                <input type="text" placeholder="Name"/>
              </div>

              <div className="inputBox">
                {/* <span>First Name</span> */}
                <input type="email" placeholder="email"/>
              </div>
            </div>

            <div className="row50">
              <div className="inputBox">
                {/* <span>First Name</span> */}
                <input type="tel" placeholder="number"/>
              </div>

              <div className="inputBox">
                {/* <span>First Name</span> */}
                <input type="email" placeholder="email"/>
              </div>
            </div>


            </div>
          </form>
        </div>
        <div className="contact info"></div>
        <div className="contact map"></div>
      </div>
    </section>
  );
};
