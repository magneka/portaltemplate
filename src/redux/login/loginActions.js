import axios from "axios";
import { toast } from 'react-toastify';

export const loginActions = {
    LOADING : 'LOGIN_LOADING',
    LOGOUT: 'LOGOUT',
    DATA_FETCHED: 'LOGIN_DATA_FETCHED',    
}

export const loginBegin = () => ({
    type: loginActions.LOADING
});

export const loginSuccess = (data) => {
    return {
        type: loginActions.DATA_FETCHED,
        payload: { data: data }
    }
}

export const logoutUser = () => {
    return {
        type: loginActions.LOGOUT
    }
}

export const loginFailure = error => ({
    type: loginActions.ERROR,
    payload: { error }
});

export const dispatchLoginUser = (showToasts, messages, username, password) => {

    return dispatch => {

        const errorMessage = messages['toastLoginFailed']
        const okMessage = messages['toastLoginSuccessful']

        dispatch(loginBegin())

        // TODO Mock login 
        dispatch(loginSuccess({user: username}))
        return

        axios
            ({
                method: 'GET',
                url: `/login/${username}/${password}`,
            })
            .then((result) => {

                console.log(result)
                if (result.status !== 200) {
                    (showToasts && toast.error(errorMessage))
                    dispatch(loginFailure(errorMessage))
                } else {

                    (showToasts && toast.info(okMessage))
                    dispatch(loginSuccess(result.data))
                }
            })
            .catch((err) => {
                //let lErrMess = errorMessage + ' ' + getErrorMessage(err)
                let lErrMess = errorMessage + ' ' + err
                toast.error(lErrMess)
                dispatch(loginFailure(lErrMess))
            })
    }    
}


