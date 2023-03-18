import React from 'react';
// import { Link } from 'react-router-dom';

console.log('Intentional Formatting Error');

export function Nav() {
  /*   const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen)
  } */

  /*   const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menuItems = document.querySelector('.menu-items');

  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    menuItems.classList.toggle('active');
  }); */

  return (
    <>
      <div className="">
        <div className="bg-white h-12 w-11/12 m-auto drop-shadow-lg">
          <nav className="h-auto">
            <div className="hamburger-menu">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className="menu-items">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
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
        <div>
          <Nav />
        </div>
      </header>
    </>
  );
}
