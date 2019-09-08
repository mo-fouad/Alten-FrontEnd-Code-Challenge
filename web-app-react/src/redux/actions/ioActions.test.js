import * as ioActions from "./ioActions";
import { ON_CONNECT } from "./actionsTypes";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

import { userData } from "../../../__mocks__/userData.mock.js";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const on_connect = ON_CONNECT;

describe("Async thunk Actions ", () => {
    afterEach(() => {
        fetchMock.restore();
    });

    describe("Load USerData From Connect Thunk", () => {
        it("creates FETCH_TODOS_SUCCESS when fetching todos has been done", () => {
            fetchMock.getOnce("/todos", {
                payload: userData,
                headers: { "content-type": "application/json" }
            });

            const expectedActions = [
                {
                    type: ON_CONNECT,
                    payload: userData
                }
            ];

            const store = mockStore({ userData: {} });
            store.dispatch(ioActions.isConnected(userData));
            // Macking sure that our Action return the same mock Data
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
