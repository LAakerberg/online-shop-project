import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Footer } from './App';
import { Header } from './layout/Header';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>
);
