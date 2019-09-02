import React from 'react'
import {render} from "react-dom";
import App from "./component/app";
import {Provider} from "react-redux";

import configureStore from './redux/configureStore';

const store = configureStore();


render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("app"))