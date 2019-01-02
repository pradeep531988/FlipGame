import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import '../styles/screens/login.scss'
import { Field, reduxForm } from 'redux-form';
import { Header } from '../components/Header';
import { login } from '../actions/auth';
import { register } from '../actions/register';


const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } 

    if (!values.password) {
        errors.password = 'Required';
    } 

    return errors;
}

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error }
}) => (
    <div className="login__group">
        <input className="login__control" {...input} placeholder={placeholder} type={type} />
        {touched && (error && <span className="error">{error}</span>)}
    </div>
)

let LoginScreen = class LoginScreen extends Component {debugger;
    constructor(props) {
        super(props);

        this.state = {
            text: {
                button1: 'LOGIN',
                button2: 'REGISTER',
                placeholder: {
                    email: 'Login',
                    password: 'Password'
                }
            },
            loading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    onSubmit(values) {

        this.setState({
            loading: true
        });
        this.props.login(values);

        return false;
    }

    onRegister() {debugger;

        this.setState({
            loading: true
        });
        this.props.register();

        return false;
    }

    render() {
        const { handleSubmit, submitting } = this.props;

        return (

           
            <section className="login">
                <Header />
                <div className="login__container">
                    <h1 className="login__title">Login To FlipKart Game</h1>
                    <form className="login__form" onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field name="email" value="pradeep.inbox@rediffmail.com" type="email" component={renderField} placeholder={this.state.text.placeholder.email} />
                        <Field name="password" type="password" component={renderField} placeholder={this.state.text.placeholder.password} />

                        <input type="submit" className="login__submit" value={this.state.text.button1} disabled={submitting} />

                        <input type="button" className="login__register" onClick={this.onRegister} value={this.state.text.button2} disabled={submitting} />
                    </form>
                    <div className={(this.state.loading === true) ? "login__loading active" : "login__loading"}>Logging in...</div>
                </div>
            </section>
        );
    }
}

LoginScreen = reduxForm({ form: 'authForm', validate })(LoginScreen);
const mapDispatchToProps = dispatch => {debugger;
    return {
        login: (params) => {
            dispatch(login(params));
        },
        register: (params) => {
            dispatch(register(params));
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginScreen);
