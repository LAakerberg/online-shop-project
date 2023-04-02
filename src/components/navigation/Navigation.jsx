import React from 'react';
import { NavLinks } from './NavLinks';
import classes from './Navbar.module.css';

export function Navigation() {
  return (
    <nav className={classes.navigation}>
      <NavLinks />
    </nav>
  );
}
