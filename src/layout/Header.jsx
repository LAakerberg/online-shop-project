import React from 'react';
import { NavBar } from '../components/navigation/NavBar';
import Cart from '../assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';


// import { Link } from 'react-router-dom';

// How to build a responsive hamburger menu in react??

export function Header() {
  return (
    <>
      <header>
        <div className="bg-color-top">
          <div className="mx-2">
            <div className="flex flex-row w-11/12 m-auto space-x-2">
              <div className="flex-1">
                <img src="/src/assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg" />
              </div>
              <div className="flex-1">
                <img src="/src/assets/icons/location_on_FILL0_wght400_GRAD0_opsz48.svg" />
              </div>
              <div className="flex-1">
                <img src="/src/assets/icons/call_FILL0_wght400_GRAD0_opsz48.svg" />
              </div>
              <div className="flex-1 float-right">
                <img src={Cart} alt="Shopping cart icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2">
          <div className="py-4 w-11/12 m-auto flex flex-col laptop:flex-row">
            <div className="flex-1 text-center laptop:flex">
              {' '}
              <h1 className="logo-title">
                <span className="greenCap">V</span>ision{' '}
                <span className="greenCap">S</span>tore
              </h1>
            </div>
            <div className="text-center justify-center flex-1">
              <div>
                <input placeholder="Search product" />
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white drop-shadow-lg">
          <div className="py-4 w-11/12 m-auto">
            <NavBar />
          </div>
        </div>
      </header>
    </>
  );
}
