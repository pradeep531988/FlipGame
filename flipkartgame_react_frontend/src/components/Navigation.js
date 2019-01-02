import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import history from '../lib/history'
import {ConnectedRouter} from "react-router-redux";

import NotFoundScreen from '../screens/NotFoundScreen';
import LoginScreen from "../screens/LoginScreen";
import HomePageScreen from '../screens/HomePageScreen';
import { logout } from '../actions/auth';
import ReportsScreen from '../screens/ReportsScreen'

let activityTimeOut = null;

class Navigation extends Component {
    componentWillUpdate() {

    }
    logout() {
        let self = this;
        if (activityTimeOut) {
            clearTimeout(activityTimeOut);
        }

        activityTimeOut = setTimeout(function() {
            self.props.logout();
        }, 5 * 60 * 1000);
    }
    render() {
        this.logout();
        return (
        <Router history={history}>

                <Switch>
                    <Route exact path='/login' component={LoginScreen} />
                    <div className="wrapper">
                        <div className="wrapper__content">
                            <Route exact path='/' component={HomePageScreen} />
                            <Route exact path='/home' component={HomePageScreen} />
                            <Route path="/reports" component={ReportsScreen} />
                            <Route exact path='/not-found' component={NotFoundScreen} />
                            {/* <Redirect from='*' to='/not-found' /> */}
                        </div>
                    </div>

                </Switch>
        </Router>
        );
    }
}

const mapStateToProps = state => ({
    state: state
});
const mapDispatchToProps = dispatch => {
    return {
        logout: (params) => {
            dispatch(logout(params));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
