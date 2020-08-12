import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

ReactDOM.render(
    // <BrowserRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
    // </BrowserRouter>,
    document.getElementById('root')
)
