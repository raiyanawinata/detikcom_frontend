import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeaderNav from './components/header/HeaderNav';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes/AppRoute';
import Home from './components/home/Home';
import About from './components/about/About';
import Mechanism from './components/mekanisme/Mechanism';
import Hero from './components/mekanisme/Hero';
import Logo from './components/logo/Logo';
import Update from './components/update/Update';
import FooterNav from './components/footer/FooterNav';
import { ThemeProvider } from "@material-tailwind/react";
const { PUBLIC_URL } = process.env;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}>
      {/* <AppRoute/> */}
      {/* <StatisticsCard/> */}
      {/* <App/> */}
      <HeaderNav/>
      <Home/>
      <About/>
      {/* <Mechanism/> */}
      <Hero/>
      <Logo/>
      <Update/>
      <FooterNav/>
     
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
