import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Products } from './pages/products';
import { About } from './pages/about';
import { Contact } from './pages/contact';

export function RouteNotFound() {
  return <div>Page not found</div>;
}

export function Main() {
  return (
    <>
      <main>
        <div className="mx-2">
          <div className="w-11/12 m-auto">
            <h1 className="text-3xl">Main content</h1>
          </div>
          <div className="">
            <div className="w-11/12 m-auto">
              <Routes>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<RouteNotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
