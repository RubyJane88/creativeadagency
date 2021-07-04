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
          <h1>Some of our finest work</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            iusto molestias accusamus rem nobis est, et laborum harum doloremque
            nemo non, minima quos totam labore maxime iste alias ut esse?
          </p>
        </div>

        <div className="portfolio">
          <div className="item">
            <img src={"images/portfolio-item1.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item2.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item3.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item4.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item5.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item6.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item7.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item8.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item9.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item10.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>
          <div className="item">
            <img src={"images/portfolio-item11.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item12.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item13.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item14.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item15.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>

          <div className="item">
            <img src={"images/portfolio-item16.jpg"} alt={"portfolio"} />
            <div className="action">
              <a href={"http//:"}>Launch </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
