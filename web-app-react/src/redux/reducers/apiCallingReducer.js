// return [...state, { ...action.course }];

import ActionTypes from '../actions/actionsTypes'
import {initialState} from '../initialState';

export default function APIReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOAD_DATA_START:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case ActionTypes.LOAD_DATA_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                errorDetails: 'Error',
            });
        case ActionTypes.LOAD_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                userData: action,
            });
        default:
            return state;
    }
}
