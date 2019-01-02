import { LOGIN, LOGOUT, VALIDATE_USER, LOGIN_SUCCESS } from "../actions/auth";

const INITIAL_STATE = null;

export const auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return action.user;
        case LOGIN_SUCCESS:
            return action.user;
        case LOGOUT:
            return null;
        case VALIDATE_USER:
            if (action.user === null) {
                return null;
            } else {
                return action.user;
            }
        default:
            return state;
    }
};
