import { createStore } from "redux";
import reducers from "./reducers";
import initialIOStatus from "./initialState";
import { userData } from "../../__mocks__/userData.mock";

import * as ioActions from "./actions/ioActions";

it("Should handle creating courses", function() {
    // arrange
    const store = createStore(reducers, initialIOStatus);

    // act
    const action = ioActions.isConnected(userData);
    store.dispatch(action);

    // assert
    const createdUserData = store.getState().IOReducer.userData;
    expect(createdUserData).toEqual(userData);
});
