import {GAME} from '../actions/game';
const INITIAL_STATE = null;

export const game = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GAME:
            return action.gameId;
        default:
            return state;
    }
};