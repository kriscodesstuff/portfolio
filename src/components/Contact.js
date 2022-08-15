import React from "react";
import ContactModule from "./css/Contact.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className={ContactModule.container} id="contact">
      <main className={ContactModule.content}>
        <h1>contact</h1>
        <div className={ContactModule.icons}>
          <a href="https://github.com/KristinWilliams">
            <div className={ContactModule["github-icon"]}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.475 14.1363C15.5775 14.1363 14.85 15.145 14.85 16.385C14.85 17.6275 15.5775 18.6363 16.475 18.6363C17.3725 18.6363 18.1 17.6275 18.1 16.385C18.0987 15.145 17.3725 14.1363 16.475 14.1363ZM22.1325 8.2825C22.3188 7.82625 22.3263 5.23375 21.3387 2.75C21.3387 2.75 19.075 2.99875 15.65 5.35C14.9313 5.15 13.715 5.0525 12.5013 5.0525C11.285 5.0525 10.07 5.15 9.35125 5.35C5.925 2.99875 3.66125 2.75 3.66125 2.75C2.675 5.23375 2.685 7.82625 2.86875 8.2825C1.70875 9.5425 1 11.0562 1 13.1213C1 22.1038 8.45375 22.2475 10.3337 22.2475L12.5013 22.25L14.6662 22.2475C16.5487 22.2475 24 22.1038 24 13.1213C24 11.0562 23.2925 9.5425 22.1325 8.2825ZM12.535 21.1438H12.465C7.75125 21.1438 4.07875 20.5825 4.07875 16C4.07875 14.9013 4.46625 13.8837 5.3875 13.0387C6.92125 11.63 9.51875 12.375 12.465 12.375H12.535C15.4812 12.375 18.08 11.63 19.615 13.0387C20.5338 13.8837 20.9212 14.9013 20.9212 16C20.9212 20.5825 17.25 21.1438 12.535 21.1438ZM8.52625 14.1363C7.62875 14.1363 6.90125 15.145 6.90125 16.385C6.90125 17.6275 7.62875 18.6363 8.52625 18.6363C9.425 18.6363 10.1525 17.6275 10.1525 16.385C10.1525 15.145 9.425 14.1363 8.52625 14.1363Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kristin-williams-0abb83205/">
            <div className={ContactModule["linkedin-icon"]}>
              <img src="img/linkedin-icon.svg" />
            </div>
          </a>
        </div>
        <form name="contact" method="POST">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
          <input type="textarea" placeholder="Comment"></input>
          <button type="submit">submit</button>
        </form>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
