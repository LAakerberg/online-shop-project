import React from 'react';
import { NavLinks } from './NavLinks';
import classes from './NavBar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

export function MobileNavigation() {
  const [openNav, setOpenNav] = useState(false);

  const hamburgerOpen = (
    <AiOutlineMenu
      className={classes.Hamburger}
      size="30px"
      color="black"
      onClick={() => setOpenNav(!openNav)}
    />
  );

  const hamburgerClose = (
    <AiFillCloseCircle
      className={classes.Hamburger}
      size="30px"
      color="black"
      onClick={() => setOpenNav(!openNav)}
    />
  );

  const closeMobile = () => setOpenNav(false);

  return (
    <nav className={classes.mobilenavigation}>
      {openNav ? hamburgerClose : hamburgerOpen}
      {openNav && <NavLinks isMobile={true} closeMobile={closeMobile} />}
    </nav>
  );
}
