import React from 'react';
import { NavBar } from '../components/navigation/Navbar';

// import { Link } from 'react-router-dom';

// How to build a responsive hamburger menu in react??

export function Header() {
  return (
    <>
      <header>
        <div className="bg-color-top">
          <div className="mx-2">
            <div className="flex flex-row border border-red-100 w-11/12 m-auto space-x-2">
              <div className="flex-1 border">
                <img src="/src/assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg" />
              </div>
              <div className="flex-1 border">
                <img src="/src/assets/icons/location_on_FILL0_wght400_GRAD0_opsz48.svg" />
              </div>
              <div className="flex-1 border">
                <img src="/src/assets/icons/call_FILL0_wght400_GRAD0_opsz48.svg" />
              </div>
              <div className="flex-1 border float-right">
                <img src="/src/assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2">
          <div className="py-4 w-11/12 border m-auto">
            <h1 className="logo-title">
              <span className="greenCap">V</span>ision{' '}
              <span className="greenCap">S</span>tore
            </h1>
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
