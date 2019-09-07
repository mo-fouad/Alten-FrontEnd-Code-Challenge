import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers/index";
//import { createLogger } from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import thunk from "redux-thunk";

// Creating our Starter store
// const loggerMiddleware = createLogger();

function configureStore(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    // just return the createStore function with two args > combinedReducers & initialState

    return createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunk,
                //loggerMiddleware,
                reduxImmutableStateInvariant()
            )
        )
    );
}

export default configureStore;
