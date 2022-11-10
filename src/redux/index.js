import { combineReducers } from 'redux'
import counterReducer from './counter/counterReducer'
import { loginReducer } from './login/loginReducer';

const allReducersCombined = combineReducers({
    counter: counterReducer,  
    login: loginReducer, 
})

// reset the state of a redux store
const combinedReducer = (state, action) => {
    if (action.type === 'RESET_STORE') {
        state = undefined;
    }
    return allReducersCombined(state, action)
}
export const resetStore = () => {
    
    return {
        type: 'RESET_STORE'
    }
}

export default combinedReducer