import React, { useState } from "react";

const Home = () => {
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

      <section className={"home"}>
        <img src={"images/home-img.jpg"} className={"home-img"} alt={""} />
        <div className={"home-content"}>
          <h1>
            We help to achieve <br /> your goals.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque
            nam saepe vero voluptatem vel fuga a eaque earum alias ipsam
            aspernatur culpa maxime laboriosam, impedit quae officiis
            consectetur
          </p>
          <a href={"contact.html"} className={"btn"}>
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
