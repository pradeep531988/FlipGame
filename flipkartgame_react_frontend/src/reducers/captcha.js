import { INIT_CAPTCHA, RESET_CAPTCHA } from "../actions/captcha";
const INITIAL_STATE = null;

export const captcha = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_CAPTCHA:
            return action.captcha;
        case RESET_CAPTCHA:
            return action.captcha;
        default:
            return state;
    }
};
