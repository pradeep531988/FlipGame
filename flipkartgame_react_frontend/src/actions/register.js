export const REGISTER = 'register/register';
export const REGISTER_USER = 'register/registerUser';

export const register = (form) => {
    return (dispatch) => { return dispatch({type: REGISTER, registration: 'createRegistration'})};
}


export const registerUser = (form) => {debugger;
    var data = new FormData();
    data.append('email', form.email);
    data.append('password', form.password);
    data.append('userName', form.userName )
    return function (dispatch){

    return fetch('http://localhost:8080/api/register', {method: 'POST', body: data}).then(
        (response) => {
            return response.status;
        },
        (error) => {console.log(error)}
    ).then((responseStatus) => {
            return dispatch({type: REGISTER_USER, responseStatus});
    });
    }
}