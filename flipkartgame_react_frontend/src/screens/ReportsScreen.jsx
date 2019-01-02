import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header'
import { generateReport } from '../actions/report'
import { reduxForm } from 'redux-form';
import jquery from 'jquery';
import '../styles/screens/reports.scss'
import { Carousel, Modal,Button, Panel,Image,Row,Col } from 'react-bootstrap';
window.$ = window.jQuery = jquery;

let ReportsScreen =  class ReportsScreen extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            reports : []
        }
        this.renderReportDataTable = this.renderReportDataTable.bind(this);
    }

    renderReportDataTable = (reportsResponse) =>{
        try {
            reportsResponse.map(function (r) {
                     return [
                         r.gameId,
                         r.question,
                         r.userAnswer,
                         r.isValidAnswer,
                         r.created_at
                     ];
                 })
        } catch(e){}
}
    
    componentDidMount(){
        const email = this.props.auth.email;

        fetch('http://localhost:8080/api/report/'+email).then(
        (response) => {
            return response.json();
        },
        (error) => { return false;}
    ).then(response => {
        this.setState({reports: response});
    })
    /*
        this.props.generateReport(email).then(response => {
            this.renderReportDataTable(response);
        })
        this.setState({reports: this.props.generateReport(email)}, (resp) => this.renderReportDataTable(resp) ); */
    }
    
    render() {

        this.report = this.state.reports.map(function (r) {
            return [
                <tr key={r.id}>
                <td>{r.gameId}</td>
                <td>{r.question}</td>
                <td>{r.userAnswer}</td>
                <td>{r.isValidAnswer}</td>
                <td>{r.created_at}</td>
                </tr>
            ];
        });

        return (
            <section className='reports'>
            <Header/>
            <div className="not-found">
                <h1>REPORTS SCREEN</h1>
            </div>
             <div id="dataTableOne">
                <table className={'reports__redTable '}>
                    <thead>
                        <th>Game ID</th>
                        <th>Question</th>
                        <th>User Entered Value</th>
                        <th>IS Answer correct</th>
                        <th>Game played time</th>
                    </thead>
                    <tbody>
                    {this.report}
                    </tbody>
                </table>
             </div>
            </section>
        )
    }
}

ReportsScreen = reduxForm({ form: 'reportForm' })(ReportsScreen);

const mapStateToProps = state => ({
    auth: state.auth,
    report: state.report
});

const mapDispatchToProps = dispatch => {
    return {
        generateReport: (userId) => {
            dispatch(generateReport(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsScreen);
