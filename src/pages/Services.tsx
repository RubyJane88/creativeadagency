import React, { useState } from "react";

const Services = () => {
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
          <h1>Services that we can help you with</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            iusto molestias accusamus rem nobis est, et laborum harum doloremque
            nemo non, minima quos totam labore maxime iste alias ut esse?
          </p>
        </div>

        <div className={"services"}>
          <div className={"service"}>
            <div className={"icon"}>
              <img src={"images/001.png"} alt={""} />
            </div>
            <h2>Design</h2>
            orem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          </div>

          <div className={"service"}>
            <div className={"icon"}>
              <img src={"images/002.png"} alt={""} />
            </div>
            <h2>Development</h2>
            orem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          </div>
          <div className={"service"}>
            <div className={"icon"}>
              <img src={"images/003.png"} alt={""} />
            </div>
            <h2>SEO</h2>
            orem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          </div>
          <div className={"service"}>
            <div className={"icon"}>
              <img src={"images/004.png"} alt={""} />
            </div>
            <h2>Marketing</h2>
            orem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          </div>
          <div className={"service"}>
            <div className={"icon"}>
              <img src={"images/005.png"} alt={""} />
            </div>
            <h2>App Development</h2>
            orem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus o
          </div>
          <div className={"service"}>
            <div className={"icon"}>
              <img src={"images/006.png"} alt={""} />
            </div>
            <h2>Link Building</h2>
            orem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
