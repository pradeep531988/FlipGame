import { REGISTER, REGISTER_USER } from "../actions/register";

const INITIAL_STATE = null;

export const register = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER:
            return 'registration';
        case REGISTER_USER:
            if ( action.responseStatus === 202) {
                return null;
            }
            return action.responseStatus;
        default:
            return state;
    }
};
