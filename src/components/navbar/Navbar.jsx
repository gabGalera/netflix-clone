import './navbar.scss'
import React from "react";
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  console.log(window.screenY)
  console.log(isScrolled)
  return(
    <div className={ isScrolled ? 'navbar scrolled' : 'navbar' }>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className='icon' />
          <span>KID</span>
          <Notifications className='icon' />
          <img src="https://avatars.githubusercontent.com/u/108902929?v=4" alt="Profile" />
          <div className="profile">
            <ArrowDropDown className='icon' />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;