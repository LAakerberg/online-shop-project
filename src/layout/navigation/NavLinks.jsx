import React from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

export function NavLinks(props) {
  return (
    <>
      <div className={classes.NavBar}>
        <ul className="menu-items">
          <li onClick={() => props.isMobile && props.closeMobile()}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => props.isMobile && props.closeMobile()}>
            <Link to="/products">Products</Link>
          </li>
          <li onClick={() => props.isMobile && props.closeMobile()}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
