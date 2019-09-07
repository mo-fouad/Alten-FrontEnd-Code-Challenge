import ActionTypes from "../actions/actionsTypes";
import { initialIOStatus } from "../initialState";

export default function IOReducer(state = initialIOStatus, action) {
    switch (action.type) {
        case ActionTypes.ON_CONNECT:
            return Object.assign({}, state, {
                userData: action.payload
            });
        case ActionTypes.ON_DISCONNECT:
            return Object.assign({}, state, {
                userData: {}
            });
        default:
            return state;
    }
}
