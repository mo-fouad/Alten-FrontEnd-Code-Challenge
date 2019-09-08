import { ON_CONNECT } from "./actionsTypes";
import io from "socket.io-client";

const socket = io.connect(process.env.API_URL || "http://localhost:4001/");

export const isConnected = data => {
    return {
        type: ON_CONNECT,
        payload: data
    };
};

export const getUsersDataIo = () => {
    return dispatch => {
        socket.on("dataUpdated", data => {
            dispatch(isConnected(data));
        });
    };
};
