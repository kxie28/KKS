import React from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="KKS__navbar">
      <div className="KKS__navbar-links">
        <div classNAme="KKS__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar