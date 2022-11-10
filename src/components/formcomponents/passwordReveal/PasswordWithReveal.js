import React, { useState } from "react";
import { Form } from "react-bootstrap";

import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';


//https://stackblitz.com/edit/show-hide-password-react?file=src%2FApp.js

export const PasswordWithReveal = (props) => {

    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return (

        <div style={{ position: "relative"}}>
            <Form.Control
                style={{float: "left"}}
                type={isRevealPwd ? "text" : "password"}
                name="password"
                placeholder=""
                onChange={(event) => props.handleChange(event)}
            />
            <img
                style={{ height: "20px", position: "absolute", marginLeft: "-28px", marginTop: "9px"}}
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd(prevState => !prevState)}
            />
        </div>
    )
}