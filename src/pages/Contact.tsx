import React, { useState } from "react";

const Work = () => {
  const [isToggled, setToggled] = useState(false);

  return (
    <>
      <header>
        <div className="logo">Creative Agency </div>
        <div
          onClick={() => setToggled((prevState) => !prevState)}
          className={`${isToggled ? "toggle-active" : "toggle-inactive"}`}
        />
        <div
          className={`${
            isToggled ? "navigation-active" : "navigation-inactive"
          }`}
        >
          <ul>
            <li>
              <a href={"Home"}>Home</a>
            </li>
            <li>
              <a href={"Services"}>Services</a>
            </li>
            <li>
              <a href={"Work"}>Work</a>
            </li>
            <li>
              <a href={"Contact"}>Contact</a>
            </li>
          </ul>

          <div className={"social-bar"}>
            <ul>
              <li>
                <a href={"https://facebook.com"}>
                  <img src={"images/facebook.png"} alt={"Facebook"} />
                </a>
              </li>
              <li>
                <a href={"https://twitter.com"}>
                  <img src={"images/twitter.png"} alt={"Twitter"} />
                </a>
              </li>
              <li>
                <a href={"https://instagram.com"}>
                  <img src={"images/instagram.png"} alt={"Instragram"} />
                </a>
              </li>
            </ul>
            <a href={"mailto:you@email.com"} className="email-icon">
              <img src={"images/email.png"} alt={"email"} />
            </a>
          </div>
        </div>
      </header>

      <section>
        <div className={"title"}>
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            iusto molestias accusamus rem nobis est, et laborum harum doloremque
            nemo non, minima quos totam labore maxime iste alias ut esse?
          </p>
        </div>
        <div className="contact">
          <div className="contact-form">
            <form>
              <div className="row">
                <div className="input50">
                  <input type={"text"} placeholder={"First Name"} />
                </div>
                <div className="input50">
                  <input type={"text"} placeholder={"Last Name"} />
                </div>
              </div>
              <div className="row">
                <div className="input50">
                  <input type={"text"} placeholder={"Email"} />
                </div>
                <div className="input50">
                  <input type={"text"} placeholder={"Subject"} />
                </div>
              </div>
              <div className="row">
                <div className="input100">
                  <textarea placeholder={"message"}> </textarea>
                </div>
              </div>

              <div className="row">
                <div className="input100">
                  <input type={"submit"} value={"Send"} />
                </div>
              </div>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-box">
              <img
                src={"images/address.png"}
                className={"contact-icon"}
                alt={""}
              />
              <div className="details">
                <h4>Address</h4>
                <p>100 Sandakervein, Oslo, NO</p>
              </div>
            </div>
            <div className="info-box">
              <img
                src={"images/email.png"}
                className={"contact-icon"}
                alt={""}
              />
              <div className="details">
                <h4>Email</h4>
                <a href={"mailto:anyone@example.com"}>anyone@example.com </a>
                <a href={"mailto:someone@example.com"}>someone@example.com </a>
              </div>
            </div>
            <div className="info-box">
              <img
                src={"images/call.png"}
                className={"contact-icon"}
                alt={""}
              />
              <div className="details">
                <h4>Call Us</h4>
                <a href={"tel:+4718999123"}>+4718999123 </a>
                <a href={"tel:+4718999123"}>+4718999128 </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
