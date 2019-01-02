import {REPORT} from '../actions/report';

const INITIAL_STATE = null;

export const report = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REPORT:
            return action.reports;
        default:
            return state;
    }
};