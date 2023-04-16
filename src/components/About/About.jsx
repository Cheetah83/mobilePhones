import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className="about-container py-5 my-5">
            <div className="row">
                <div className="about-image">
                  <img src="/images/about.png" alt='about-us'/>
                </div>
                <div className="about-text">
                    <h1 className="text-primary fw-bold mb-4">About Us</h1>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum illo quis, accusamus earum incidunt distinctio sed. 
                        Dicta, beatae! Odio amet id tempora iusto earum perspiciatis
                        perferendis fugit porro beatae fuga.
                    </p>
                    <Link to="/contact" className="btn btn-outline-primary px-3">Contact Us</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About