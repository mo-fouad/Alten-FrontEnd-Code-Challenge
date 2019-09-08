import ioReducer from "./ioReducer";
import * as actions from "../actions/ioActions";

import { userData } from "../../../__mocks__/userData.mock";

it("should passing the Data ON  CONNECT ", () => {
    // arrange
    const action = actions.getUsersDataIo();

    // act
    const newState = ioReducer(userData, action);
    // Testing New State
    expect(newState.users.length).toEqual(2); // 2 users
    expect(newState.vehicles.length).toEqual(5); // 5 cars
    expect(newState.users[0].user_name).toEqual("Kalles Grustransporter AB");
    expect(newState.vehicles[1].reg_number).toEqual("DEF456");
});
