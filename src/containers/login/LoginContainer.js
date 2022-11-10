import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useMemo, useEffect } from 'react';
import LocaleContext from '../../context/LocaleContext';
import { useLoginContainer } from './useLoginContainer';
import LoginForm from './components/LoginForm';

export const LoginContainer = (props) => {

    const locale = React.useContext(LocaleContext);

    const { 
        localeMessages, showToasts, loginState, 
        handleChange, submitHandler, hasError, authError, 
        submitGlemtPassordHandler, username, password  } = useLoginContainer(locale)

    /*

    

    const crState = useSelector(state => state.sakslisteHeader)
    const dispatch = useDispatch()  

    useEffect(() => {
      // initialisering av komponenten 
    }, [])
    */

    return (
        <>               
            <LoginForm 
                handleChange={handleChange}
                submitHandler={submitHandler}
                hasError={hasError}    
                authError={authError}            
                submitGlemtPassordHandler={submitGlemtPassordHandler}
                username={username}
                password={password}
            />
        </>
        
    )
}
