
import ActionTypes from './actionsTypes';
import axios from 'axios';


export const getDataStart = () => {
    return {
        type: ActionTypes.LOAD_DATA_START,
    };
};

export const getDataError = (error) => {
    return {
        type: ActionTypes.LOAD_DATA_ERROR,
        payload: error,
    };
};

export const getDataSuccess = (response) => {
    return {
        type: ActionTypes.LOAD_DATA_SUCCESS,
        payload: response,
    };
};



export const getUsersData = () => {
    return dispatch => {
        dispatch(getDataStart());
        axios.get(`http://localhost:4001/`).then(res => {
            dispatch(getDataSuccess(res.data));
        }).catch(err => {
            dispatch(getDataError(err));
        });
    };
};

