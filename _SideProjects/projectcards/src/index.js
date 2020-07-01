import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.jsx';

import './index.css';

const root = document.querySelector('#root')

ReactDOM.render(

    <Router>
        <App />
    </Router>

        , 
        root
);


