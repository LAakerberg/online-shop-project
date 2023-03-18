import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>
);
