import { ON_CONNECT, ON_DISCONNECT } from "../actions/actionsTypes";
import { initialIOStatus } from "../initialState";

export default function IOReducer(state = initialIOStatus, action) {
    switch (action.type) {
        case ON_CONNECT:
            return Object.assign({}, state, {
                userData: action.payload
            });
        case ON_DISCONNECT:
            return Object.assign({}, state, {
                userData: {}
            });
        default:
            return state;
    }
}
