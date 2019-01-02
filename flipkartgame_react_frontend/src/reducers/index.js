import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import { reducer as reduxFormReducer } from 'redux-form';

import {report} from './report';
import { game } from "./game";
import { auth } from "./auth";
import { register } from './register';
import { captcha } from './captcha';
export const rootReducer = combineReducers({
    auth,
    register,
    captcha,
    game,
    report,
    router: routerReducer,
    form: reduxFormReducer
});
