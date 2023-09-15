import React from 'react';
import { Navbar } from './navigation/Navbar';
import Cart from '../assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';
import Profile from '../assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg';
import Location from '../assets/icons/location_on_FILL0_wght400_GRAD0_opsz48.svg';
import Call from '../assets/icons/call_FILL0_wght400_GRAD0_opsz48.svg';
import Search from '../assets/icons/search_FILL0_wght400_GRAD0_opsz48.svg';

// import { Link } from 'react-router-dom';

// How to build a responsive hamburger menu in react??

export function Header() {
  return (
    <>
      <header>
        <div className="bg-color-top">
          <div className="mx-2">
            <div className="flex flex-row w-11/12 m-auto space-x-2">
              <div className="flex">
                <img src={Profile} alt="Shopping cart icon" className="icons" />
              </div>
              <div className="flex">
                <img
                  src={Location}
                  alt="Shopping cart icon"
                  className="icons"
                />
              </div>
              <div className="flex">
                <img src={Call} alt="Shopping cart icon" className="icons" />
              </div>
              <div className="flex flex-1 justify-end">
                <img src={Cart} alt="Shopping cart icon" className="icons" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2">
          <div className="py-4 w-11/12 m-auto flex flex-col laptop:flex-row">
            <div className="text-center laptop:flex">
              {' '}
              <h1 className="logo-title">
                <span className="greenCap">V</span>ision{' '}
                <span className="greenCap">S</span>tore
              </h1>
            </div>
            <div className="self-center laptop:flex laptop:flex-1">
              <div className="flex flex-1 m-auto justify-center">
                <input
                  id="search_item"
                  className="m-0 p-1 w-60 h-10"
                  placeholder="Search product"
                />
                <button className="search_button w-10 h-10 m-0">
                  <img src={Search} alt="Shopping cart icon" className="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white drop-shadow-lg">
          <div className="py-4 w-11/12 m-auto">
            <Navbar />
          </div>
        </div>
      </header>
    </>
  );
}
