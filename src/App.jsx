import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Products } from './pages/products';
import { Contact } from './pages/contact';
import { SpecProducts } from './pages/products/details';
import { Cart } from './pages/cart';

export function RouteNotFound() {
  return <div>Page not found</div>;
}

export function Main() {
  return (
    <main className="p-4">
      <div className="p-2 w-11/12 m-auto">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/details/:id" element={<SpecProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </div>
    </main>
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
