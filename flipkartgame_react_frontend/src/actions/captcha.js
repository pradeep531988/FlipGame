import fetch from "cross-fetch";
export const INIT_CAPTCHA = 'captcha/initcaptcha';
export const RESET_CAPTCHA = 'captcha/resetcaptcha';
export const RESET_NEW_GAME = 'New Game';

export const fetchCaptcha = ( form, level) => {
    var data = new FormData();
    data.append('email', form.email);
    return fetch('http://localhost:8080/api/captcha/'+level, {method: 'POST', body: data}).then(
        (response) => {
            return response.json();
        },
        (error) => {return false;}
    );
}

export const initCaptcha = (form, level) => {
    return (dispatch) => {
        fetchCaptcha(form, level).then((captchaResponse) => {
            if (captchaResponse){
                return dispatch({ type: INIT_CAPTCHA, captcha : captchaResponse})
            } else {
                window.location.reload();
            }
        });
    }
}

export const updateUserInputAndGetNewCaptcha = ( gameId, emailId, userInput, captcha ) => {debugger;
    var data = new FormData();
    data.append('name', captcha.name);
    data.append('id', captcha.id);
    data.append('difficulty', captcha.difficulty);
    data.append('answer', captcha.answer);
    data.append('counter', captcha.counter);


   return fetch('http://localhost:8080/api/captcha/user/'+gameId+'/'+encodeURI(emailId)+'/'+userInput, {method: 'POST', body: data}).then(
        (response) => {
            return response.json();
        },
        (error) => { return false;}
    );
}

export const handleUserInput = (gameId, emailId, userInput, captcha) => {
    return (dispatch) => {
        updateUserInputAndGetNewCaptcha(gameId, emailId, userInput, captcha).then((captchaResponse) => {
            if (captchaResponse){
                return dispatch({ type: INIT_CAPTCHA, captcha : captchaResponse})
            } else {
                window.location.reload();
            }
        });
    }
}

export const resetCaptcha = () => { return(dispatch) => {
    return dispatch({ type: RESET_CAPTCHA, captcha : RESET_NEW_GAME} );
    }
}