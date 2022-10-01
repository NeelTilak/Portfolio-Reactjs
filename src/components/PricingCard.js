import "./PricingCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h1>- Basic -</h1>
                <span className="bar"></span>
                <p className="btc"> $100 </p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- FrontEnd -</p>
                <p>- Responsive Design -</p>
                <Link to="./contact" className="btn">Purchase Now</Link>
            </div>

            <div className="card">
                <h1>- Premium -</h1>
                <span className="bar"></span>
                <p className="btc"> $200 </p>
                <p>- 5 Days -</p>
                <p>- 5 Pages -</p>
                <p>- FrontEnd -</p>
                <p>- Responsive Design -</p>
                <Link to="./contact" className="btn">Purchase Now</Link>
            </div>

            <div className="card">
                <h1>- Business -</h1>
                <span className="bar"></span>
                <p className="btc"> $100 </p>
                <p>- 8 Days -</p>
                <p>- 8 Pages -</p>
                <p>- FrontEnd -</p>
                <p>- Responsive Design -</p>
                <Link to="./contact" className="btn">Purchase Now</Link>
            </div>


        </div>
    </div>
  )
}

export default PricingCard