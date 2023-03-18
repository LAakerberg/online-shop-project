import React from 'react';
import { NavLinks } from './NavLinks';
import classes from './NavBar.module.css';

export function Navigation() {
  return (
    <nav className={classes.navigation}>
      <NavLinks />
    </nav>
  );
}
