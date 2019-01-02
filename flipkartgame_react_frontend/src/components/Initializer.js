import React, { Component } from 'react';
import { connect } from 'react-redux';

import { validateUser } from '../actions/auth';

import Navigation from './Navigation';
import LoginScreen from '../screens/LoginScreen';
import Registration from '../screens/RegistrationScreen';

class Initializer extends Component {debugger;
    componentWillMount() {
      //  this.props.validateUser();
    }

    render() {debugger;
       /* if (this.props.auth == 'loading') {
            return (
                <div className="main-loading">
                    <h1>Loading</h1>
                </div>
            );
        } else*/
         if (this.props.auth) {
            return <Navigation />;
        } else if (this.props.register){
            return <Registration status={ this.props.register} />
        } else {
            return <LoginScreen />;
        }
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    register: state.register
});
const mapDispatchToProps = dispatch => {
    return {
        validateUser: (params) => {
            dispatch(validateUser(params));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Initializer);
