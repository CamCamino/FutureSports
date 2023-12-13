import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const onScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {

        const faded = window.scrollY > 300;
        setIsFaded(faded);
      } else {

        setIsFaded(false);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className={`nav-link home-link ${isFaded ? 'fade' : ''}`}>Home</a>
        <div className={`nav-link login-link ${isFaded ? 'fade' : ''}`}>
          Login
          <div className="dropdown-menu">
            <a href="/profile">Profile</a>
            <a href="/settings">Settings</a>
            <a href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;