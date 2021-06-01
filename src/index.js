import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from './App';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));