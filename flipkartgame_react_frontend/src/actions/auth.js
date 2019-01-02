import fetch from "cross-fetch";

export const LOGIN = 'auth/login';
export const LOGOUT = 'auth/logout';
export const VALIDATE_USER = 'auth/validate_user';
export const LOGIN_SUCCESS = 'auth/login_success';

export const authenticated_middleware = function(response) {debugger;
    if (response.status == 401) {
        return dispatch => dispatch({type: LOGOUT});
    }
}

export const fetchLogin = (dispatch, form) => {
    var data = new FormData();
    data.append('email', form.email);
    data.append('password', form.password);
    return fetch('http://localhost:8080/api/login', {method: 'POST', body: data}).then(
        (response) => {
            return response.json();
        },
        (error) => { return false;}
    );
}
export const fetchLogout = (user) => {
    return fetch('./api/logout').then(
        (response) => response.json(),
        (error) => {console.log(error)}
    );
}
export const fetchValidateUser = (dispatch) => {
    return fetch('./api/getUser').then(
        (response) => {
            return response.json();
        },
        (error) => {alert(error.json())}
    ).then((json) => {
        if (json.error == 'Unauthenticated.') {
            dispatch({type: LOGOUT});
            return null;
        }
        return json;
    });
}

export const login = (form) => {
    return (dispatch) => {
        fetchLogin(dispatch, form).then((isValidUser) => {
            if (isValidUser){
                return dispatch({ type: LOGIN_SUCCESS, user: form})
            } else {
                alert('We cant find an account with this credentials. Please make sure you entered the right information and you have verified your email address.');
               /* $.toast({
                    heading: 'Information',
                    text: 'We cant find an account with this credentials. Please make sure you entered the right information and you have verified your email address.',
                    showHideTransition: 'slide',
                    icon: 'info'
                })*/
                window.location.reload();
            }
        });
    }
}
export const logout = (user) => {
    return (dispatch) => {
        fetchLogout(user).then((response) => dispatch({type: LOGOUT, response}))
    }
}
export const validateUser = (user) => {
    return (dispatch) => {
        fetchValidateUser(dispatch).then((response) => {
            if (response) {
                let user = response.user;
                return dispatch({type: LOGIN, user})
            }

        });
    }
}
