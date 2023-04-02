import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Products } from './pages/products';
import { Contact } from './pages/contact';
import { SpecProducts } from './pages/products/details';

export function RouteNotFound() {
  return <div>Page not found</div>;
}

export function Main() {
  return (
    <>
      <main>
        <div className="mx-2">
          <div className="w-11/12 m-auto py-4"></div>
          <div className="">
            <div className="w-11/12 m-auto">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/details/:id" element={<SpecProducts />} />
                <Route path="/contact" element={<Contact />} />
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
