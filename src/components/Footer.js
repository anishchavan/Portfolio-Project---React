import "./FooterStyles.css";

import React from "react";

import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "32px" }} />
            <div>
              <p>0209, Sevalal Society</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "32px" }}
              />
              +918600236197
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "32px" }}
              />
              anishchavan29@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            This is Anish chavan, Frontend Developer who loves discussing new
            projects and design challenges.
          </p>
          <div className="social">
            <FaFacebook
              size={25}
              style={{ color: "white", marginRight: "32px" }}
            />
            <FaTwitter
              size={25}
              style={{ color: "white", marginRight: "32px" }}
            />
            <FaLinkedin
              size={25}
              style={{ color: "white", marginRight: "32px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
