import "./HeroImgStyles.css";


import React from 'react'

import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
         <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/> 
         </div>
         <div className="content">
            <p>HI, I'M FREELANCER</p>
            <h1>Web Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contats</Link>
            </div>
         </div>
    </div>
   
  )
}

export default Heroimg