import React, { Component } from 'react';
import '../styles/component/header.scss';
import '../styles/component/captcha.scss';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Countdown from 'react-countdown-now';

const validate = values => {
    const errors = {};

    if (!values.userInput) {
        errors.userInput = '*Required';
    } 

    return errors;
}

const renderField = ({
    input,
    placeholder,
    type,
    meta: { touched, error }
  }) => (
      <div className="captcha__group">
          <input className="captcha__control" {...input} placeholder={placeholder} type={type} />
          {touched && (error && <span className="error">{error}</span>)}
      </div>
  )

let Captcha = class Captcha extends Component {

    constructor(props){
        super(props);
        this.state = {
            placeholder: {
                 userInput: 'Input Captcha Text Here',
            }, buttonLabel: 'SUBMIT',
            seconds: 10000,   // responsible for the seconds 
            date: null,
            autoStart: true,
            userInput: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.userInput = '';
    }

   
    componentDidUpdate(prevProps, prevState)
    {
        /*
        if(prevProps && prevProps.captcha !== this.props.captcha){
            this.setState({date: Date.now()})
            this.setState({autoStart: true})
        }*/
    }

    componentWillMount(){
        this.setState({date: Date.now()})
    }

    componentWillUnmount(){
        this.setState({date: null})
    }
    
    onSubmit=() => {debugger;
        //TODO TEMP FIX tO reset value;
        this.props.onSubmit(this.state.userInput);
        document.getElementsByName('userInput')[0].value = '';
        this.setState({date: Date.now()}); 
        this.setState({userInput: ''});       
    }


  render() {

    let imgPath = '';
      if (this.props.captcha != undefined) {
        imgPath = '/static/images/'+this.props.captcha.name+'.png';
      }

      let submitButton;
        submitButton =  (
            <div className="captcha__submit">    
               <input type="button" className="captcha__text" 
               onClick={this.onSubmit} value={this.state.buttonLabel} />
            </div>
        );


        const renderer = ({ hours, minutes, seconds, completed }) => {
          /*  if (completed) {
                return <span>Next Question</span>;
            } else { */
              return <span style={{color:'white'}}> Duration Pending- {hours}:{minutes}:{seconds}</span>;
           /* } */
          };
 
          
        return (
        <div>
        <Countdown date={this.state.date + this.state.seconds} autoStart={this.state.autoStart} renderer={renderer} onComplete={this.onSubmit}/>
        <form className="captcha">
            <img src={imgPath} id="captchaImage" className="captcha__image" value={this.state.userInput}/>
            <input name="userInput" type="text" tabindex="1" autofocus value={this.state.userInput} 
            onChange={ e => this.setState({ userInput : e.target.value })}
            id="userInput" type="text" className="captcha__text"
             component={renderField} />
            {submitButton}
        </form>
        </div>
    )
  }
}

Captcha = reduxForm({ form: 'captchaForm', validate })(Captcha);
const mapStateToProps = state => ({
    auth: state.auth,
    captcha: state.captcha,
    game: state.game
});


export default connect(mapStateToProps, null)(Captcha);