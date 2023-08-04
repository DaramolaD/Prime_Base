import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { navLinks } from '../../contants';
import { toggleMenu } from '../../assets';

import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const onChangeToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <a href="#">PB</a>
        </div>
        <ul className="nav_list nav_xl flex">
          {navLinks.map((links, index) =>
            <li key={links.id} className='nav_link'>
              <Link to={links.to}>{links.title}</Link>
            </li>
          )
          }
        </ul>
        <ul className="nav_others nav_xl flex">
          <li className='nav_link'>
            <button className='btn'>Contact</button>
          </li>
        </ul>

        <div className="toggle_menu" >
          <img src={toggleMenu} alt="toggle_menu" onClick={onChangeToggle}/>
        </div>

        {
          toggle && (
            <div className="nav_container">
              <ul className="nav_list flex">
                {navLinks.map((links, index) =>
                  <li key={links.id} className='nav_link'>
                    <Link to={links.to}>{links.title}</Link>
                  </li>
                )
                }
              </ul>
              <ul className="nav_others flex">
                <li className='nav_link'>
                  <button className='btn'>Contact</button>
                </li>
              </ul>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;