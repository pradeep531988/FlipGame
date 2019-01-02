import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { initCaptcha, handleUserInput, resetCaptcha, RESET_NEW_GAME } from '../actions/captcha';
import { generateGameId } from '../actions/game';
import { Header } from '../components/Header'
import GameRule from '../components/GameRule';
import  Captcha  from '../components/Captcha';
import '../styles/screens/homepage.scss'


let HomePage = class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            hideStartButton : false,
            hideCaptcha : true
        }
        
        this.getCaptcha = this.getCaptcha.bind(this);
        this.onUserInputSubmit = this.onUserInputSubmit.bind(this);
    }

    onUserInputSubmit(userInput) {debugger;
        //this.props.captcha.answer.toLowerCase() === userInput.toLowerCase();
        console.log(userInput);
        if (userInput === undefined || userInput === ''){
            userInput = 'NotAvailable';
        }
        //this.props.auth.email
        const email = this.props.auth.email;
        const gameId = this.props.game;
        this.props.handleUserInput(gameId, email, userInput, this.props.captcha);
    }

    getCaptcha() {
        this.user = this.props.auth;
        let level;
        if ( this.props.captcha == null || this.props.captcha.counter > 5 ){
            level = 3; //Start with default
        }
        this.props.generateGameId();
        this.props.initCaptcha(this.user, level);
        this.setState({hideStartButton: true});
        this.setState({hideCaptcha: false});
    }

    render() {
 
        const Rules = [
            "User will be shown captcha images looking into it user need to guess the text and enter in the text box and submit",
            "Timer will be running on each captcha selection and user needs guess and submit answer with the timer expiry ",
            "Maximum of 5 attempts is given to guess the correct answer",
          ].map((ruleName, i) => <GameRule key={i} ruleName={ruleName} /> );

        let componentToRender;
        if (this.state.hideStartButton && this.props.captcha !== null ) {
             if ( this.props.captcha.counter < 6 ) {
                componentToRender = <Captcha onSubmit={this.onUserInputSubmit} captcha={this.props.captcha} />
            } else {
                componentToRender = 
                    <div>
                <Link to="/reports">       
                     <button className='homepage__reports'> View Reports </button>
                </Link> 
                <button className="homepage__start" id="StartNewGame" onClick= {this.getCaptcha} >
                Start New Game</button>
                </div>
            }
        } else {
            componentToRender = <button className="homepage__start" id="StartGame" onClick= {this.getCaptcha} >
            Start Game</button>
        }
            return <section className="homepage">
                <Header/>           
                <div className = "homepage__container">
                    <div className = "homepage__title">
                         <h2 className = "homepage__text"> Lets Play the sample game</h2>
                    </div>
                        <div>
                        <h5 className="homepage__text"> Below are the Rules for playing this game: </h5>
                        {Rules}
                        </div>
                        
                        <div className="homepage__gamecontainer">
                         {componentToRender}
                    </div>
                </div>
            </section>;
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    captcha: state.captcha,
    game: state.game
});
const mapDispatchToProps = dispatch => {
    return {
        initCaptcha: (params, level) => {
            dispatch(initCaptcha(params, level));
        },
        generateGameId: () => {
            dispatch(generateGameId());
        },
        handleUserInput: (gameId, emailId, userInput, captcha) => {
            dispatch(handleUserInput(gameId, emailId, userInput, captcha));
        },
        resetCaptcha: () => {
            dispatch(resetCaptcha());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
