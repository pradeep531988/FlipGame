export const REPORT = 'reports/report';

export const fetchReport = ( userId) => {
    return fetch('http://localhost:8080/api/report/'+userId).then(
        (response) => {
            return response.json();
        },
        (error) => { return false;}
    );
}

/*
export const generateReport = (userId) => {
    return (dispatch) => {
        fetchReport(userId).then((reportResponse) => {
            return  dispatch({ type: REPORT, reports : reportResponse})
    });
    }
}*/

export const generateReport = (userId) => {
    return fetchReport(userId);
}