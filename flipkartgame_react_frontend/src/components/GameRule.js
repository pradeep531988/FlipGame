import React, { Component } from 'react';
import '../styles/component/header.scss';
import '../styles/component/gameRule.scss';
export class GameRule extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
        <div id="GameRule" className = "gameRule__rules" >* {this.props.ruleName} </div>
    )
  }
}

export default GameRule;