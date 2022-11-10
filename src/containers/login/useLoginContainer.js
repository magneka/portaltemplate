import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchLoginUser } from "../../redux/login/loginActions";
import { messages } from "./loginContainer.i18n";

export const useLoginContainer = (locale) => {

    const showToasts = true;
    
    const localeMessages = messages[locale]  
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginState = useSelector(state => state.login)
    const dispatch = useDispatch()  

    const handleChange = (e) => {        
        console.log(e.target.value)
        if (e.target.name = 'email') {
            setUsername(e.target.value)
        }
        // TODO PASSWORD
    }
    const submitHandler=  (e) => {
        dispatch(dispatchLoginUser(showToasts, localeMessages, username, password))
    }
    const hasError = (fld) => { return false }
    const authError = ""
   
    const submitGlemtPassordHandler =  (e) => {}   

    return {
        localeMessages, showToasts, loginState, handleChange, submitHandler, hasError, authError, submitGlemtPassordHandler, username, password 
    }    
}