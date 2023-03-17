import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export function Header() {
  return (
    <>
      <header>
        <div className="bg-color-top">
          <div className="mx-2">
            <div className="flex flex-row border border-red-100 w-11/12 m-auto space-x-2">
              <div className="flex-none border">
                <img src="/src/assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg" />
              </div>
              <div className="flex-none border">
                <img src="/src/assets/icons/location_on_FILL0_wght400_GRAD0_opsz48.svg" />
              </div>
              <div className="flex-none border">
                <img src="/src/assets/icons/call_FILL0_wght400_GRAD0_opsz48.svg" />
              </div>
              <div className="flex-1 border float-right">
                <img src="/src/assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 w-11/12 text-center">
          <div>
            <h1>Vision Store</h1>
          </div>
        </div>
        <div>
          <Nav />
        </div>
      </header>
    </>
  );
}
