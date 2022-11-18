import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="IntroImg" className="intro-img" />
      </div>

      <div className="content">
        <p>HI, I'M ANISH CHAVAN</p>
        <h1>Frontend Developer</h1>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  );
};

export default HeroImg;
