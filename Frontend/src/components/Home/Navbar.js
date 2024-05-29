import React from 'react'
import '../../Assets/css/Navbar.css'
import { Link } from 'react-router-dom';
import logo from "../../Assets/images/Home/logo.jpg";

export default function Navbar() {
  return (
    <>
      <header>
        <Link to="/"> <img src={logo} alt="SkillFlex Collaborative Space Logo" />
        </Link>

        <h1 style={{ color: 'rgb(241, 232, 232)' }}>SkillFlex Collaborate</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/internship_Details">Internship</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          {/* <div className="noAuth_options"> */}
            {/* <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li> */}
          {/* </div> */}
        </ul>
      </nav>
    </>
  )
}
