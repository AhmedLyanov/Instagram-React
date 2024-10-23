import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/header/header'
import Main from './component/main/main';
import Footer from "./component/footer/footer"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main  />
    <Footer />
  </React.StrictMode>
);


