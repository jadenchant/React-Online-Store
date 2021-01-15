import React from 'react';
import '../css/navbar.css';

const Navbar=(props) => {

  let x=['navbar'];
  if(props.scrolled){
    x.push('navbar-scrolled');
  }
  return (
    <header className={x.join(" ")}>
        <div className="logo">
          {/* <img src={Logo} alt="Logo" title="Logo" /> */}
        </div>

        <nav className="navigation">
            <ul>
              <li><a href="#post1">Home</a></li>
              <li><a href="#post2">Home</a></li>
              <li><a href="#post3">Home</a></li>
              <li><a href="#post4">Home</a></li>
            </ul>
        </nav>

    </header>
  )
};

export default Navbar;