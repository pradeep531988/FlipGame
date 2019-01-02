import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import '../styles/screens/registration.scss'
import { Field, reduxForm } from 'redux-form';
import { Header } from '../components/Header';
import { registerUser } from '../actions/register';

const validate = values => {
    const errors = {};

    if (!values.userName) {
        errors.userName = 'Required';
    } 

    if (!values.password) {
        errors.password = 'Required';
    }  else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters or more';
    }


    if (!values.email) {
        errors.email = 'Required';
    }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.reEnteredPassword) {
        errors.reEnteredPassword = 'Required';
    } else if (values.reEnteredPassword.length < 6) {
        errors.reEnteredPassword = 'Must be 6 characters or more';
    }

    if (values.password !== values.reEnteredPassword) {
        errors.reEnteredPassword = 'Password Does not match';
    } 

    return errors;
}

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error }
}) => (
    <div className="registration__group">
        <input className="registration__control" {...input} placeholder={placeholder} type={type} />
        {touched && (error && <span className="error">{error}</span>)}
    </div>
)

let RegistrationScreen = class RegistrationScreen extends Component {debugger;
    constructor(props) {
        super(props);

        this.state = {
            text: {
                button: 'REGISTER',
                placeholder: {
                    userName: 'Name',
                    email:'Email',
                    password: 'Password',
                    reEnteredPassword: 'Confirm your password'
                }
            },
            loading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {

        this.setState({
            loading: true
        });
        this.props.registerUser(values);

        return false;
    }

    render() {
        const { handleSubmit, submitting } = this.props;

        return (

           
            <section className="registration">
            
                <Header />
                <div className="registration__container">
                    <h1 className="registration__title">Login To FlipKart Game</h1>
                    <form className="registration__form" onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field name="userName" type="text" component={renderField} placeholder={this.state.text.placeholder.userName} />
                        <Field name="email" type="email" component={renderField} placeholder={this.state.text.placeholder.email} />
                        <Field name="password" type="password" component={renderField} placeholder={this.state.text.placeholder.password} />
                        <Field name="reEnteredPassword" type="password" component={renderField} placeholder={this.state.text.placeholder.reEnteredPassword} />

                        <input type="submit" className="registration__submit" value={this.state.text.button} disabled={submitting} />
                    </form>
                    <div className={(this.props.status === 403) ? "registration__loading active" : "registration__loading"}>
                    <a href='/login' className="registration__loading active">Email Id already exists please try logging in</a></div>
                </div>
            </section>
        );
    }
}

RegistrationScreen = reduxForm({ form: 'regnForm', validate })(RegistrationScreen);
const mapDispatchToProps = dispatch => {debugger;
    return {
        registerUser: (params) => {
            dispatch(registerUser(params));
        }
    }
}

export default connect(null, mapDispatchToProps)(RegistrationScreen);
