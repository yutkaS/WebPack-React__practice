import React from 'react';
import ReactDom from 'react-dom';
import MainPage from "./pages/MainPage/mainPage.jsx";

console.log((process.env.NODE_ENV));
ReactDom.render(<MainPage/>, document.getElementById('root'));
