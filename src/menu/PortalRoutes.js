import React, {Fragment} from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { LoginContainer } from '../containers/login/LoginContainer'
import { WelcomeContainer } from '../containers/welcome/WelcomeContainer'


const PortalRoutes = (props) => {

    console.log("PortalRoutes", props)

    // TODO bruk reducer for å finne ut om du er pålogget
    const loginState = useSelector(state => state.login)
    /*
        (auth.isAuthenticated)
            ? <Route exact path="/" component={LoginWelcome} />
            : <Route exact path="/" component={Welcome} />
    */

   if (!loginState.loggedin) {
     return (
        <Fragment>
            <Switch>    
                <Route exact path="/" component={LoginContainer} />
            </Switch>
        </Fragment>
     )
   }


    return (
        <Fragment>
            <Switch>    


                <Route exact path="/" component={WelcomeContainer} />
            </Switch>
        </Fragment>
    )
}

export default PortalRoutes