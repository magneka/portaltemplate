import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useMemo, useEffect } from 'react';
import LocaleContext from '../../context/LocaleContext';
import { useWelcomeContainer } from './useWelcomeContainer';

export const WelcomeContainer = (props) => {

    const locale = React.useContext(LocaleContext);

    const { localeMessages, showToasts } = useWelcomeContainer(locale)

    /*

    

    const crState = useSelector(state => state.sakslisteHeader)
    const dispatch = useDispatch()  

    useEffect(() => {
      // initialisering av komponenten 
    }, [])
    */

    return (
        <>   
            {localeMessages['Velkommen']}
        </>
        
    )
}
