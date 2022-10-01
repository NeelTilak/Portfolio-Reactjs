import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am i?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat in, nihil possimus quis officia tempora id quidem distinctio. Voluptates odio quisquam sed repellendus nobis dignissimos debitis sequi quidem ut recusandae!</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} classname="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} classname="img" alt="true" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AboutContent