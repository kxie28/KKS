import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="KKS__header section_padding" id="home">
        <div className="KKS__header-content">
          <h1 className="gradient__text">Let’s Build Something amazing with K&K Strategies</h1>
          <p>Assisting with problems is our mantra. The possibilities are endless.</p>

          <div className="KKS__header-content__input">
            <input type="email" placeholder="Your Email Address"/>
            <button type="button">Get Started</button>
          </div>

          <div className="KKS__header-content__people">
            <img src={people} alt="people"/>
            <p>1,600 people requested access in the last 24 hours</p>
          </div>
        </div>
        <div className="KKS__header-image">
          <img src={ai} alt="ai"/>
        </div>
    </div>
  )
}

export default Header