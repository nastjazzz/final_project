import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter>
        <CookiesProvider>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </CookiesProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
