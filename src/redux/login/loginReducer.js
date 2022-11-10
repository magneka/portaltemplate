import { loginActions } from "./loginActions";

const initialState = {
    data: {},
    loggedin: false,
    fetched: false,
    loading: false,
    error: ''
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {

        case loginActions.LOADING:
            return {
                ...state,
                data: {},
                fetched: false,
                loggedin: false,
                loading: true,
                error: null
            };

        case loginActions.DATA_FETCHED:
            return {
                ...state,
                data: {...action.payload.data},
                fetched: false,
                loggedin: true,
                loading: false,
                error: null
            };

        case loginActions.LOGOUT:
            return {
                ...state,
                data: {},
                fetched: false,
                loggedin: false,
                loading: true,
                error: null
            };

        case loginActions.ERROR:
            return {
                ...state,
                data: {},
                fetched: false,
                loggedin: false,
                loading: true,
                error: action.data
            }

        default:
            return state
    }
}
