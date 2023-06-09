import React from "react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    setEmail("");
    alert("You have successfully subscribed to our newsletter!");
  };

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleShopClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>COMPANY</h3>

        <ul>
          <li onClick={handleHomeClick}>Home</li>
          <li onClick={() => navigate("/about-us")}>About Us</li>
          <li onClick={handleShopClick}>Shop</li>
          <li
            onClick={() => navigate("/contactus")}
            className={styles.contactUs}
          >
            Contact Us
          </li>
          <li onClick={() => navigate("/website-owner")}>Website Owner</li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Help</h3>
        <ul>
          <li onClick={() => navigate("/order-tracking")}>Order Tracking</li>
          <li onClick={() => navigate("/faq")}>FAQ</li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Follow Us</h3>
        <ul>
          <li>And get Free Shipping on all your orders!</li>
        </ul>
        <div className={styles.SocialIcons}>
          <FontAwesomeIcon icon={faFacebook} size="lg" />
          <a
            href="https://www.instagram.com/vintaggycom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </div>
      </div>

      <div className={styles.footerSection}>
        <span className={styles.footerTitle}>
          Subscribe{" "}
          <button className={styles.FooterBtn} onClick={handleSubmit}>
            Submit
          </button>{" "}
        </span>
        <ul>
          <li>
            Be the first to know about our new arrivals and exclusive offers.
          </li>
        </ul>
        <div className={styles.subscribeForm}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
