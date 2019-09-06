import React from 'react'
import {render} from "react-dom";
import App from "./component/app";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import configureStore from './redux/configureStore';

const store = configureStore();


render(
    <Provider store={store}>
        <Router>
            <App></App>
        </Router>
    </Provider>,
    document.getElementById("app"))