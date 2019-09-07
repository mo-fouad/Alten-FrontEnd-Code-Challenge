import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import App from "./component/app";
import { Provider } from "react-redux";

import configureStore from "./redux/configureStore";

const store = configureStore();

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("app")
);
