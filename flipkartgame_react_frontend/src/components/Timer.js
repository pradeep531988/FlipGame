import React, { Component } from 'react';

export class Timer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
     return (
         <div>
       <div className="col-md-12" style={{ fontSize: 50, marginLeft:100}}>Pending Duration: {this.props.minutes}:{this.props.seconds}
       </div></div>
        );
      }
}