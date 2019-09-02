import ActionTypes from './actionsTypes';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4001/');

export const isConnected = (data) => {
    return {
        type: ActionTypes.ON_CONNECT,
        payload: data
    };
};

export const getUsersDataIo = () => {
    return dispatch => {

        socket.on('dataUpdated', (data) => { dispatch(isConnected(data)) })
    };
};
